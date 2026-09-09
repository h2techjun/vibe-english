"use client";

import { useTranslations } from "next-intl";
import { usePathname } from "@/i18n/navigation";
import { LanguageToggle } from "@/components/language-toggle";
import { BRAND } from "@/lib/brand";
import { workmateUrl } from "@/lib/workmate";
import { useLocale } from "next-intl";
import { ExternalLink } from "lucide-react";

const TITLE_KEYS: Record<string, string> = {
  "/home": "home",
  "/decks": "decks",
  "/progress": "progress",
  "/settings": "settings",
};

/** 학습 화면은 자체 상단바(닫기·진행)를 쓰므로 앱 헤더를 숨긴다. */
export function isFocusRoute(pathname: string): boolean {
  return pathname === "/study" || pathname.startsWith("/study/");
}

export function AppHeader() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  if (isFocusRoute(pathname)) return null;

  const matched = Object.keys(TITLE_KEYS).find(
    (p) => pathname === p || pathname.startsWith(`${p}/`),
  );
  const isHome = !matched || matched === "/home";

  return (
    <header className="sticky top-0 z-20 border-b border-border/60 bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-lg items-center justify-between px-4">
        {isHome ? (
          <span className="flex items-center gap-2 text-lg font-black tracking-tight">
            <span className="grid h-8 w-8 place-items-center rounded-xl bg-primary text-sm font-black text-primary-foreground">
              {BRAND.logoMark}
            </span>
            {BRAND.name}
          </span>
        ) : (
          <h1 className="text-lg font-black tracking-tight">
            {t(TITLE_KEYS[matched])}
          </h1>
        )}
        <div className="flex items-center gap-2">
          {/* Workmate 허브로 — Loopla 는 정적 임베드라 Workmate 헤더가 없다 */}
          <a
            href={workmateUrl(locale, "learn")}
            className="flex min-h-11 items-center gap-1 rounded-lg border border-border px-2.5 text-sm font-semibold text-muted-foreground transition-colors hover:border-primary hover:text-foreground motion-reduce:transition-none"
          >
            <ExternalLink className="h-4 w-4" aria-hidden />
            {t("workmate")}
          </a>
          <LanguageToggle />
        </div>
      </div>
    </header>
  );
}
