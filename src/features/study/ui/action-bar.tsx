"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, Check, X } from "lucide-react";

/**
 * 학습 하단 고정 행동 바 — 화면 아래 같은 자리에 항상 주 행동(정답 보기·확인·다음)을 둔다.
 * 카드 길이에 따라 버튼 위치가 흔들리던 문제(2026-09-08 실측)를 없애고
 * 엄지 도달 위치를 고정한다. 학습 화면에서는 탭바가 숨으므로 뷰포트 맨 아래에 붙는다.
 */
export function ActionBar({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "sticky bottom-0 z-20 -mx-4 -mb-4 mt-auto border-t border-border/60 bg-background/95 px-4 pb-safe pt-3 backdrop-blur",
        className,
      )}
    >
      {children}
    </div>
  );
}

interface FeedbackProps {
  correct: boolean;
  /** 굵은 한 줄 — "정답이에요!" / "아쉬워요" */
  title: string;
  /** 보조 줄 — 정답 문장 등 (선택) */
  detail?: string;
  nextLabel: string;
  disabled?: boolean;
  onNext: () => void;
}

/**
 * 정오답 피드백 바 — Duolingo 식 색 배너(초록/빨강) + 아이콘(색약 대비) + 다음 버튼.
 */
export function FeedbackBar({
  correct,
  title,
  detail,
  nextLabel,
  disabled,
  onNext,
}: FeedbackProps) {
  return (
    <ActionBar
      className={cn(
        "border-t-2 duration-200 animate-in slide-in-from-bottom-2 motion-reduce:animate-none",
        correct
          ? "border-emerald-500/60 bg-emerald-950/90"
          : "border-rose-500/60 bg-rose-950/90",
      )}
    >
      <div role="status" className="mb-3 flex items-start gap-2">
        <span
          className={cn(
            "grid h-7 w-7 shrink-0 place-items-center rounded-full",
            correct ? "bg-emerald-500 text-white" : "bg-rose-500 text-white",
          )}
        >
          {correct ? (
            <Check className="h-4 w-4" aria-hidden />
          ) : (
            <X className="h-4 w-4" aria-hidden />
          )}
        </span>
        <div className="min-w-0 flex-1">
          <p
            className={cn(
              "font-black",
              correct ? "text-emerald-300" : "text-rose-300",
            )}
          >
            {title}
          </p>
          {detail && (
            <p className="mt-0.5 text-sm text-foreground/90">{detail}</p>
          )}
        </div>
      </div>
      <Button
        disabled={disabled}
        onClick={onNext}
        className={cn(
          "btn-arcade min-h-12 w-full gap-1.5 text-base font-black",
          correct
            ? "bg-emerald-500 text-white hover:bg-emerald-500/90"
            : "bg-rose-500 text-white hover:bg-rose-500/90",
        )}
        style={{
          boxShadow: `0 4px 0 0 ${correct ? "oklch(0.45 0.15 160)" : "oklch(0.45 0.18 20)"}`,
        }}
      >
        {nextLabel}
        <ArrowRight className="h-4 w-4" aria-hidden />
      </Button>
    </ActionBar>
  );
}
