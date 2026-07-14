"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { LANG_OPTIONS } from "../onboarding-config";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

/**
 * 스텝 ① 학습 언어(=코스) 선택.
 * 코스는 로케일에서 파생되므로 "모국어" 카드를 고르면 배울 언어가 정해진다.
 * 현재 로케일 카드가 선택 상태이며, 다른 카드를 누르면 즉시 로케일을 전환한다
 * (전환 시 위저드가 새 로케일로 remount → 스텝 ① 부터 다시, 새 언어 선택됨).
 */
export function LanguageStep() {
  const t = useTranslations("onboarding.lang");
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-2" role="radiogroup" aria-label={t("title")}>
      {LANG_OPTIONS.map((opt) => {
        const selected = opt.locale === locale;
        return (
          <button
            key={opt.locale}
            role="radio"
            aria-checked={selected}
            onClick={() => {
              if (!selected) router.replace(pathname, { locale: opt.locale });
            }}
            className={cn(
              "flex items-center gap-3 rounded-2xl border-2 p-4 text-left transition-all active:scale-[0.98]",
              selected
                ? "border-blue-400 bg-blue-50 shadow-sm dark:border-blue-600 dark:bg-blue-950/40"
                : "border-border/60 bg-card hover:border-blue-300 hover:bg-blue-50/40 dark:hover:bg-blue-950/20",
            )}
          >
            <span
              className={cn(
                "grid h-11 w-11 shrink-0 place-items-center rounded-xl text-sm font-black",
                opt.tileColor,
              )}
            >
              {opt.tile}
            </span>
            <div className="min-w-0 flex-1">
              <p className="font-bold">{opt.name}</p>
              <p className="text-xs font-medium text-muted-foreground">
                {t("learns")} {opt.targetFlag} {opt.target}
              </p>
            </div>
            {selected && (
              <Check className="h-5 w-5 shrink-0 text-blue-600 dark:text-blue-400" />
            )}
          </button>
        );
      })}
    </div>
  );
}
