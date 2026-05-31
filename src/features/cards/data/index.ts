/**
 * 번들 학습 콘텐츠 통합 export (A1~C2 전 레벨 + 확장분).
 *
 * SEED_VERSION 을 올리면 다음 앱 실행 시 cards/decks 테이블이 재적재된다.
 * (progress 테이블은 보존되므로 카드 id 를 안정적으로 유지할 것)
 */
import type { VocabCard, Deck } from "@/types/card";
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

/** 콘텐츠 버전 — 카드/덱 데이터를 수정할 때마다 +1 */
export const SEED_VERSION = 5;

export const ALL_DECKS: Deck[] = [
  ...A1_DECKS,
  ...A1_MORE_DECKS,
  ...A2_DECKS,
  ...A2_MORE_DECKS,
  ...B1_DECKS,
  ...B1_MORE_DECKS,
  ...B1_MORE2_DECKS,
  ...B2_DECKS,
  ...B2_MORE_DECKS,
  ...B2_MORE2_DECKS,
  ...C1_DECKS,
  ...C1_MORE_DECKS,
  ...C1_MORE2_DECKS,
  ...C2_DECKS,
  ...C2_MORE_DECKS,
  ...C2_MORE2_DECKS,
];

export const ALL_CARDS: VocabCard[] = [
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
];
