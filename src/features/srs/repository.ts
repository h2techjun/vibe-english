/**
 * SRS 진도 저장소 (IndexedDB I/O).
 * 순수 로직(scheduler.ts)과 DB 사이를 잇는다.
 */
import { db } from "@/lib/db";
import type { VocabCard, CefrLevel } from "@/types/card";
import type { CardProgress, ReviewGrade } from "@/types/srs";
import { State } from "@/types/srs";
import { gradeCard } from "./scheduler";
import { getSettings } from "@/features/cards/seed";

export interface StudyQueue {
  cards: VocabCard[];
  reviewCount: number;
  newCount: number;
}

/** 전체 progress 를 Map 으로 로드 */
export async function getProgressMap(): Promise<Map<string, CardProgress>> {
  const list = await db.progress.toArray();
  return new Map(list.map((p) => [p.cardId, p]));
}

/**
 * 오늘 학습할 큐를 만든다.
 * 복습 대상(due <= now) 먼저 → 신규 카드(레벨·덱 순) 한도까지.
 * @param deckId 특정 덱만 학습할 때 (없으면 전체)
 */
export async function buildStudyQueue(
  now: Date = new Date(),
  deckId?: string,
): Promise<StudyQueue> {
  const settings = await getSettings();
  const [allCards, decks, progressList] = await Promise.all([
    deckId
      ? db.cards.where("deck").equals(deckId).toArray()
      : db.cards.toArray(),
    db.decks.toArray(),
    db.progress.toArray(),
  ]);
  const progressMap = new Map(progressList.map((p) => [p.cardId, p]));
  const deckOrder = new Map(decks.map((d) => [d.id, d.order]));
  const nowMs = now.getTime();

  const due: { card: VocabCard; due: number }[] = [];
  const fresh: VocabCard[] = [];
  for (const card of allCards) {
    const p = progressMap.get(card.id);
    if (!p) fresh.push(card);
    else if (p.due <= nowMs) due.push({ card, due: p.due });
  }

  // 복습: 마감 임박 순
  due.sort((a, b) => a.due - b.due);
  // 신규: 레벨 → 덱 순서 → 카드 id
  fresh.sort((a, b) => {
    if (a.level !== b.level) return a.level.localeCompare(b.level);
    const oa = deckOrder.get(a.deck) ?? 999;
    const ob = deckOrder.get(b.deck) ?? 999;
    if (oa !== ob) return oa - ob;
    return a.id.localeCompare(b.id);
  });

  const reviewQueue =
    settings.dailyReviewLimit > 0
      ? due.slice(0, settings.dailyReviewLimit)
      : due;
  const newQueue = fresh.slice(0, settings.dailyNewLimit);

  return {
    cards: [...reviewQueue.map((d) => d.card), ...newQueue],
    reviewCount: reviewQueue.length,
    newCount: newQueue.length,
  };
}

/**
 * 카드 평가를 적용한다 — progress 갱신 + studyLog 기록 (원자적).
 */
export async function applyGrade(
  cardId: string,
  grade: ReviewGrade,
  now: Date = new Date(),
): Promise<CardProgress> {
  const existing = await db.progress.get(cardId);
  const { progress, prevState } = gradeCard(cardId, existing, grade, now);
  await db.transaction("rw", db.progress, db.studyLog, async () => {
    await db.progress.put(progress);
    await db.studyLog.add({
      cardId,
      rating: grade,
      reviewedAt: now.getTime(),
      prevState,
    });
  });
  return progress;
}

/** 덱별 진도 통계 */
export interface DeckStat {
  total: number;
  /** 한 번이라도 학습한 카드 수 (progress 존재) */
  learned: number;
  /** 지금 복습 대상 수 */
  due: number;
}

export async function getDeckStats(
  now: Date = new Date(),
): Promise<Map<string, DeckStat>> {
  const [cards, progressList] = await Promise.all([
    db.cards.toArray(),
    db.progress.toArray(),
  ]);
  const progressMap = new Map(progressList.map((p) => [p.cardId, p]));
  const nowMs = now.getTime();
  const stats = new Map<string, DeckStat>();

  for (const card of cards) {
    const s = stats.get(card.deck) ?? { total: 0, learned: 0, due: 0 };
    s.total += 1;
    const p = progressMap.get(card.id);
    if (p) {
      s.learned += 1;
      if (p.due <= nowMs) s.due += 1;
    }
    stats.set(card.deck, s);
  }
  return stats;
}

/** 레벨별 전체/학습 카운트 (레벨 잠금 해제 판정용) */
export async function getLevelProgress(): Promise<
  Map<CefrLevel, { total: number; mastered: number }>
> {
  const [cards, progressList] = await Promise.all([
    db.cards.toArray(),
    db.progress.toArray(),
  ]);
  const progressMap = new Map(progressList.map((p) => [p.cardId, p]));
  const result = new Map<CefrLevel, { total: number; mastered: number }>();

  for (const card of cards) {
    const r = result.get(card.level) ?? { total: 0, mastered: 0 };
    r.total += 1;
    const p = progressMap.get(card.id);
    // Review 상태 = 단기 학습을 졸업해 장기 기억으로 넘어간 카드
    if (p && p.state === State.Review) r.mastered += 1;
    result.set(card.level, r);
  }
  return result;
}
