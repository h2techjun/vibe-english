import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { BRAND } from "@/lib/brand";
import { Toaster } from "@/components/ui/sonner";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

// 로케일별 메타는 BRAND.meta 단일 소스에서 (빌드 타깃 = 학습 방향 반영).
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const loc = locale === "ko" ? "ko" : "en";
  return {
    title: { absolute: BRAND.meta.title[loc] },
    description: BRAND.meta.description[loc],
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);

  return (
    <NextIntlClientProvider>
      {children}
      <Toaster richColors position="top-center" />
    </NextIntlClientProvider>
  );
}
