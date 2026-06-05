import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Toaster } from "@/components/ui/sonner";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

// 로케일별 정체성: ko = 한국인의 영어 학습, en = 영어권의 한국어 학습.
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isKo = locale !== "en";
  return {
    title: {
      absolute: isKo
        ? "Vibe English — 생활 영어 SRS 학습"
        : "Vibe English — Learn Korean with SRS",
    },
    description: isKo
      ? "기억력 곡선 기반 생활 영어 SRS 학습. 매일 10분, 잊을 만할 때 다시 만나는 표현."
      : "Learn Korean from the English you already know — FSRS spaced-repetition flashcards, A1 to C2, fully local in your browser. No signup.",
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
