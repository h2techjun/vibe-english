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

export const CEFR_LABELS: Record<
  CefrLevel,
  { ko: string; en: string; zh: string }
> = {
  A1: { ko: "입문", en: "Beginner", zh: "入门" },
  A2: { ko: "초급", en: "Elementary", zh: "初级" },
  B1: { ko: "중급", en: "Intermediate", zh: "中级" },
  B2: { ko: "중상급", en: "Upper-Intermediate", zh: "中高级" },
  C1: { ko: "고급", en: "Advanced", zh: "高级" },
  C2: { ko: "전문가", en: "Proficient", zh: "精通" },
};

/**
 * 학습 코스 = 학습 대상 언어. UI 로케일(모국어)에서 파생된다:
 * ko 로케일 → "en"(영어 학습) / en·zh 로케일 → "ko"(한국어 학습).
 */
export type Course = "en" | "ko";

/**
 * 한 표현 = 카드 한 장. 두 코스(영어 학습 / 한국어 학습)가 공유하는 타입.
 *
 * 코스별 카드 해석 (lib/card-view.ts 의 getCardFace 가 런타임 분기):
 *  - en 코스(한국어 화자): en = 학습 대상, ipa+koPron = 발음, ko = 뜻
 *  - ko 코스(영어/중국어 화자): ko = 학습 대상, roman = 발음(로마자),
 *    en = 영어 뜻, zh = 중국어 뜻(선택, 없으면 en 폴백)
 *
 * 발음 필드는 코스에 따라 한쪽만 채운다 (en 코스 카드 → ipa/koPron,
 * ko 코스 카드 → roman). 그래서 모두 선택 필드다.
 */
export interface VocabCard {
  /** 안정적 고유 ID. 예: "a1-greetings-001" / "ko-a1-greetings-001" */
  id: string;
  /** CEFR 레벨 */
  level: CefrLevel;
  /** 소속 덱(주제) ID. 예: "greetings" (ko 코스는 시드 시 "ko:" prefix) */
  deck: string;
  /** 학습 코스. 콘텐츠 파일엔 없고 시드가 주입한다 */
  course?: Course;
  /** 영어 표현 (en 코스=학습 대상 / ko 코스=영어 뜻) */
  en: string;
  /** 발음기호 (IPA). 예: "/həˈloʊ/". en 코스 전용 */
  ipa?: string;
  /** 한국어 발음 음차. 예: "헐로우". en 코스 전용 */
  koPron?: string;
  /** 로마자 발음. 예: "annyeonghaseyo". ko 코스 전용 */
  roman?: string;
  /** 한국어 표현 (en 코스=뜻 / ko 코스=학습 대상) */
  ko: string;
  /** 중국어(간체) 뜻. ko 코스 + zh 사용자용 (없으면 en 폴백) */
  zh?: string;
  /** 예문 (영어) */
  exampleEn: string;
  /** 예문 (한국어) */
  exampleKo: string;
  /** 예문 중국어 번역. ko 코스 + zh 사용자용 */
  exampleZh?: string;
  /** 사용 맥락/상황 설명 (영어 또는 한국어, 선택) */
  note?: string;
  /** note 의 중국어 번역 (선택) */
  noteZh?: string;
  /** 검색/필터용 태그 */
  tags?: string[];
}

/** 덱(주제) 메타데이터 */
export interface Deck {
  /** 덱 ID. VocabCard.deck 와 매칭 (ko 코스는 시드 시 "ko:" prefix) */
  id: string;
  level: CefrLevel;
  /** 학습 코스. 콘텐츠 파일엔 없고 시드가 주입한다 */
  course?: Course;
  /** 표시 이름 (zh 는 ko 코스 덱만 채움, 없으면 en 폴백) */
  title: { ko: string; en: string; zh?: string };
  /** 한 줄 설명 */
  description: { ko: string; en: string; zh?: string };
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
