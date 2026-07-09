import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // 로케일 = 사용자 모국어. ko=영어 학습 / en·zh·vi=한국어 학습 코스로 연결된다.
  locales: ["ko", "en", "zh", "vi"],
  defaultLocale: "ko",
  localePrefix: "always",
  // static export: 서버 로케일 협상 불가 → 항상 기본 로케일로
  localeDetection: false,
});

export type Locale = (typeof routing.locales)[number];
