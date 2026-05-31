import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["ko", "en"],
  defaultLocale: "ko",
  localePrefix: "always",
  // static export: 서버 로케일 협상 불가 → 항상 기본 로케일로
  localeDetection: false,
});

export type Locale = (typeof routing.locales)[number];
