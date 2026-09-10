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
 * - dueCount: 지금 복습 대기 장수
 * - nextDueAt: 대기 중이면 지금, 없으면 가장 이른 예정 시각(없으면 null)
 */
export async function computeDueReport(nowMs = Date.now()): Promise<DueReport> {
  const dueCount = await db.progress.where("due").belowOrEqual(nowMs).count();
  if (dueCount > 0) return { dueCount, nextDueAt: new Date(nowMs) };
  const upcoming = await db.progress.where("due").above(nowMs).limit(1).toArray();
  return {
    dueCount: 0,
    nextDueAt: upcoming.length > 0 ? new Date(upcoming[0].due) : null,
  };
}

/** 계산 + 서버 보고 (구독이 없으면 서버가 무시한다) */
export async function reportDueNow(): Promise<void> {
  try {
    await reportDue(await computeDueReport());
  } catch {
    // 보고 실패는 조용히 — 다음 진입에서 다시 시도
  }
}
