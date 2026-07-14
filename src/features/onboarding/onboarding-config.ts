/**
 * 온보딩 위저드 상수 — 레벨 컬러 사다리 + 학습 언어(=코스) 옵션.
 *
 * 코스는 UI 로케일(모국어)에서 파생된다(lib/course.ts). 따라서 "학습 언어 선택"
 * 은 곧 "모국어(로케일) 선택"이며, 각 로케일이 코스를 1:1 로 결정한다.
 */
import type { CefrLevel } from "@/types/card";
import type { Locale } from "@/i18n/routing";

/**
 * 레벨 컬러 사다리 — 난이도를 색으로 전달한다.
 * A1 emerald → A2 teal → B1 sky → B2 indigo → C1 violet → C2 fuchsia.
 * (Tailwind JIT 가 스캔하도록 전체 클래스명을 리터럴로 적는다.)
 */
export const LEVEL_TILE: Record<CefrLevel, string> = {
  A1: "bg-emerald-500 text-white",
  A2: "bg-teal-500 text-white",
  B1: "bg-sky-500 text-white",
  B2: "bg-indigo-500 text-white",
  C1: "bg-violet-500 text-white",
  C2: "bg-fuchsia-500 text-white",
};

/** 선택된 레벨 카드의 테두리/배경 강조 (light/dark). */
export const LEVEL_SELECTED: Record<CefrLevel, string> = {
  A1: "border-emerald-400 bg-emerald-50 dark:border-emerald-600 dark:bg-emerald-950/40",
  A2: "border-teal-400 bg-teal-50 dark:border-teal-600 dark:bg-teal-950/40",
  B1: "border-sky-400 bg-sky-50 dark:border-sky-600 dark:bg-sky-950/40",
  B2: "border-indigo-400 bg-indigo-50 dark:border-indigo-600 dark:bg-indigo-950/40",
  C1: "border-violet-400 bg-violet-50 dark:border-violet-600 dark:bg-violet-950/40",
  C2: "border-fuchsia-400 bg-fuchsia-50 dark:border-fuchsia-600 dark:bg-fuchsia-950/40",
};

/** 온보딩에서 추천하는 기본 시작 레벨. */
export const RECOMMENDED_LEVEL: CefrLevel = "A1";

export interface LangOption {
  /** UI 로케일 (= 모국어). 코스를 결정한다. */
  locale: Locale;
  /** 레터 타일 글자 */
  tile: string;
  /** 타일 배경색 (Tailwind 리터럴) */
  tileColor: string;
  /** 모국어 자기명칭 (autonym, 언어 무관 표기) */
  name: string;
  /** 배울 언어 자기명칭 */
  target: string;
  /** 배울 언어 국기 이모지 */
  targetFlag: string;
}

/**
 * 학습 언어 옵션 — 각 카드는 "모국어 → 배울 언어" 를 명시한다.
 * ko 로케일 → 영어 학습, en/zh/vi 로케일 → 한국어 학습.
 * 자기명칭은 언어 독립적이라 i18n 없이 상수로 표기한다.
 */
export const LANG_OPTIONS: readonly LangOption[] = [
  {
    locale: "ko",
    tile: "KR",
    tileColor: "bg-blue-500 text-white",
    name: "한국어",
    target: "English",
    targetFlag: "🇬🇧",
  },
  {
    locale: "en",
    tile: "EN",
    tileColor: "bg-rose-500 text-white",
    name: "English",
    target: "한국어",
    targetFlag: "🇰🇷",
  },
  {
    locale: "zh",
    tile: "中",
    tileColor: "bg-amber-500 text-white",
    name: "中文",
    target: "한국어",
    targetFlag: "🇰🇷",
  },
  {
    locale: "vi",
    tile: "VI",
    tileColor: "bg-emerald-500 text-white",
    name: "Tiếng Việt",
    target: "한국어",
    targetFlag: "🇰🇷",
  },
] as const;
