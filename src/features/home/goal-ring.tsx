"use client";

import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

const RADIUS = 40;
const CIRC = 2 * Math.PI * RADIUS;

/**
 * 오늘 목표 원형 게이지 — 순환 일일 지표라 바 대신 링으로 표현한다.
 * 달성 시 emerald 체크. strokeDashoffset 전환은 reduced-motion 존중.
 * size: 'md'(112px, 진도 탭) / 'sm'(64px, 홈 요약 타일)
 */
export function GoalRing({
  done,
  goal,
  reached,
  size = "md",
  label,
}: {
  done: number;
  goal: number;
  reached: boolean;
  size?: "sm" | "md";
  /** 스크린리더용 설명 (예: "오늘 목표 12 / 20장") */
  label?: string;
}) {
  const pct = goal > 0 ? Math.min(1, done / goal) : 0;
  const offset = CIRC * (1 - pct);
  const sm = size === "sm";

  return (
    <div
      role="img"
      aria-label={label}
      className={cn(
        "relative grid place-items-center",
        sm ? "h-16 w-16" : "h-28 w-28",
      )}
    >
      <svg className="h-full w-full -rotate-90" viewBox="0 0 100 100" aria-hidden>
        <circle
          cx="50"
          cy="50"
          r={RADIUS}
          fill="none"
          strokeWidth={sm ? 11 : 9}
          className="stroke-muted"
        />
        <circle
          cx="50"
          cy="50"
          r={RADIUS}
          fill="none"
          strokeWidth={sm ? 11 : 9}
          strokeLinecap="round"
          strokeDasharray={CIRC}
          strokeDashoffset={offset}
          className={cn(
            "transition-[stroke-dashoffset] duration-700 ease-out motion-reduce:transition-none",
            reached ? "stroke-emerald-500" : "stroke-primary",
          )}
        />
      </svg>
      <div className="absolute flex flex-col items-center" aria-hidden>
        {reached ? (
          <Check className={cn(sm ? "h-6 w-6" : "h-8 w-8", "text-emerald-500")} />
        ) : sm ? (
          <span className="text-sm font-black tabular-nums leading-none">
            {done}
          </span>
        ) : (
          <>
            <span className="text-2xl font-black tabular-nums leading-none">
              {done}
            </span>
            <span className="text-xs font-medium text-muted-foreground tabular-nums">
              / {goal}
            </span>
          </>
        )}
      </div>
    </div>
  );
}
