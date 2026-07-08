import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  return {
    locale,
    // 로케일별 메시지 (ko=영어 학습 카피 / en·zh=한국어 학습 카피)
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
