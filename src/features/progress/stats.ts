/**
 * 학습 통계 집계 (IndexedDB 기반) — 코스별.
 * 진도 페이지에서 useLiveQuery 로 호출 → DB 변경 시 자동 갱신.
 *
 * 카드/레벨/약점 지표는 현재 코스의 카드만 집계한다 (다른 코스·회화 progress 가
 * 섞여 부풀지 않게 — 통계 오염 방지). 스트릭/일일 목표/최근 7일은 "오늘 공부했다"
 * 라는 습관 지표라 코스 무관 전역으로 센다.
 */
import { db } from "@/lib/db";
import {
  CEFR_LEVELS,
  isVocabDeck,
  type CefrLevel,
  type Course,
} from "@/types/card";
import { startLevelOf } from "@/lib/course";

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
  /**
   * 레벨업 제안 — 현재 시작 레벨의 회화 카드를 80% 이상 학습했으면
   * 다음 레벨을 제안한다 (C2 상한).
   */
  levelUp: { from: CefrLevel; next: CefrLevel } | null;
}

/** epoch ms → 로컬 날짜 키 (YYYY-M-D) */
function dayKey(ms: number): string {
  const d = new Date(ms);
  return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
}

/** 레벨업 판정 기준 (시작 레벨 회화 카드 학습 비율) */
const LEVEL_UP_RATIO = 0.8;

export async function getStudyStats(
  course: Course,
  now: Date = new Date(),
): Promise<StudyStats> {
  const [cards, progress, logs, settings] = await Promise.all([
    db.cards.where("course").equals(course).toArray(),
    db.progress.toArray(),
    db.studyLog.toArray(),
    db.settings.get("main"),
  ]);
  const nowMs = now.getTime();
  // 카드 지표는 현재 코스 카드의 progress 만 집계
  const cardIdSet = new Set(cards.map((c) => c.id));
  const cardProgress = progress.filter((p) => cardIdSet.has(p.cardId));
  const progIds = new Set(cardProgress.map((p) => p.cardId));

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

  // 일일 스트릭 (연속 학습일) — 전역
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

  // 최근 7일 학습량 — 전역
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

  // 레벨업 제안 — 시작 레벨의 회화(비단어) 카드 80% 이상 학습 시
  const startLevel = startLevelOf(settings ?? undefined, course);
  let levelUp: StudyStats["levelUp"] = null;
  if (startLevel) {
    const idx = CEFR_LEVELS.indexOf(startLevel);
    const next = CEFR_LEVELS[idx + 1];
    if (next) {
      const conv = cards.filter(
        (c) => c.level === startLevel && !isVocabDeck(c.deck),
      );
      const learnedConv = conv.filter((c) => progIds.has(c.id)).length;
      if (conv.length > 0 && learnedConv / conv.length >= LEVEL_UP_RATIO) {
        levelUp = { from: startLevel, next };
      }
    }
  }

  return {
    totalCards: cards.length,
    learned: cardProgress.length,
    due: cardProgress.filter((p) => p.due <= nowMs).length,
    reviews: logs.length,
    streak,
    levels,
    recent,
    today: recent.length > 0 ? recent[recent.length - 1].count : 0,
    weak: cardProgress.filter((p) => p.lapses >= 1).length,
    levelUp,
  };
}
