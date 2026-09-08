"use client";

import { useTranslations } from "next-intl";
import { usePathname } from "@/i18n/navigation";
import { LanguageToggle } from "@/components/language-toggle";
import { BRAND } from "@/lib/brand";

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
        <LanguageToggle />
      </div>
    </header>
  );
}
