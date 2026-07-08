/**
 * 카드/회화 표시 방향 어댑터 — 런타임 코스(course)와 사용자 모국어(src)에 따라
 * "무엇을 학습 대상으로 보여주고 무엇을 뜻으로 보여줄지"를 한 곳에서 분기한다.
 *
 * 학습 UI(flashcard/cloze/listen/dialogue/scenario)는 카드 필드(en/ko/zh...)에
 * 직접 접근하지 말고 이 모듈의 getCardFace / learnText / meaningText / noteText 를
 * 쓴다. course/src 는 lib/course 의 useCourse() 로 얻는다.
 *
 *  - en 코스: term=en, 발음=ipa+koPron, meaning=ko
 *  - ko 코스: term=ko, 발음=roman, meaning=en (src=zh 면 zh, 없으면 en 폴백)
 */
import type { VocabCard, Course } from "@/types/card";
import type { Bilingual, BlankOption } from "@/types/dialogue";
import type { SrcLang } from "@/lib/course";

export interface CardFace {
  /** 카드 앞면 = 학습 대상 표현 */
  term: string;
  /** 주 발음 표기 (en 코스=IPA / ko 코스=로마자). 없을 수 있음 */
  pronPrimary?: string;
  /** 보조 발음 표기 (en 코스=한국어 음차 / ko 코스=없음) */
  pronSecondary?: string;
  /** 뜻 (사용자 모국어) */
  meaning: string;
  /** 예문 (학습 대상 언어) */
  example: string;
  /** 예문 번역 (사용자 모국어) */
  exampleTrans: string;
  /** 사용 맥락 설명 (사용자 모국어, 선택) */
  note?: string;
}

/** 코스/모국어에 맞춰 카드의 앞/뒤·발음·예문을 해석한다. */
export function getCardFace(
  card: VocabCard,
  course: Course,
  src: SrcLang,
): CardFace {
  if (course === "ko") {
    const zh = src === "zh";
    return {
      term: card.ko,
      pronPrimary: card.roman,
      pronSecondary: undefined,
      meaning: zh ? (card.zh ?? card.en) : card.en,
      example: card.exampleKo,
      exampleTrans: zh ? (card.exampleZh ?? card.exampleEn) : card.exampleEn,
      note: zh ? (card.noteZh ?? card.note) : card.note,
    };
  }
  return {
    term: card.en,
    pronPrimary: card.ipa,
    pronSecondary: card.koPron,
    meaning: card.ko,
    example: card.exampleEn,
    exampleTrans: card.exampleKo,
    note: card.note,
  };
}

/** 회화 Bilingual 에서 학습 대상 언어 텍스트 (표시·TTS 대상) */
export function learnText(b: Bilingual, course: Course): string {
  return course === "ko" ? b.ko : b.en;
}

/** 회화 Bilingual 에서 뜻(사용자 모국어) 텍스트 (가렸다 탭하는 대상) */
export function meaningText(b: Bilingual, course: Course, src: SrcLang): string {
  if (course === "ko") return src === "zh" ? (b.zh ?? b.en) : b.en;
  return b.ko;
}

/** 선택지/대체표현의 뉘앙스 note (사용자 모국어, zh 없으면 원문 폴백) */
export function noteText(o: BlankOption, src: SrcLang): string | undefined {
  return src === "zh" ? (o.noteZh ?? o.note) : o.note;
}
