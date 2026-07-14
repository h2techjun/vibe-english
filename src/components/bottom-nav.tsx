"use client";

import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { Home, GraduationCap, Layers, BarChart3, Settings } from "lucide-react";

const TABS = [
  { href: "/home", key: "home", icon: Home },
  { href: "/study", key: "study", icon: GraduationCap },
  { href: "/decks", key: "decks", icon: Layers },
  { href: "/progress", key: "progress", icon: BarChart3 },
  { href: "/settings", key: "settings", icon: Settings },
] as const;

export function BottomNav() {
  const t = useTranslations("nav");
  const pathname = usePathname();

  return (
    <nav className="sticky bottom-0 z-20 border-t border-border/60 bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-lg items-stretch justify-around">
        {TABS.map(({ href, key, icon: Icon }) => {
          const active = pathname === href || pathname.startsWith(`${href}/`);
          return (
            <Link
              key={href}
              href={href}
              prefetch={false}
              className={cn(
                "flex flex-1 flex-col items-center gap-1 py-2.5 text-xs font-medium transition-colors",
                active
                  ? "text-blue-600 dark:text-blue-400"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              <Icon className="h-5 w-5" />
              {t(key)}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
