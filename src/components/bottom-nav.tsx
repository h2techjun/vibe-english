"use client";

import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { Home, GraduationCap, Layers, BarChart3, Settings } from "lucide-react";
import { isFocusRoute } from "./app-header";

const TABS = [
  { href: "/home", key: "home", icon: Home },
  { href: "/study", key: "study", icon: GraduationCap },
  { href: "/decks", key: "decks", icon: Layers },
  { href: "/progress", key: "progress", icon: BarChart3 },
  { href: "/settings", key: "settings", icon: Settings },
] as const;

/**
 * 하단 탭바. 학습 화면(/study)에서는 숨겨 카드에 집중하게 한다
 * (Duolingo/Busuu 식 — 이탈은 학습 상단바의 닫기 버튼으로).
 */
export function BottomNav() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  if (isFocusRoute(pathname)) return null;

  return (
    <nav
      aria-label={t("label")}
      className="sticky bottom-0 z-20 border-t border-border/60 bg-background/95 pb-safe backdrop-blur"
    >
      <div className="mx-auto flex max-w-lg items-stretch justify-around">
        {TABS.map(({ href, key, icon: Icon }) => {
          const active = pathname === href || pathname.startsWith(`${href}/`);
          return (
            <Link
              key={href}
              href={href}
              prefetch={false}
              aria-current={active ? "page" : undefined}
              className={cn(
                "flex min-h-14 flex-1 flex-col items-center justify-center gap-1 py-2 text-xs font-semibold transition-colors",
                active
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              <Icon
                className={cn("h-5 w-5", active && "fill-primary/20")}
                aria-hidden
              />
              {t(key)}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
