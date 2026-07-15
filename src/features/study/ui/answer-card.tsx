"use client";

import { Check, X, Share2, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Props {
  /** 패널 제목 — 예: "정답 · 학습 카드" (선택) */
  title?: string;
  /** 완성된 조립 타일 (음절/스펠링 단위) — 없으면 타일 행을 숨김 */
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
  /** 공유 버튼 라벨 — onShare 가 있을 때만 필요 */
  shareLabel?: string;
  nextLabel: string;
  /** 없으면 공유 버튼을 숨김 */
  onShare?: () => void;
  onNext: () => void;
}

/**
 * 학습 화면 우측 '정답 — 학습 카드'.
 * 완성 결과(타일)·term/발음/정오/점수·뜻·예문과 공유·다음 CTA 를 감싸는
 * 공통 프레임. 인터랙션 로직은 갖지 않는 순수 프레젠테이션 컴포넌트.
 */
export function AnswerCard({
  title,
  tiles,
  term,
  pron,
  meaning,
  example,
  exampleTrans,
  score,
  correct,
  shareLabel,
  nextLabel,
  onShare,
  onNext,
}: Props) {
  const isCorrect = correct ?? true;

  return (
    <div className="flex flex-1 flex-col rounded-2xl border border-border/60 bg-card p-6 shadow-sm">
      {title && (
        <p className="flex items-center gap-1.5 text-sm font-semibold text-emerald-600 dark:text-emerald-400">
          <Sparkles className="h-4 w-4" />
          {title}
        </p>
      )}

      <div className="mt-4 flex flex-1 flex-col items-center justify-center gap-4 text-center">
        {/* 완성 타일 (조립 모드에서 넘어온 결과) — 오답 공개(revealed)면 rose 톤 */}
        {tiles && tiles.length > 0 && (
          <div className="flex flex-wrap justify-center gap-1.5">
            {tiles.map((tile, i) => (
              <span
                key={i}
                style={{ animationDelay: `${i * 60}ms` }}
                className={cn(
                  "flex h-11 min-w-11 items-center justify-center rounded-lg border px-2 text-lg font-bold duration-300 animate-in zoom-in-95",
                  isCorrect
                    ? "border-emerald-500 bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300"
                    : "border-rose-500 bg-rose-50 text-rose-700 dark:bg-rose-950 dark:text-rose-300",
                )}
              >
                {tile}
              </span>
            ))}
          </div>
        )}

        {/* term · 발음 · 정오 · 점수 */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          <span className="text-2xl font-bold">{term}</span>
          {pron && (
            <span className="font-mono text-base text-muted-foreground">
              {pron}
            </span>
          )}
          {isCorrect ? (
            <Check className="h-5 w-5 shrink-0 text-emerald-500" />
          ) : (
            <X className="h-5 w-5 shrink-0 text-rose-500" />
          )}
          {typeof score === "number" && (
            <span
              className={cn(
                "rounded-full px-2 py-0.5 text-xs font-bold tabular-nums",
                isCorrect
                  ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300"
                  : "bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300",
              )}
            >
              +{score}
            </span>
          )}
        </div>

        {/* 뜻 */}
        <p className="text-lg font-semibold text-blue-700 dark:text-blue-300">
          {meaning}
        </p>

        {/* 예문 */}
        <div className="w-full rounded-xl bg-muted/50 p-4 text-left">
          <p className="text-sm font-medium leading-relaxed">{example}</p>
          <p className="mt-1 text-sm text-muted-foreground">{exampleTrans}</p>
        </div>
      </div>

      {/* 공유 · 다음 */}
      <div className="mt-6 flex items-center justify-center gap-2">
        {onShare && (
          <Button variant="outline" className="gap-1.5" onClick={onShare}>
            <Share2 className="h-4 w-4" />
            {shareLabel}
          </Button>
        )}
        <Button
          className="gap-1.5 bg-violet-600 text-white hover:bg-violet-600/90"
          onClick={onNext}
        >
          {nextLabel}
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
