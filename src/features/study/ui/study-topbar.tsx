"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

interface Props {
  /** 세션 진행률 0~100. 없으면(대화 모드 등 자체 진행바) 빈 공간만 둔다 */
  value?: number;
  /** 우측 슬롯 — 모드 선택 버튼 등 */
  right?: React.ReactNode;
  /** 연속 학습 일수 (0이면 회색) */
  streak?: number;
}

/**
 * 학습 상단바 — [닫기 X] [세션 진행바] [🔥스트릭] [모드].
 * 앱 헤더·탭바 대신 쓰는 집중 모드 크롬. 닫기는 홈으로 (카드별 평가가 즉시
 * 저장되므로 이탈 확인 없이 안전하다).
 */
export function StudyTopbar({ value, right, streak }: Props) {
  const t = useTranslations("study");
  return (
    <div className="sticky top-0 z-20 -mx-4 mb-3 border-b border-border/60 bg-background/95 px-4 backdrop-blur">
      <div className="flex h-14 items-center gap-3">
        <Link
          href="/home"
          prefetch={false}
          aria-label={t("close")}
          className="-ml-2 grid h-11 w-11 shrink-0 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          <X className="h-5 w-5" aria-hidden />
        </Link>
        {typeof value === "number" ? (
          <Progress
            value={value}
            className="flex-1"
            trackClassName="h-2.5"
            aria-label={t("sessionProgress")}
          >
            <span className="sr-only">{Math.round(value)}%</span>
          </Progress>
        ) : (
          <div className="flex-1" />
        )}
        {typeof streak === "number" && (
          <span
            className={cn(
              "flex shrink-0 items-center gap-0.5 text-sm font-black tabular-nums",
              streak > 0 ? "text-orange-500" : "text-muted-foreground",
            )}
            aria-label={`${t("statStreak")} ${streak}`}
          >
            🔥{streak}
          </span>
        )}
        {right}
      </div>
    </div>
  );
}
