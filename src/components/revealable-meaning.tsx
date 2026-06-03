"use client";

import { useEffect, useState } from "react";
import { useLiveQuery } from "dexie-react-hooks";
import { useTranslations } from "next-intl";
import { db } from "@/lib/db";
import { cn } from "@/lib/utils";

/**
 * 한국어 뜻을 가렸다 탭하면 표시 (능동 회상).
 * 설정의 alwaysShowKorean 이 켜져 있으면 항상 표시.
 * 카드(ko)가 바뀌면 다시 가려진다.
 */
export function RevealableMeaning({
  ko,
  className,
  revealedClassName,
}: {
  ko: string;
  className?: string;
  revealedClassName?: string;
}) {
  const t = useTranslations("study");
  const settings = useLiveQuery(() => db.settings.get("main"));
  const alwaysShow = settings?.alwaysShowKorean ?? false;
  const [revealed, setRevealed] = useState(false);

  // 내용이 바뀌면 다시 가림
  useEffect(() => {
    setRevealed(false);
  }, [ko]);

  if (alwaysShow || revealed) {
    return <span className={cn(revealedClassName, className)}>{ko}</span>;
  }

  return (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        setRevealed(true);
      }}
      className={cn(
        "rounded text-muted-foreground underline decoration-dotted underline-offset-4 transition-colors hover:text-foreground",
        className,
      )}
    >
      {t("showMeaning")}
    </button>
  );
}
