"use client";

import { Check, X, Share2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Props {
  /** 완성된 조립 타일 (음절/스펠링 단위) — 데스크톱에서만 표시 (모바일 시트는 좌 패널에 이미 있음) */
  tiles?: string[];
  term: string;
  pron?: string;
  meaning: string;
  example: string;
  exampleTrans: string;
  /** 획득 점수 — 있으면 +N 뱃지 표시 */
  score?: number;
  /** 정답 여부 — 기본 true(정답 톤 emerald). false면 오답 톤(rose)으로 표시 */
  correct?: boolean;
  /** 정오 한 줄 — "정답이에요!" / "아쉬워요" */
  statusLabel?: string;
  /** 공유 버튼 라벨 — onShare 가 있을 때만 필요 */
  shareLabel?: string;
  nextLabel: string;
  /** 없으면 공유 버튼을 숨김 */
  onShare?: () => void;
  onNext: () => void;
}

/**
 * '정답 — 학습 카드'. 모바일에선 StudyShell 이 바텀시트로 띄우고, 데스크톱에선 우측 패널.
 * 정오 색 배너 + 아이콘(색약 대비) + term/뜻/예문 + 하단 고정 '다음'.
 */
export function AnswerCard({
  tiles,
  term,
  pron,
  meaning,
  example,
  exampleTrans,
  score,
  correct,
  statusLabel,
  shareLabel,
  nextLabel,
  onShare,
  onNext,
}: Props) {
  const isCorrect = correct ?? true;

  return (
    <div className="flex flex-1 flex-col md:rounded-2xl md:border md:border-border/60 md:bg-card md:shadow-sm">
      {/* 정오 배너 */}
      <div
        role="status"
        className={cn(
          "flex items-center gap-2 rounded-t-3xl px-5 py-3 md:rounded-t-2xl",
          isCorrect ? "bg-emerald-500/15" : "bg-rose-500/15",
        )}
      >
        <span
          className={cn(
            "grid h-7 w-7 shrink-0 place-items-center rounded-full text-white",
            isCorrect ? "bg-emerald-500" : "bg-rose-500",
          )}
        >
          {isCorrect ? (
            <Check className="h-4 w-4" aria-hidden />
          ) : (
            <X className="h-4 w-4" aria-hidden />
          )}
        </span>
        <p
          className={cn(
            "font-black",
            isCorrect ? "text-emerald-300" : "text-rose-300",
          )}
        >
          {statusLabel}
        </p>
        {typeof score === "number" && (
          <span
            className={cn(
              "ml-auto rounded-full px-2 py-0.5 text-xs font-black tabular-nums",
              isCorrect
                ? "bg-emerald-500/20 text-emerald-300"
                : "bg-rose-500/20 text-rose-300",
            )}
          >
            +{score}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col items-center gap-3 px-5 py-4 text-center">
        {/* 완성 타일 — 데스크톱 전용 */}
        {tiles && tiles.length > 0 && (
          <div className="hidden flex-wrap justify-center gap-1.5 md:flex">
            {tiles.map((tile, i) => (
              <span
                key={i}
                style={{ animationDelay: `${i * 60}ms` }}
                className={cn(
                  "flex h-11 min-w-11 items-center justify-center rounded-lg border-2 px-2 text-lg font-black duration-300 animate-in zoom-in-95 motion-reduce:animate-none",
                  isCorrect
                    ? "border-emerald-500 bg-emerald-950 text-emerald-300"
                    : "border-rose-500 bg-rose-950 text-rose-300",
                )}
              >
                {tile}
              </span>
            ))}
          </div>
        )}

        {/* term · 발음 */}
        <div className="flex flex-wrap items-baseline justify-center gap-x-2">
          <span className="text-2xl font-black">{term}</span>
          {pron && (
            <span className="font-mono text-sm text-muted-foreground">{pron}</span>
          )}
        </div>

        {/* 뜻 */}
        <p className="text-lg font-bold text-primary">{meaning}</p>

        {/* 예문 */}
        <div className="w-full rounded-xl bg-muted/50 p-3 text-left">
          <p className="text-sm font-medium leading-relaxed">{example}</p>
          <p className="mt-1 text-sm text-muted-foreground">{exampleTrans}</p>
        </div>
      </div>

      {/* 공유 · 다음 — 시트 하단 고정 */}
      <div className="sticky bottom-0 flex items-center gap-2 border-t border-border/60 bg-background/95 px-4 pb-safe pt-3 backdrop-blur md:static md:rounded-b-2xl md:border-0 md:bg-transparent md:pb-4">
        {onShare && (
          <Button
            variant="outline"
            className="min-h-12 shrink-0 gap-1.5"
            onClick={onShare}
          >
            <Share2 className="h-4 w-4" aria-hidden />
            {shareLabel}
          </Button>
        )}
        <Button
          className={cn(
            "btn-arcade min-h-12 flex-1 gap-1.5 text-base font-black text-white",
            isCorrect
              ? "bg-emerald-500 hover:bg-emerald-500/90"
              : "bg-rose-500 hover:bg-rose-500/90",
          )}
          style={{
            boxShadow: `0 4px 0 0 ${isCorrect ? "oklch(0.45 0.15 160)" : "oklch(0.45 0.18 20)"}`,
          }}
          onClick={onNext}
        >
          {nextLabel}
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Button>
      </div>
    </div>
  );
}
