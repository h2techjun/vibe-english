"use client";

import { useLocale, useTranslations } from "next-intl";
import { CEFR_LEVELS, CEFR_LABELS, type CefrLevel } from "@/types/card";
import { LEVEL_TILE, LEVEL_SELECTED, RECOMMENDED_LEVEL } from "../onboarding-config";
import { cn } from "@/lib/utils";
import { Check, ChevronRight } from "lucide-react";

/**
 * 스텝 ② 시작 레벨(A1~C2) 선택. draft 만 갱신하고 커밋은 마지막 스텝에서 1회.
 * 레벨 컬러 사다리로 난이도를 색으로 전달하고, A1 에 "추천" 리본을 단다.
 */
export function LevelStep({
  value,
  onChange,
}: {
  value: CefrLevel;
  onChange: (level: CefrLevel) => void;
}) {
  const t = useTranslations("onboarding");
  const locale = useLocale();
  const lang: "ko" | "en" | "zh" | "vi" =
    locale === "ko" ? "ko" : locale === "zh" ? "zh" : locale === "vi" ? "vi" : "en";

  return (
    <div className="flex flex-col gap-2" role="radiogroup" aria-label={t("title")}>
      {CEFR_LEVELS.map((level) => {
        const selected = value === level;
        const recommended = level === RECOMMENDED_LEVEL;
        return (
          <button
            key={level}
            role="radio"
            aria-checked={selected}
            onClick={() => onChange(level)}
            className={cn(
              "relative flex items-center gap-3 rounded-2xl border-2 p-4 text-left transition-all active:scale-[0.98]",
              selected
                ? cn("shadow-sm", LEVEL_SELECTED[level])
                : "border-border/60 bg-card hover:border-border",
            )}
          >
            <span
              className={cn(
                "grid h-10 w-10 shrink-0 place-items-center rounded-xl text-sm font-black",
                LEVEL_TILE[level],
              )}
            >
              {level}
            </span>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-1.5">
                <p className="font-bold">{CEFR_LABELS[level][lang]}</p>
                {recommended && (
                  <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-700 dark:bg-emerald-900/60 dark:text-emerald-300">
                    🌱 {t("recommended")}
                  </span>
                )}
              </div>
              <p className="text-xs text-muted-foreground">{t(`levels.${level}`)}</p>
            </div>
            {selected ? (
              <Check className="h-5 w-5 shrink-0 text-foreground" />
            ) : (
              <ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground" />
            )}
          </button>
        );
      })}
      <p className="mt-2 text-center text-xs text-muted-foreground">
        {t("unsureHint")}
      </p>
    </div>
  );
}
