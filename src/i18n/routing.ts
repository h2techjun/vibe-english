import { defineRouting } from "next-intl/routing";
import { BRAND } from "@/lib/brand";

export const routing = defineRouting({
  locales: ["ko", "en"],
  // 빌드 타깃에 따라 주 로케일 분기 (영어 빌드=ko / 한국어 빌드=en)
  defaultLocale: BRAND.defaultLocale,
  localePrefix: "always",
  // static export: 서버 로케일 협상 불가 → 항상 기본 로케일로
  localeDetection: false,
});

export type Locale = (typeof routing.locales)[number];
