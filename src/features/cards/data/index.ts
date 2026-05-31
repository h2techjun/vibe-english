/**
 * 번들 학습 콘텐츠 통합 export (A1~C2 표현 + 어휘).
 *
 * SEED_VERSION 을 올리면 다음 앱 실행 시 cards/decks 테이블이 재적재된다.
 * (progress 테이블은 보존되므로 카드 id 를 안정적으로 유지할 것)
 *
 * 카드는 en(표제어) 기준으로 중복 제거된다 — 여러 어휘 묶음에서 같은 단어가
 * 나오면 먼저 선언된 것(낮은 레벨/표현 우선)만 남긴다.
 */
import type { VocabCard, Deck } from "@/types/card";

// ── 상황 표현 카드 ──
import { A1_DECKS, A1_CARDS } from "./a1";
import { A1_MORE_DECKS, A1_MORE_CARDS } from "./a1-more";
import { A2_DECKS, A2_CARDS } from "./a2";
import { A2_MORE_DECKS, A2_MORE_CARDS } from "./a2-more";
import { B1_DECKS, B1_CARDS } from "./b1";
import { B1_MORE_DECKS, B1_MORE_CARDS } from "./b1-more";
import { B1_MORE2_DECKS, B1_MORE2_CARDS } from "./b1-more2";
import { B2_DECKS, B2_CARDS } from "./b2";
import { B2_MORE_DECKS, B2_MORE_CARDS } from "./b2-more";
import { B2_MORE2_DECKS, B2_MORE2_CARDS } from "./b2-more2";
import { C1_DECKS, C1_CARDS } from "./c1";
import { C1_MORE_DECKS, C1_MORE_CARDS } from "./c1-more";
import { C1_MORE2_DECKS, C1_MORE2_CARDS } from "./c1-more2";
import { C2_DECKS, C2_CARDS } from "./c2";
import { C2_MORE_DECKS, C2_MORE_CARDS } from "./c2-more";
import { C2_MORE2_DECKS, C2_MORE2_CARDS } from "./c2-more2";

// ── 어휘(단어) 카드 ──
import { VOCAB_A1_1_DECKS, VOCAB_A1_1_CARDS } from "./vocab-a1-1";
import { VOCAB_A2_1_DECKS, VOCAB_A2_1_CARDS } from "./vocab-a2-1";
import { VOCAB_A2_2_DECKS, VOCAB_A2_2_CARDS } from "./vocab-a2-2";
import { VOCAB_B1_1_DECKS, VOCAB_B1_1_CARDS } from "./vocab-b1-1";
import { VOCAB_B1_2_DECKS, VOCAB_B1_2_CARDS } from "./vocab-b1-2";
import { VOCAB_B1_3_DECKS, VOCAB_B1_3_CARDS } from "./vocab-b1-3";
import { VOCAB_B2_1_DECKS, VOCAB_B2_1_CARDS } from "./vocab-b2-1";
import { VOCAB_B2_2_DECKS, VOCAB_B2_2_CARDS } from "./vocab-b2-2";
import { VOCAB_B2_3_DECKS, VOCAB_B2_3_CARDS } from "./vocab-b2-3";
import { VOCAB_B2_4_DECKS, VOCAB_B2_4_CARDS } from "./vocab-b2-4";
import { VOCAB_C1_1_DECKS, VOCAB_C1_1_CARDS } from "./vocab-c1-1";
import { VOCAB_C1_2_DECKS, VOCAB_C1_2_CARDS } from "./vocab-c1-2";
import { VOCAB_C1_3_DECKS, VOCAB_C1_3_CARDS } from "./vocab-c1-3";
import { VOCAB_C2_1_DECKS, VOCAB_C2_1_CARDS } from "./vocab-c2-1";
import { VOCAB_C2_2_DECKS, VOCAB_C2_2_CARDS } from "./vocab-c2-2";
import { VOCAB_C2_3_DECKS, VOCAB_C2_3_CARDS } from "./vocab-c2-3";

/** 콘텐츠 버전 — 카드/덱 데이터를 수정할 때마다 +1 */
export const SEED_VERSION = 6;

export const ALL_DECKS: Deck[] = [
  ...A1_DECKS,
  ...A1_MORE_DECKS,
  ...VOCAB_A1_1_DECKS,
  ...A2_DECKS,
  ...A2_MORE_DECKS,
  ...VOCAB_A2_1_DECKS,
  ...VOCAB_A2_2_DECKS,
  ...B1_DECKS,
  ...B1_MORE_DECKS,
  ...B1_MORE2_DECKS,
  ...VOCAB_B1_1_DECKS,
  ...VOCAB_B1_2_DECKS,
  ...VOCAB_B1_3_DECKS,
  ...B2_DECKS,
  ...B2_MORE_DECKS,
  ...B2_MORE2_DECKS,
  ...VOCAB_B2_1_DECKS,
  ...VOCAB_B2_2_DECKS,
  ...VOCAB_B2_3_DECKS,
  ...VOCAB_B2_4_DECKS,
  ...C1_DECKS,
  ...C1_MORE_DECKS,
  ...C1_MORE2_DECKS,
  ...VOCAB_C1_1_DECKS,
  ...VOCAB_C1_2_DECKS,
  ...VOCAB_C1_3_DECKS,
  ...C2_DECKS,
  ...C2_MORE_DECKS,
  ...C2_MORE2_DECKS,
  ...VOCAB_C2_1_DECKS,
  ...VOCAB_C2_2_DECKS,
  ...VOCAB_C2_3_DECKS,
];

// 표현 먼저, 그 다음 어휘 — 같은 표제어는 먼저 선언된 카드만 남긴다.
const RAW_CARDS: VocabCard[] = [
  ...A1_CARDS,
  ...A1_MORE_CARDS,
  ...A2_CARDS,
  ...A2_MORE_CARDS,
  ...B1_CARDS,
  ...B1_MORE_CARDS,
  ...B1_MORE2_CARDS,
  ...B2_CARDS,
  ...B2_MORE_CARDS,
  ...B2_MORE2_CARDS,
  ...C1_CARDS,
  ...C1_MORE_CARDS,
  ...C1_MORE2_CARDS,
  ...C2_CARDS,
  ...C2_MORE_CARDS,
  ...C2_MORE2_CARDS,
  ...VOCAB_A1_1_CARDS,
  ...VOCAB_A2_1_CARDS,
  ...VOCAB_A2_2_CARDS,
  ...VOCAB_B1_1_CARDS,
  ...VOCAB_B1_2_CARDS,
  ...VOCAB_B1_3_CARDS,
  ...VOCAB_B2_1_CARDS,
  ...VOCAB_B2_2_CARDS,
  ...VOCAB_B2_3_CARDS,
  ...VOCAB_B2_4_CARDS,
  ...VOCAB_C1_1_CARDS,
  ...VOCAB_C1_2_CARDS,
  ...VOCAB_C1_3_CARDS,
  ...VOCAB_C2_1_CARDS,
  ...VOCAB_C2_2_CARDS,
  ...VOCAB_C2_3_CARDS,
];

function dedupeKey(en: string): string {
  return en.toLowerCase().replace(/[.,!?;:'"]/g, "").trim();
}

const seen = new Set<string>();
export const ALL_CARDS: VocabCard[] = RAW_CARDS.filter((card) => {
  const key = dedupeKey(card.en);
  if (seen.has(key)) return false;
  seen.add(key);
  return true;
});
