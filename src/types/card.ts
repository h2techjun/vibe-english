/**
 * 학습 콘텐츠 타입. 외부 API 없이 번들 JSON으로 제공되는 읽기 전용 데이터.
 */

/** CEFR 6단계 레벨 */
export type CefrLevel = "A1" | "A2" | "B1" | "B2" | "C1" | "C2";

export const CEFR_LEVELS: readonly CefrLevel[] = [
  "A1",
  "A2",
  "B1",
  "B2",
  "C1",
  "C2",
] as const;

export const CEFR_LABELS: Record<CefrLevel, { ko: string; en: string }> = {
  A1: { ko: "입문", en: "Beginner" },
  A2: { ko: "초급", en: "Elementary" },
  B1: { ko: "중급", en: "Intermediate" },
  B2: { ko: "중상급", en: "Upper-Intermediate" },
  C1: { ko: "고급", en: "Advanced" },
  C2: { ko: "전문가", en: "Proficient" },
};

/**
 * 한 표현 = 카드 한 장. 양방향(영어 학습 / 한국어 학습) 빌드가 공유한다.
 *
 * 빌드별 카드 해석 (lib/card-view.ts 의 getCardFace 가 분기):
 *  - 영어 빌드: en = 학습 대상, ipa+koPron = 발음, ko = 뜻,
 *               exampleEn/exampleKo = 예문/번역
 *  - 한국어 빌드: ko = 학습 대상, roman = 발음(로마자), en = 뜻,
 *               exampleKo/exampleEn = 예문/번역
 *
 * 발음 필드는 학습 방향에 따라 한쪽만 채운다 (영어 카드 → ipa/koPron,
 * 한국어 카드 → roman). 그래서 모두 선택 필드다.
 */
export interface VocabCard {
  /** 안정적 고유 ID. 예: "a1-greetings-001" / "ko-a1-greetings-001" */
  id: string;
  /** CEFR 레벨 */
  level: CefrLevel;
  /** 소속 덱(주제) ID. 예: "greetings" */
  deck: string;
  /** 영어 표현 (영어 빌드=학습 대상 / 한국어 빌드=영어 뜻) */
  en: string;
  /** 발음기호 (IPA). 예: "/həˈloʊ/". 영어 빌드 전용 */
  ipa?: string;
  /** 한국어 발음 음차. 예: "헐로우". 영어 빌드 전용 */
  koPron?: string;
  /** 로마자 발음. 예: "annyeonghaseyo". 한국어 빌드 전용 */
  roman?: string;
  /** 한국어 표현 (영어 빌드=뜻 / 한국어 빌드=학습 대상) */
  ko: string;
  /** 예문 (영어) */
  exampleEn: string;
  /** 예문 (한국어) */
  exampleKo: string;
  /** 사용 맥락/상황 설명 (사용자 모국어, 선택) */
  note?: string;
  /** 검색/필터용 태그 */
  tags?: string[];
}

/** 덱(주제) 메타데이터 */
export interface Deck {
  /** 덱 ID. VocabCard.deck 와 매칭 */
  id: string;
  level: CefrLevel;
  /** 표시 이름 */
  title: { ko: string; en: string };
  /** 한 줄 설명 */
  description: { ko: string; en: string };
  /** 레벨 내 정렬 순서 */
  order: number;
  /** lucide 아이콘 이름 (선택) */
  icon?: string;
}

/**
 * 단어(어휘) 덱인지 판정 — deck id 가 "vocab-" 로 시작.
 * 회화 표현 덱(greetings, work 등)과 단어 덱(vocab-a1-...)을 구분한다.
 * 메인 학습은 회화 표현, 단어는 단어장으로 분리.
 */
export function isVocabDeck(deckId: string): boolean {
  return deckId.startsWith("vocab-");
}

/** level 이 min 레벨 이상인지 (CEFR 순서: A1 < A2 < B1 < B2 < C1 < C2) */
export function isLevelAtLeast(level: CefrLevel, min: CefrLevel): boolean {
  return CEFR_LEVELS.indexOf(level) >= CEFR_LEVELS.indexOf(min);
}
