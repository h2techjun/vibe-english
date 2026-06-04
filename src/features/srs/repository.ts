/**
 * SRS 진도 저장소 (IndexedDB I/O).
 * 순수 로직(scheduler.ts)과 DB 사이를 잇는다.
 */
import { db } from "@/lib/db";
import type { VocabCard, CefrLevel } from "@/types/card";
import { isVocabDeck, isLevelAtLeast } from "@/types/card";
import type { Dialogue } from "@/types/dialogue";
import type { Scenario } from "@/types/scenario";
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
 *
 * - deckId 없음(학습 탭): **회화 표현만**(단어 제외) + 신규는 startLevel 이상 레벨만.
 * - deckId 있음(특정 덱): 그 덱만(회화/단어 무관), 신규는 레벨 무관 전부.
 *
 * @param deckId 특정 덱만 학습할 때 (없으면 회화 표현 전체)
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
  const startLevel = settings.startLevel;

  const due: { card: VocabCard; due: number }[] = [];
  const fresh: VocabCard[] = [];
  for (const card of allCards) {
    // 학습 탭(deckId 없음)에서는 단어 덱 제외 → 회화 표현만
    if (!deckId && isVocabDeck(card.deck)) continue;

    const p = progressMap.get(card.id);
    if (!p) {
      // 신규: 학습 탭이면 시작 레벨 이상만 도입 (그 아래는 안다고 가정)
      if (!deckId && startLevel && !isLevelAtLeast(card.level, startLevel)) {
        continue;
      }
      fresh.push(card);
    } else if (p.due <= nowMs) {
      due.push({ card, due: p.due });
    }
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

/**
 * 대화 학습 큐 — 복습 대상(due) 먼저 → 신규(시작 레벨 이상) 한도까지.
 * progress 테이블을 카드와 공유한다 (dialogue id 로 저장).
 */
export async function buildDialogueQueue(
  now: Date = new Date(),
): Promise<Dialogue[]> {
  const settings = await getSettings();
  const [all, progressList] = await Promise.all([
    db.dialogues.toArray(),
    db.progress.toArray(),
  ]);
  const progMap = new Map(progressList.map((p) => [p.cardId, p]));
  const startLevel = settings.startLevel;
  const nowMs = now.getTime();

  const due: { d: Dialogue; due: number }[] = [];
  const fresh: Dialogue[] = [];
  for (const d of all) {
    const p = progMap.get(d.id);
    if (!p) {
      if (startLevel && !isLevelAtLeast(d.level, startLevel)) continue;
      fresh.push(d);
    } else if (p.due <= nowMs) {
      due.push({ d, due: p.due });
    }
  }
  due.sort((a, b) => a.due - b.due);
  fresh.sort(
    (a, b) => a.level.localeCompare(b.level) || a.id.localeCompare(b.id),
  );

  // 대화는 한 장이 무거우니 신규 한도를 카드의 절반 수준으로
  const newLimit = Math.max(4, Math.round(settings.dailyNewLimit / 2));
  return [...due.map((x) => x.d), ...fresh.slice(0, newLimit)];
}

/**
 * 멀티턴 시나리오 큐 — 복습(due) 먼저 → 신규(시작 레벨 이상).
 * progress 테이블 공유 (scenario id).
 */
export async function buildScenarioQueue(
  now: Date = new Date(),
): Promise<Scenario[]> {
  const settings = await getSettings();
  const [all, progressList] = await Promise.all([
    db.scenarios.toArray(),
    db.progress.toArray(),
  ]);
  const progMap = new Map(progressList.map((p) => [p.cardId, p]));
  const startLevel = settings.startLevel;
  const nowMs = now.getTime();

  const due: { s: Scenario; due: number }[] = [];
  const fresh: Scenario[] = [];
  for (const s of all) {
    const p = progMap.get(s.id);
    if (!p) {
      if (startLevel && !isLevelAtLeast(s.level, startLevel)) continue;
      fresh.push(s);
    } else if (p.due <= nowMs) {
      due.push({ s, due: p.due });
    }
  }
  due.sort((a, b) => a.due - b.due);
  fresh.sort(
    (a, b) => a.level.localeCompare(b.level) || a.id.localeCompare(b.id),
  );
  // 시나리오는 여러 턴이라 한 번에 적게
  return [...due.map((x) => x.s), ...fresh.slice(0, 3)];
}

/**
 * 약점 카드 — 한 번이라도 까먹은(lapses ≥ 1) 카드를 많이 틀린 순으로.
 * 집중 복습용. 회화 표현/단어(cards 테이블)만 대상.
 */
export async function getWeakCards(
  limit = 20,
): Promise<{ cards: VocabCard[]; total: number }> {
  const [cards, progressList] = await Promise.all([
    db.cards.toArray(),
    db.progress.toArray(),
  ]);
  const cardMap = new Map(cards.map((c) => [c.id, c]));
  const weak = progressList
    .filter((p) => p.lapses >= 1)
    .sort((a, b) => b.lapses - a.lapses)
    .map((p) => cardMap.get(p.cardId))
    .filter((c): c is VocabCard => Boolean(c));
  return { cards: weak.slice(0, limit), total: weak.length };
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
