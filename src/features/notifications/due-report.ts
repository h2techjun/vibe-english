/**
 * 복습 상태 계산·보고 — 푸시 예약의 단일 소스.
 *
 * 서버(Workmate 크론)는 카드를 모르므로, 앱이 "다음 복습 시각 + 대기 장수"를 알려줘야
 * 복습 시점에 알림이 간다. 앱 진입(ReminderMount)·학습 종료(StudySession)·구독 시(설정)에 호출한다.
 */

import { db } from "@/lib/db";
import { reportDue, type DueReport } from "@/lib/push";

/**
 * progress.due(epoch ms 인덱스)에서 계산한다.
 * - nextDueAt: 지금 대기 중이면 지금, 아니면 가장 이른 예정 시각(없으면 null)
 * - dueCount: **nextDueAt 시점의** 대기 장수
 *
 * 왜 "그 시점의" 장수인가: 앱을 닫은 뒤 due 가 되는 경우 서버는 보고값만 갖고 판단한다.
 * 지금 장수(0)를 보내면 크론이 `due_count > 0` 조건에서 그 구독을 걸러내 알림이 영원히
 * 안 간다(2026-09-10 실측으로 발견). 예정 시각과 그 시각의 장수를 함께 보내야 한다.
 */
export async function computeDueReport(nowMs = Date.now()): Promise<DueReport> {
  const dueNow = await db.progress.where("due").belowOrEqual(nowMs).count();
  if (dueNow > 0) return { dueCount: dueNow, nextDueAt: new Date(nowMs) };

  const upcoming = await db.progress.where("due").above(nowMs).limit(1).toArray();
  if (upcoming.length === 0) return { dueCount: 0, nextDueAt: null };

  const nextMs = upcoming[0].due;
  const countAtNext = await db.progress.where("due").belowOrEqual(nextMs).count();
  return { dueCount: Math.max(1, countAtNext), nextDueAt: new Date(nextMs) };
}

/** 계산 + 서버 보고 (구독이 없으면 서버가 무시한다) */
export async function reportDueNow(): Promise<void> {
  try {
    await reportDue(await computeDueReport());
  } catch {
    // 보고 실패는 조용히 — 다음 진입에서 다시 시도
  }
}
