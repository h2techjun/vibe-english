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
 * 한 표현 = 카드 한 장.
 * 발음 부담을 줄이기 위해 IPA + 한국어 발음을 함께 제공한다.
 */
export interface VocabCard {
  /** 안정적 고유 ID. 예: "a1-greetings-001" */
  id: string;
  /** CEFR 레벨 */
  level: CefrLevel;
  /** 소속 덱(주제) ID. 예: "greetings" */
  deck: string;
  /** 영어 표현 */
  en: string;
  /** 발음기호 (IPA). 예: "/həˈloʊ/" */
  ipa: string;
  /** 한국어 발음 음차. 예: "헐로우" */
  koPron: string;
  /** 한국어 뜻 */
  ko: string;
  /** 예문 (영어) */
  exampleEn: string;
  /** 예문 (한국어) */
  exampleKo: string;
  /** 사용 맥락/상황 설명 (한국어, 선택) */
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
