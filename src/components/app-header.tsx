"use client";

import { useTranslations } from "next-intl";
import { usePathname } from "@/i18n/navigation";
import { LanguageToggle } from "@/components/language-toggle";

const TITLE_KEYS: Record<string, string> = {
  "/home": "home",
  "/study": "study",
  "/decks": "decks",
  "/progress": "progress",
  "/settings": "settings",
};

export function AppHeader() {
  const t = useTranslations("nav");
  const pathname = usePathname();

  const matched = Object.keys(TITLE_KEYS).find(
    (p) => pathname === p || pathname.startsWith(`${p}/`),
  );
  const title = matched ? t(TITLE_KEYS[matched]) : t("home");

  return (
    <header className="sticky top-0 z-20 border-b border-border/60 bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-lg items-center justify-between px-4">
        <h1 className="text-lg font-semibold">{title}</h1>
        <LanguageToggle />
      </div>
    </header>
  );
}
