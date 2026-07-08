/**
 * 학습 코스 런타임 모델 — UI 로케일(=사용자 모국어)에서 코스를 파생한다.
 *
 *   ko 로케일(한국어 화자)  → course "en"  (영어 학습)
 *   en 로케일(영어 화자)    → course "ko"  (한국어 학습)
 *   zh 로케일(중국어 화자)  → course "ko"  (한국어 학습, 뜻은 zh)
 *
 * 언어 토글 = 코스 전환. 빌드 분기(NEXT_PUBLIC_APP_TARGET) 대신 이 모듈이
 * 방향의 단일 소스다. 두 코스의 콘텐츠는 한 IndexedDB 에 course 태그로 공존한다.
 */
import { useLocale } from "next-intl";
import type { Course, CefrLevel } from "@/types/card";
import type { AppSettings } from "@/types/srs";

/** 사용자 모국어 (표시/뜻 언어) */
export type SrcLang = "ko" | "en" | "zh";

export function srcForLocale(locale: string): SrcLang {
  if (locale === "en") return "en";
  if (locale === "zh") return "zh";
  return "ko";
}

export function courseForLocale(locale: string): Course {
  return locale === "ko" ? "en" : "ko";
}

/** 학습 대상 언어의 TTS 언어 코드 (BCP-47) */
export function ttsLangFor(course: Course): string {
  return course === "ko" ? "ko-KR" : "en-US";
}

/** ko 코스 콘텐츠의 덱 id prefix — 영어 코스 덱 id 와의 충돌 방지 (시드에서 주입) */
export const KO_DECK_PREFIX = "ko:";

export interface CourseView {
  /** 학습 대상 언어 */
  course: Course;
  /** 사용자 모국어 (뜻 표시 언어) */
  src: SrcLang;
}

/** 현재 로케일의 코스/모국어. 클라이언트 컴포넌트 전용. */
export function useCourse(): CourseView {
  const locale = useLocale();
  return { course: courseForLocale(locale), src: srcForLocale(locale) };
}

/** 코스별 시작 레벨 읽기 (en 코스=startLevel, ko 코스=startLevelKo) */
export function startLevelOf(
  settings: AppSettings | undefined,
  course: Course,
): CefrLevel | undefined {
  return course === "ko" ? settings?.startLevelKo : settings?.startLevel;
}

/** 코스별 시작 레벨 저장 patch */
export function startLevelPatch(
  course: Course,
  level: CefrLevel,
): Partial<AppSettings> {
  return course === "ko" ? { startLevelKo: level } : { startLevel: level };
}
