/**
 * 브랜드 / 빌드 타깃 단일 소스.
 *
 * 통합 브랜드 "Loopla"(Loop = 망각곡선 반복 학습) 아래, 같은 코드베이스로
 * 두 학습 앱을 빌드한다:
 *  - english : 한국인의 영어 학습  → "Loopla English" (기본, 주 로케일 ko)
 *  - korean  : 영어권의 한국어 학습 → "Loopla Korean"  (주 로케일 en)
 *
 * 빌드 시 환경변수로 분기:  NEXT_PUBLIC_APP_TARGET=korean npm run build
 * (미지정 시 english)
 */
export type AppTarget = "english" | "korean";

export const APP_TARGET: AppTarget =
  process.env.NEXT_PUBLIC_APP_TARGET === "korean" ? "korean" : "english";

const isKorean = APP_TARGET === "korean";

export const BRAND = {
  /** 빌드 타깃 */
  target: APP_TARGET,
  /** 통합 모브랜드명 */
  family: "Loopla",
  /** 앱 표시 이름 */
  name: isKorean ? "Loopla Korean" : "Loopla English",
  /** 학습 대상 언어 (영문 표기) */
  learnLang: isKorean ? "Korean" : "English",
  /** 학습 대상 언어 (한국어 표기) */
  learnLangKo: isKorean ? "한국어" : "영어",
  /**
   * 주 사용자 기본 로케일.
   * 영어 학습 = 한국인 = ko / 한국어 학습 = 영어권 = en.
   */
  defaultLocale: isKorean ? ("en" as const) : ("ko" as const),
  /**
   * IndexedDB 이름.
   * 영어 빌드는 기존 "vibe-english" 를 유지해 기존 사용자 진도를 보존하고,
   * 한국어 빌드는 별도 DB("loopla-korean")로 데이터를 분리한다.
   */
  dbName: isKorean ? "loopla-korean" : "vibe-english",
  /** 로고 레터마크 */
  logoMark: "L",
  /** 테마 컬러 (둘 다 동일 톤 유지) */
  themeColor: "#0f172a",
} as const;
