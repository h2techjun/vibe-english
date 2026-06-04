/**
 * 학습 통계 집계 (IndexedDB 기반).
 * 진도 페이지에서 useLiveQuery 로 호출 → DB 변경 시 자동 갱신.
 */
import { db } from "@/lib/db";
import { CEFR_LEVELS, type CefrLevel } from "@/types/card";

export interface LevelStat {
  level: CefrLevel;
  total: number;
  learned: number;
}

export interface DayActivity {
  label: string;
  count: number;
}

export interface StudyStats {
  totalCards: number;
  learned: number;
  due: number;
  reviews: number;
  streak: number;
  levels: LevelStat[];
  recent: DayActivity[];
  /** 오늘 학습한 횟수 */
  today: number;
  /** 약점 카드 수 (lapses ≥ 1) */
  weak: number;
}

/** epoch ms → 로컬 날짜 키 (YYYY-M-D) */
function dayKey(ms: number): string {
  const d = new Date(ms);
  return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
}

export async function getStudyStats(now: Date = new Date()): Promise<StudyStats> {
  const [cards, progress, logs] = await Promise.all([
    db.cards.toArray(),
    db.progress.toArray(),
    db.studyLog.toArray(),
  ]);
  const nowMs = now.getTime();
  const progIds = new Set(progress.map((p) => p.cardId));

  // 레벨별 진도
  const levelMap = new Map<CefrLevel, { total: number; learned: number }>();
  for (const c of cards) {
    const e = levelMap.get(c.level) ?? { total: 0, learned: 0 };
    e.total += 1;
    if (progIds.has(c.id)) e.learned += 1;
    levelMap.set(c.level, e);
  }
  const levels: LevelStat[] = CEFR_LEVELS.filter((l) => levelMap.has(l)).map(
    (l) => ({ level: l, ...levelMap.get(l)! }),
  );

  // 일일 스트릭 (연속 학습일)
  const studiedDays = new Set(logs.map((l) => dayKey(l.reviewedAt)));
  let streak = 0;
  const cursor = new Date(now);
  // 오늘 아직 학습 전이면 어제부터 세어 스트릭을 끊지 않는다
  if (!studiedDays.has(dayKey(cursor.getTime()))) {
    cursor.setDate(cursor.getDate() - 1);
  }
  while (studiedDays.has(dayKey(cursor.getTime()))) {
    streak += 1;
    cursor.setDate(cursor.getDate() - 1);
  }

  // 최근 7일 학습량
  const recent: DayActivity[] = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date(now);
    d.setDate(d.getDate() - i);
    const key = dayKey(d.getTime());
    const count = logs.reduce(
      (acc, l) => (dayKey(l.reviewedAt) === key ? acc + 1 : acc),
      0,
    );
    recent.push({ label: `${d.getMonth() + 1}/${d.getDate()}`, count });
  }

  return {
    totalCards: cards.length,
    learned: progress.length,
    due: progress.filter((p) => p.due <= nowMs).length,
    reviews: logs.length,
    streak,
    levels,
    recent,
    today: recent.length > 0 ? recent[recent.length - 1].count : 0,
    weak: progress.filter((p) => p.lapses >= 1).length,
  };
}
