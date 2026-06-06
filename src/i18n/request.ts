import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "./routing";
import { BRAND } from "@/lib/brand";

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  return {
    locale,
    // 빌드 타깃별 메시지 디렉토리 (messages/english|korean/{locale}.json)
    messages: (await import(`../../messages/${BRAND.target}/${locale}.json`))
      .default,
  };
});
