"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { db } from "@/lib/db";
import { startLevelPatch, useCourse } from "@/lib/course";
import {
  CEFR_LEVELS,
  CEFR_LABELS,
  type CefrLevel,
} from "@/types/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, ChevronRight } from "lucide-react";

/**
 * 첫 진입 레벨 선택. 선택 즉시 db.settings.startLevel 저장 → 앱 진입.
 * 설정에서 언제든 변경 가능.
 */
export function LevelOnboarding() {
  const t = useTranslations("onboarding");
  const locale = useLocale();
  const { course } = useCourse();
  const lang: "ko" | "en" | "zh" =
    locale === "ko" ? "ko" : locale === "zh" ? "zh" : "en";
  const [busy, setBusy] = useState(false);

  async function pick(level: CefrLevel) {
    if (busy) return;
    setBusy(true);
    await db.settings.update("main", startLevelPatch(course, level));
    // useLiveQuery(LevelGate)가 갱신을 감지해 자동으로 앱으로 진입
  }

  return (
    <div className="flex flex-1 flex-col py-2">
      <div className="mb-5 flex flex-col items-center gap-2 text-center">
        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-950 dark:text-blue-400">
          <GraduationCap className="h-6 w-6" />
        </span>
        <h1 className="text-2xl font-bold">{t("title")}</h1>
        <p className="max-w-sm text-sm text-muted-foreground">
          {t("subtitle")}
        </p>
      </div>

      <div className="flex flex-col gap-2">
        {CEFR_LEVELS.map((level) => (
          <button
            key={level}
            disabled={busy}
            onClick={() => pick(level)}
            className="flex items-center gap-3 rounded-xl border border-border/60 bg-card p-4 text-left transition-colors hover:border-blue-400 hover:bg-blue-50/50 disabled:opacity-50 dark:hover:bg-blue-950/30"
          >
            <Badge variant="secondary" className="w-9 shrink-0 justify-center">
              {level}
            </Badge>
            <div className="min-w-0 flex-1">
              <p className="font-semibold">{CEFR_LABELS[level][lang]}</p>
              <p className="text-xs text-muted-foreground">
                {t(`levels.${level}`)}
              </p>
            </div>
            <ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground" />
          </button>
        ))}
      </div>

      <p className="mt-4 text-center text-xs text-muted-foreground">
        {t("unsureHint")}
      </p>
    </div>
  );
}
