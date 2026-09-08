"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { PartyPopper, Share2, Repeat, Home } from "lucide-react";
import { toast } from "sonner";
import { buildShareGrid, shareResult } from "./share";
import { cn } from "@/lib/utils";

interface DoneProps {
  studied: number;
  results: boolean[];
  bestCombo: number;
  streak: number;
  todayTotal: number;
  onContinue: () => void;
}

/**
 * 세션 완료 — "정답 공개" 톤. 정확도 배지를 크게, 다음 행동은 하나(계속 학습)만 강조.
 * 이전 완료 화면은 CTA 5개가 같은 무게로 나열돼 뭘 눌러야 할지 흐렸다(2026-09-08 실측).
 */
export function StudyDone({
  studied,
  results,
  bestCombo,
  streak,
  todayTotal,
  onContinue,
}: DoneProps) {
  const t = useTranslations("study");
  const correct = results.filter(Boolean).length;
  const accuracy =
    results.length > 0 ? Math.round((correct / results.length) * 100) : 100;

  async function share() {
    const outcome = await shareResult(buildShareGrid(results));
    if (outcome === "copied") toast.success(t("shareCopied"));
    else if (outcome === "failed") toast.error(t("shareFailed"));
  }

  return (
    <div className="flex flex-1 flex-col">
      <div className="flex flex-1 flex-col items-center justify-center gap-5 text-center">
        <div className="relative">
          <Confetti />
          <span className="grid h-20 w-20 place-items-center rounded-3xl bg-amber-500/15">
            <PartyPopper
              className="h-10 w-10 text-amber-400 duration-500 animate-in zoom-in motion-reduce:animate-none"
              aria-hidden
            />
          </span>
        </div>

        <div className="space-y-1">
          <h2 className="text-2xl font-black tracking-tight">{t("doneTitle")}</h2>
          <p className="max-w-xs text-sm text-muted-foreground">
            {t("doneDesc", { count: studied })}
          </p>
        </div>

        {/* 성취 배지 — 정확도 */}
        <div
          className={cn(
            "rounded-full px-4 py-1.5 text-sm font-black duration-500 animate-in zoom-in-95 motion-reduce:animate-none",
            accuracy >= 80
              ? "bg-emerald-500/15 text-emerald-300"
              : "bg-amber-500/15 text-amber-300",
          )}
        >
          {t("accuracyBadge", { pct: accuracy })}
        </div>

        {/* 세션 요약 — 학습 수 · 최고 콤보 · 스트릭 */}
        <div className="grid w-full max-w-xs grid-cols-3 gap-2 duration-500 animate-in fade-in slide-in-from-bottom-2 motion-reduce:animate-none">
          <SummaryTile value={studied} label={t("statCards")} />
          <SummaryTile value={`🔥${bestCombo}`} label={t("statCombo")} />
          <SummaryTile value={streak} label={t("statStreak")} />
        </div>

        {/* 결과 그리드 (Wordle 식) */}
        {results.length > 0 && (
          <p
            className="text-lg leading-tight tracking-tight"
            aria-label={`${correct}/${results.length}`}
          >
            {results.map((ok) => (ok ? "🟩" : "🟥")).join("")}
          </p>
        )}

        <p className="text-xs text-muted-foreground">
          {t("todayTotal", { n: todayTotal })}
        </p>
      </div>

      {/* 다음 행동 — 주 CTA 하나 + 공유 + 홈 */}
      <div className="sticky bottom-0 -mx-4 -mb-4 mt-4 flex flex-col gap-2 bg-background/95 px-4 pb-safe pt-3 backdrop-blur">
        <Button
          onClick={onContinue}
          className="btn-arcade min-h-12 w-full gap-1.5 text-base font-black"
        >
          <Repeat className="h-4 w-4" aria-hidden />
          {t("practiceContinue")}
        </Button>
        <div className="grid grid-cols-2 gap-2">
          <Button
            variant="outline"
            className="min-h-11 gap-1.5"
            onClick={share}
          >
            <Share2 className="h-4 w-4" aria-hidden />
            {t("shareResult")}
          </Button>
          <Button
            variant="ghost"
            className="min-h-11 gap-1.5"
            nativeButton={false}
            render={<Link href="/home" prefetch={false} />}
          >
            <Home className="h-4 w-4" aria-hidden />
            {t("backHome")}
          </Button>
        </div>
      </div>
    </div>
  );
}

interface EmptyProps {
  weak: number;
  isWeakSession: boolean;
  onPractice: () => void;
}

/** due 카드가 없을 때 — 오늘 복습을 다 끝냈다는 뜻. 자유 연습으로 이어간다. */
export function StudyEmpty({ weak, isWeakSession, onPractice }: EmptyProps) {
  const t = useTranslations("study");
  return (
    <div className="flex flex-1 flex-col">
      <div className="flex flex-1 flex-col items-center justify-center gap-4 text-center">
        <span className="grid h-20 w-20 place-items-center rounded-3xl bg-emerald-500/15">
          <PartyPopper className="h-10 w-10 text-emerald-400" aria-hidden />
        </span>
        <div className="space-y-1">
          <h2 className="text-2xl font-black tracking-tight">{t("caughtUpTitle")}</h2>
          <p className="max-w-xs text-sm text-muted-foreground">{t("caughtUpDesc")}</p>
        </div>
      </div>
      <div className="sticky bottom-0 -mx-4 -mb-4 mt-4 flex flex-col gap-2 bg-background/95 px-4 pb-safe pt-3 backdrop-blur">
        <Button
          onClick={onPractice}
          className="btn-arcade min-h-12 w-full gap-1.5 text-base font-black"
        >
          <Repeat className="h-4 w-4" aria-hidden />
          {t("practiceStart")}
        </Button>
        <div className="grid grid-cols-2 gap-2">
          {weak > 0 && !isWeakSession ? (
            <Button
              variant="outline"
              className="min-h-11"
              nativeButton={false}
              render={<Link href="/study?weak=1" prefetch={false} />}
            >
              {t("weakReview")}
            </Button>
          ) : (
            <Button
              variant="outline"
              className="min-h-11"
              nativeButton={false}
              render={<Link href="/decks" prefetch={false} />}
            >
              {t("goDecks")}
            </Button>
          )}
          <Button
            variant="ghost"
            className="min-h-11 gap-1.5"
            nativeButton={false}
            render={<Link href="/home" prefetch={false} />}
          >
            <Home className="h-4 w-4" aria-hidden />
            {t("backHome")}
          </Button>
        </div>
      </div>
    </div>
  );
}

function SummaryTile({ value, label }: { value: number | string; label: string }) {
  return (
    <div className="rounded-2xl border border-border/60 bg-card p-3">
      <p className="text-xl font-black tabular-nums">{value}</p>
      <p className="text-xs text-muted-foreground">{label}</p>
    </div>
  );
}

/** 완료 컨페티 — 아이콘 위로 튀어오르는 CSS 애니메이션 (외부 의존성 없음) */
function Confetti() {
  const items = ["🎉", "⭐", "🔥", "💯", "🎊", "✨"];
  return (
    <div
      className="pointer-events-none absolute inset-x-0 -top-2 flex justify-center gap-3"
      aria-hidden
    >
      {items.map((e, i) => (
        <span
          key={i}
          className="animate-confetti text-xl"
          style={{ animationDelay: `${i * 130}ms` }}
        >
          {e}
        </span>
      ))}
    </div>
  );
}
