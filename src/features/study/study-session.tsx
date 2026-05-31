"use client";

import { useEffect, useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import { Link } from "@/i18n/navigation";
import type { VocabCard } from "@/types/card";
import type { CardProgress, ReviewGrade } from "@/types/srs";
import { Rating } from "@/types/srs";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Loader2, PartyPopper, Coffee } from "lucide-react";
import { buildStudyQueue, getProgressMap, applyGrade } from "@/features/srs/repository";
import { previewIntervalsMin, REVIEW_GRADES } from "@/features/srs/scheduler";
import { db } from "@/lib/db";
import { Flashcard } from "./flashcard";
import { ClozeCard } from "./cloze-card";
import { buildWordPool } from "./cloze";
import { cn } from "@/lib/utils";

type Status = "loading" | "studying" | "empty" | "done";
type StudyMode = "flashcard" | "cloze";

const GRADE_STYLES: Record<ReviewGrade, string> = {
  [Rating.Again]: "bg-rose-600 hover:bg-rose-600/90 text-white",
  [Rating.Hard]: "bg-amber-500 hover:bg-amber-500/90 text-white",
  [Rating.Good]: "bg-emerald-600 hover:bg-emerald-600/90 text-white",
  [Rating.Easy]: "bg-sky-600 hover:bg-sky-600/90 text-white",
};

const GRADE_KEY: Record<ReviewGrade, "again" | "hard" | "good" | "easy"> = {
  [Rating.Again]: "again",
  [Rating.Hard]: "hard",
  [Rating.Good]: "good",
  [Rating.Easy]: "easy",
};

export function StudySession() {
  const t = useTranslations("study");
  const searchParams = useSearchParams();
  const deckId = searchParams.get("deck") ?? undefined;
  const [status, setStatus] = useState<Status>("loading");
  const [queue, setQueue] = useState<VocabCard[]>([]);
  const [progressMap, setProgressMap] = useState<Map<string, CardProgress>>(
    new Map(),
  );
  const [index, setIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [studied, setStudied] = useState(0);
  const [busy, setBusy] = useState(false);
  const [mode, setMode] = useState<StudyMode>("flashcard");
  const [wordPool, setWordPool] = useState<string[]>([]);

  useEffect(() => {
    let mounted = true;
    (async () => {
      const now = new Date();
      const [q, pm, allCards] = await Promise.all([
        buildStudyQueue(now, deckId),
        getProgressMap(),
        db.cards.toArray(),
      ]);
      if (!mounted) return;
      setQueue(q.cards);
      setProgressMap(pm);
      setWordPool(buildWordPool(allCards));
      setStatus(q.cards.length === 0 ? "empty" : "studying");
    })();
    return () => {
      mounted = false;
    };
  }, [deckId]);

  function switchMode(next: StudyMode) {
    if (next === mode) return;
    setRevealed(false);
    setMode(next);
  }

  function advance() {
    const next = index + 1;
    setStudied((s) => s + 1);
    if (next >= queue.length) {
      setStatus("done");
    } else {
      setRevealed(false);
      setIndex(next);
    }
  }

  async function handleClozeAnswer(correct: boolean) {
    if (!current || busy) return;
    setBusy(true);
    try {
      await applyGrade(current.id, correct ? Rating.Good : Rating.Again);
      advance();
    } finally {
      setBusy(false);
    }
  }

  const current = queue[index];
  const isNew = current ? !progressMap.has(current.id) : false;

  // 평가 버튼에 표시할 "다음 복습까지" 간격 (분)
  const preview = useMemo(() => {
    if (!current) return null;
    return previewIntervalsMin(progressMap.get(current.id), new Date());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current?.id]);

  function formatInterval(min: number): string {
    if (min < 60) return t("interval.min", { n: min });
    if (min < 1440) return t("interval.hour", { n: Math.round(min / 60) });
    return t("interval.day", { n: Math.round(min / 1440) });
  }

  async function handleGrade(grade: ReviewGrade) {
    if (!current || busy) return;
    setBusy(true);
    try {
      await applyGrade(current.id, grade);
      advance();
    } finally {
      setBusy(false);
    }
  }

  if (status === "loading") {
    return (
      <div className="flex flex-1 flex-col items-center justify-center gap-3 text-muted-foreground">
        <Loader2 className="h-6 w-6 animate-spin" />
        <p className="text-sm">{t("loading")}</p>
      </div>
    );
  }

  if (status === "empty") {
    return (
      <CenteredCard
        icon={<Coffee className="h-10 w-10 text-muted-foreground" />}
        title={t("emptyTitle")}
        desc={t("emptyDesc")}
      >
        <Button nativeButton={false} render={<Link href="/decks" prefetch={false} />}>
          {t("goDecks")}
        </Button>
      </CenteredCard>
    );
  }

  if (status === "done") {
    return (
      <CenteredCard
        icon={<PartyPopper className="h-10 w-10 text-blue-600" />}
        title={t("doneTitle")}
        desc={t("doneDesc", { count: studied })}
      >
        <Button nativeButton={false} render={<Link href="/" prefetch={false} />}>
          {t("backHome")}
        </Button>
      </CenteredCard>
    );
  }

  // studying
  return (
    <div className="flex flex-1 flex-col">
      {/* 모드 토글 */}
      <div className="mb-3 flex gap-1 rounded-lg bg-muted p-1 text-sm">
        {(["flashcard", "cloze"] as const).map((m) => (
          <button
            key={m}
            onClick={() => switchMode(m)}
            className={cn(
              "flex-1 rounded-md py-1.5 font-medium transition-colors",
              mode === m
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            {m === "flashcard" ? t("modeFlashcard") : t("modeCloze")}
          </button>
        ))}
      </div>

      <div className="mb-3 flex items-center gap-3">
        <Progress
          value={((index + (revealed ? 0.5 : 0)) / queue.length) * 100}
          className="h-2"
        />
        <span className="shrink-0 text-xs tabular-nums text-muted-foreground">
          {t("progress", { current: index + 1, total: queue.length })}
        </span>
      </div>

      {current && mode === "flashcard" && (
        <Flashcard
          card={current}
          revealed={revealed}
          isNew={isNew}
          onReveal={() => setRevealed(true)}
        />
      )}

      {current && mode === "cloze" && (
        <ClozeCard
          key={current.id}
          card={current}
          isNew={isNew}
          wordPool={wordPool}
          onAnswer={handleClozeAnswer}
        />
      )}

      {/* 플래시카드 평가 버튼 (공개 후 활성) */}
      {mode === "flashcard" && revealed && preview && (
        <div className="mt-4 grid grid-cols-4 gap-2">
          {REVIEW_GRADES.map((g) => (
            <button
              key={g}
              disabled={busy}
              onClick={() => handleGrade(g)}
              className={`flex flex-col items-center gap-0.5 rounded-lg px-2 py-2.5 text-sm font-semibold transition-opacity disabled:opacity-50 ${GRADE_STYLES[g]}`}
            >
              {t(`rate.${GRADE_KEY[g]}`)}
              <span className="text-[10px] font-normal opacity-90">
                {formatInterval(preview[g])}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function CenteredCard({
  icon,
  title,
  desc,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4 text-center">
      {icon}
      <div className="space-y-1">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="max-w-xs text-sm text-muted-foreground">{desc}</p>
      </div>
      {children}
    </div>
  );
}
