"use client";

import { useTranslations } from "next-intl";
import type { CefrLevel } from "@/types/card";
import { LEVEL_TILE } from "@/features/onboarding/onboarding-config";
import { cn } from "@/lib/utils";

/** 카드 상단 메타 — 레벨 타일 + 신규/복습 뱃지. 모든 학습 카드가 공유한다. */
export function CardMeta({
  level,
  isNew,
  right,
}: {
  level: CefrLevel;
  isNew: boolean;
  right?: React.ReactNode;
}) {
  const t = useTranslations("study");
  return (
    <div className="mb-2 flex items-center gap-2 text-xs">
      <span
        className={cn(
          "grid h-6 w-8 place-items-center rounded-md text-[11px] font-black",
          LEVEL_TILE[level],
        )}
      >
        {level}
      </span>
      <span
        className={cn(
          "rounded-full border px-2 py-0.5 font-bold",
          isNew
            ? "border-sky-500/50 text-sky-300"
            : "border-amber-500/50 text-amber-300",
        )}
      >
        {isNew ? t("new") : t("review")}
      </span>
      {right && <span className="ml-auto">{right}</span>}
    </div>
  );
}
