/**
 * 카드/회화 표시 방향 어댑터 — 빌드 타깃(영어 학습 / 한국어 학습)에 따라
 * "무엇을 학습 대상으로 보여주고 무엇을 뜻으로 보여줄지"를 한 곳에서 분기한다.
 *
 * 학습 UI(flashcard/cloze/listen/dialogue/scenario)는 카드 필드(en/ko/...)에
 * 직접 접근하지 말고 이 모듈의 getCardFace / learnText / meaningText 를 쓴다.
 * 그래야 같은 컴포넌트가 두 빌드에서 올바른 방향으로 동작한다.
 */
import { BRAND } from "@/lib/brand";
import type { VocabCard } from "@/types/card";
import type { Bilingual } from "@/types/dialogue";

const isKorean = BRAND.target === "korean";

/** 학습 대상 언어의 TTS 언어 코드 (BCP-47) */
export const LEARN_TTS_LANG = isKorean ? "ko-KR" : "en-US";

/** 학습 대상 언어가 라틴 문자 기반인지 (cloze 토크나이즈 분기에 사용) */
export const LEARN_IS_LATIN = !isKorean;

export interface CardFace {
  /** 카드 앞면 = 학습 대상 표현 */
  term: string;
  /** 주 발음 표기 (영어=IPA / 한국어=로마자). 없을 수 있음 */
  pronPrimary?: string;
  /** 보조 발음 표기 (영어=한국어 음차 / 한국어=없음) */
  pronSecondary?: string;
  /** 뜻 (영어 빌드=한국어 / 한국어 빌드=영어) */
  meaning: string;
  /** 예문 (학습 대상 언어) */
  example: string;
  /** 예문 번역 (사용자 모국어) */
  exampleTrans: string;
}

/** 빌드 방향에 맞춰 카드의 앞/뒤·발음·예문을 해석한다. */
export function getCardFace(card: VocabCard): CardFace {
  if (isKorean) {
    return {
      term: card.ko,
      pronPrimary: card.roman,
      pronSecondary: undefined,
      meaning: card.en,
      example: card.exampleKo,
      exampleTrans: card.exampleEn,
    };
  }
  return {
    term: card.en,
    pronPrimary: card.ipa,
    pronSecondary: card.koPron,
    meaning: card.ko,
    example: card.exampleEn,
    exampleTrans: card.exampleKo,
  };
}

/** 회화 Bilingual 에서 학습 대상 언어 텍스트 (표시·TTS 대상) */
export function learnText(b: Bilingual): string {
  return isKorean ? b.ko : b.en;
}

/** 회화 Bilingual 에서 뜻(사용자 모국어) 텍스트 (가렸다 탭하는 대상) */
export function meaningText(b: Bilingual): string {
  return isKorean ? b.en : b.ko;
}
