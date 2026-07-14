"use client";

import { useLocale, useTranslations } from "next-intl";
import type { Locale } from "@/i18n/routing";
import { CEFR_LABELS, type CefrLevel } from "@/types/card";
import { LANG_OPTIONS, LEVEL_TILE } from "../onboarding-config";
import { PartyPopper } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * 스텝 ③ 요약 — 배울 언어 + 시작 레벨을 리캡한다. 커밋은 위저드 푸터 버튼에서.
 */
export function SummaryStep({ level }: { level: CefrLevel }) {
  const t = useTranslations("onboarding.summary");
  const locale = useLocale() as Locale;
  const lang: "ko" | "en" | "zh" | "vi" =
    locale === "ko" ? "ko" : locale === "zh" ? "zh" : locale === "vi" ? "vi" : "en";
  const opt = LANG_OPTIONS.find((o) => o.locale === locale) ?? LANG_OPTIONS[0];

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col items-center gap-2 py-2 text-center">
        <PartyPopper className="h-10 w-10 text-amber-500 duration-500 animate-in zoom-in motion-reduce:animate-none" />
      </div>

      <div className="flex flex-col gap-2">
        {/* 배울 언어 */}
        <div className="flex items-center gap-3 rounded-2xl border border-border/60 bg-card p-4">
          <span className="text-2xl">{opt.targetFlag}</span>
          <div className="min-w-0 flex-1">
            <p className="text-xs text-muted-foreground">{t("langLabel")}</p>
            <p className="font-bold">{opt.target}</p>
          </div>
        </div>

        {/* 시작 레벨 */}
        <div className="flex items-center gap-3 rounded-2xl border border-border/60 bg-card p-4">
          <span
            className={cn(
              "grid h-9 w-9 shrink-0 place-items-center rounded-xl text-sm font-black",
              LEVEL_TILE[level],
            )}
          >
            {level}
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-xs text-muted-foreground">{t("levelLabel")}</p>
            <p className="font-bold">{CEFR_LABELS[level][lang]}</p>
          </div>
        </div>
      </div>

      <p className="text-center text-sm text-muted-foreground">{t("note")}</p>
    </div>
  );
}
