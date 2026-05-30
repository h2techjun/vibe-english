/**
 * 번들 학습 콘텐츠 통합 export.
 *
 * SEED_VERSION 을 올리면 다음 앱 실행 시 cards/decks 테이블이 재적재된다.
 * (progress 테이블은 보존되므로 카드 id 를 안정적으로 유지할 것)
 */
import type { VocabCard, Deck } from "@/types/card";
import { A1_DECKS, A1_CARDS } from "./a1";

/** 콘텐츠 버전 — 카드/덱 데이터를 수정할 때마다 +1 */
export const SEED_VERSION = 1;

export const ALL_DECKS: Deck[] = [...A1_DECKS];

export const ALL_CARDS: VocabCard[] = [...A1_CARDS];
