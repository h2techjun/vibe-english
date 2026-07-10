/**
 * 한국어 학습(Loopla Korean) 번들 콘텐츠 통합 export.
 * 영어 빌드의 data/index.ts 와 대칭 구조 — 카드는 한국어 표제어(ko) 기준 중복 제거.
 *
 * SEED_VERSION_KO 를 올리면 다음 실행 시 cards/decks 가 재적재된다.
 * (progress 는 별도 테이블이라 카드 id 안정 유지 시 보존)
 */
import type { VocabCard, Deck } from "@/types/card";

import { KO_A1_DECKS, KO_A1_CARDS } from "./a1";
import { KO_A2_DECKS, KO_A2_CARDS } from "./a2";
import { KO_B1_DECKS, KO_B1_CARDS } from "./b1";
import { KO_B2_DECKS, KO_B2_CARDS } from "./b2";
import { KO_C1_DECKS, KO_C1_CARDS } from "./c1";
import { KO_C2_DECKS, KO_C2_CARDS } from "./c2";

// ── 어휘(단어) 카드 — 회화 표현 덱과 별개인 단어장 (A1~C2 전 레벨) ──
import { KO_VOCAB_A1_DECKS, KO_VOCAB_A1_CARDS } from "./vocab-a1";
import { KO_VOCAB_A2_DECKS, KO_VOCAB_A2_CARDS } from "./vocab-a2";
import { KO_VOCAB_B1_DECKS, KO_VOCAB_B1_CARDS } from "./vocab-b1";
import { KO_VOCAB_B2_DECKS, KO_VOCAB_B2_CARDS } from "./vocab-b2";
import { KO_VOCAB_C1_DECKS, KO_VOCAB_C1_CARDS } from "./vocab-c1";
import { KO_VOCAB_C2_DECKS, KO_VOCAB_C2_CARDS } from "./vocab-c2";

/** 콘텐츠 버전 — 카드/덱/대화/시나리오 수정마다 +1 */
export const SEED_VERSION_KO = 5;

export const ALL_DECKS_KO: Deck[] = [
  // 회화 표현 덱
  ...KO_A1_DECKS,
  ...KO_A2_DECKS,
  ...KO_B1_DECKS,
  ...KO_B2_DECKS,
  ...KO_C1_DECKS,
  ...KO_C2_DECKS,
  // 어휘(단어) 덱
  ...KO_VOCAB_A1_DECKS,
  ...KO_VOCAB_A2_DECKS,
  ...KO_VOCAB_B1_DECKS,
  ...KO_VOCAB_B2_DECKS,
  ...KO_VOCAB_C1_DECKS,
  ...KO_VOCAB_C2_DECKS,
];

// 회화 표현 먼저, 그 다음 어휘 — 같은 한국어 표제어는 먼저 선언된 카드만 남긴다.
const RAW_CARDS: VocabCard[] = [
  ...KO_A1_CARDS,
  ...KO_A2_CARDS,
  ...KO_B1_CARDS,
  ...KO_B2_CARDS,
  ...KO_C1_CARDS,
  ...KO_C2_CARDS,
  ...KO_VOCAB_A1_CARDS,
  ...KO_VOCAB_A2_CARDS,
  ...KO_VOCAB_B1_CARDS,
  ...KO_VOCAB_B2_CARDS,
  ...KO_VOCAB_C1_CARDS,
  ...KO_VOCAB_C2_CARDS,
];

/** 한국어 표제어 기준 중복 키 (문장부호·공백 제거) */
function dedupeKey(ko: string): string {
  return ko.replace(/[.,!?;:'"\s]/g, "").trim();
}

const seen = new Set<string>();
export const ALL_CARDS_KO: VocabCard[] = RAW_CARDS.filter((card) => {
  const key = dedupeKey(card.ko);
  if (seen.has(key)) return false;
  seen.add(key);
  return true;
});
