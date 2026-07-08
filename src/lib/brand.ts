/**
 * 브랜드 단일 소스 — "Loopla" (Loop = 망각곡선 반복 학습).
 *
 * 하나의 앱이 로케일(=모국어)에 따라 두 코스를 제공한다:
 *   ko 로케일 → 영어 학습 / en·zh 로케일 → 한국어 학습.
 * 학습 방향 분기는 lib/course.ts, 여기는 이름·메타·DB명만 담당한다.
 */
export const BRAND = {
  /** 브랜드명 (단일) */
  family: "Loopla",
  name: "Loopla",
  /**
   * IndexedDB 이름 — 리브랜딩 전 이름을 유지해 기존 사용자 진도를 보존한다.
   * (두 코스가 이 한 DB 에 course 태그로 공존)
   */
  dbName: "vibe-english",
  /** 기본 로케일 */
  defaultLocale: "ko" as const,
  /** 로고 레터마크 */
  logoMark: "L",
  /** 테마 컬러 */
  themeColor: "#0f172a",
  /** SEO/메타 (로케일별 title·description 단일 소스) */
  meta: {
    title: {
      ko: "Loopla — 생활 영어 SRS 학습",
      en: "Loopla — Learn Korean with SRS",
      zh: "Loopla — 用SRS学韩语",
    },
    description: {
      ko: "기억력 곡선 기반 생활 영어 SRS 학습. 매일 10분, 잊을 만할 때 다시 만나는 표현.",
      en: "Learn Korean from the English you already know — FSRS spaced-repetition flashcards, A1 to C2, fully local in your browser. No signup.",
      zh: "从你已经掌握的语言出发学韩语 — 基于FSRS间隔重复的卡片学习，A1到C2，完全在浏览器本地运行，无需注册。",
    },
  },
} as const;
