"use client";

import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

const RADIUS = 40;
const CIRC = 2 * Math.PI * RADIUS;

/**
 * 오늘 목표 원형 게이지 — 순환 일일 지표라 바 대신 링으로 표현한다.
 * 달성 시 emerald 체크. strokeDashoffset 전환은 reduced-motion 존중.
 */
export function GoalRing({
  done,
  goal,
  reached,
}: {
  done: number;
  goal: number;
  reached: boolean;
}) {
  const pct = goal > 0 ? Math.min(1, done / goal) : 0;
  const offset = CIRC * (1 - pct);

  return (
    <div className="relative grid h-28 w-28 place-items-center">
      <svg className="h-28 w-28 -rotate-90" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r={RADIUS}
          fill="none"
          strokeWidth="9"
          className="stroke-muted"
        />
        <circle
          cx="50"
          cy="50"
          r={RADIUS}
          fill="none"
          strokeWidth="9"
          strokeLinecap="round"
          strokeDasharray={CIRC}
          strokeDashoffset={offset}
          className={cn(
            "transition-[stroke-dashoffset] duration-700 ease-out motion-reduce:transition-none",
            reached ? "stroke-emerald-500" : "stroke-blue-500",
          )}
        />
      </svg>
      <div className="absolute flex flex-col items-center">
        {reached ? (
          <Check className="h-8 w-8 text-emerald-500" />
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
