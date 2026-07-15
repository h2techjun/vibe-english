"use client";

import { useEffect, useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import type { VocabCard } from "@/types/card";
import { getCardFace } from "@/lib/card-view";
import { useCourse } from "@/lib/course";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { RevealableMeaning } from "@/components/revealable-meaning";
import { useTts } from "./use-tts";
import { Volume2, Turtle, RotateCcw, Sparkles, Check, X, ArrowRight } from "lucide-react";
import { cn, shuffle } from "@/lib/utils";

interface Props {
  card: VocabCard;
  isNew: boolean;
  busy: boolean;
  onComplete: (correct: boolean) => void;
}

export function ListenCard({ card, isNew, busy, onComplete }: Props) {
  const t = useTranslations("study");
  const { speak, supported } = useTts();
  const { course, src } = useCourse();
  const face = getCardFace(card, course, src);

  // 앞뒤 공백·빈 토큰을 제거한다 — 안 하면 split 이 선/후행 빈 문자열을 만들어
  // 텍스트 없는 유령 타일이 생기고 발화도 깨진다.
  const words = useMemo(
    () => face.example.trim().split(/\s+/).filter(Boolean),
    [face.example],
  );
  const shuffled = useMemo(
    () => shuffle(words.map((w, i) => ({ w, i }))),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [card.id],
  );

  const [answer, setAnswer] = useState<number[]>([]);
  const [checked, setChecked] = useState(false);

  // 카드 진입 시 음성 자동 재생
  useEffect(() => {
    if (supported) speak(face.example);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [card.id]);

  const built = answer.map((i) => words[i]).join(" ");
  const correct = built === words.join(" ");
  const filled = answer.length === words.length;
  const used = new Set(answer);

  function addWord(origIdx: number) {
    if (checked || used.has(origIdx)) return;
    setAnswer((a) => [...a, origIdx]);
  }
  function removeAt(pos: number) {
    if (checked) return;
    setAnswer((a) => a.filter((_, p) => p !== pos));
  }

  // 예문이 1단어 이하라 순서 맞추기가 무의미하면 뜻만 보여주고 통과
  if (words.length < 2) {
    return <ListenFallback card={card} onContinue={() => onComplete(true)} />;
  }

  return (
    <div className="flex flex-1 flex-col">
      <div className="mb-3 flex items-center gap-2">
        <Badge variant="secondary">{card.level}</Badge>
        <Badge
          variant="outline"
          className={
            isNew
              ? "border-blue-300 text-blue-600 dark:border-blue-700 dark:text-blue-400"
              : "border-amber-300 text-amber-600 dark:border-amber-700 dark:text-amber-400"
          }
        >
          {isNew ? t("new") : t("review")}
        </Badge>
      </div>

      <div className="flex flex-1 flex-col rounded-2xl border border-border/60 bg-card p-6 shadow-sm">
        {/* 음성 */}
        <p className="flex items-center gap-1.5 text-sm font-semibold text-violet-600 dark:text-violet-400">
          <Sparkles className="h-4 w-4" />
          {t("listenPrompt")}
        </p>
        <div className="mt-4 flex justify-center gap-2">
          <Button
            variant="outline"
            size="sm"
            className="gap-1.5"
            disabled={!supported}
            onClick={() => speak(face.example)}
          >
            <Volume2 className="h-4 w-4" /> {t("replay")}
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="gap-1.5"
            disabled={!supported}
            onClick={() => speak(face.example, { rate: 0.6 })}
          >
            <Turtle className="h-4 w-4" /> {t("slow")}
          </Button>
        </div>

        {/* 답란 */}
        <div
          className={cn(
            "mt-5 flex min-h-14 flex-wrap content-start gap-2 rounded-xl border border-dashed border-border/60 p-3",
            checked &&
              (correct
                ? "duration-300 animate-in zoom-in-95"
                : "animate-shake"),
          )}
        >
          {answer.map((origIdx, pos) => (
            <button
              key={pos}
              onClick={() => removeAt(pos)}
              disabled={checked}
              className={cn(
                "flex h-11 min-w-11 items-center justify-center rounded-lg border px-3 text-sm font-bold duration-300 animate-in zoom-in-95",
                checked
                  ? correct
                    ? "border-emerald-500 bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300"
                    : "border-rose-500 bg-rose-50 text-rose-700 dark:bg-rose-950 dark:text-rose-300"
                  : "border-violet-400 bg-violet-50 text-violet-700 dark:border-violet-800 dark:bg-violet-950 dark:text-violet-300",
              )}
            >
              {words[origIdx]}
            </button>
          ))}
        </div>

        {/* 단어 풀 */}
        {!checked && (
          <div className="mt-3 flex flex-wrap gap-2">
            {shuffled.map(({ w, i }) =>
              used.has(i) ? null : (
                <button
                  key={i}
                  onClick={() => addWord(i)}
                  className="flex h-11 min-w-11 items-center justify-center rounded-lg border border-border px-3 text-sm font-medium transition-colors hover:border-violet-300 hover:bg-violet-50 hover:text-violet-700 dark:hover:border-violet-800 dark:hover:bg-violet-950 dark:hover:text-violet-300"
                >
                  {w}
                </button>
              ),
            )}
          </div>
        )}

        {/* 확인 / 결과 */}
        {!checked ? (
          <div className="mt-auto flex items-center justify-center gap-2 pt-6">
            {answer.length > 0 && (
              <Button
                variant="ghost"
                size="sm"
                className="gap-1.5"
                aria-label={t("reset")}
                onClick={() => setAnswer([])}
              >
                <RotateCcw className="h-4 w-4" />
              </Button>
            )}
            <Button
              disabled={!filled}
              className="gap-1.5 bg-violet-600 text-white hover:bg-violet-600/90"
              onClick={() => setChecked(true)}
            >
              <Check className="h-4 w-4" />
              {t("checkAnswer")}
            </Button>
          </div>
        ) : (
          <div className="mt-5 flex flex-col gap-3">
            <p
              className={cn(
                "flex items-center justify-center gap-1.5 text-center text-sm font-medium duration-300 animate-in fade-in slide-in-from-bottom-1",
                correct ? "text-emerald-600" : "text-rose-600",
              )}
            >
              {correct ? (
                <Check className="h-4 w-4 shrink-0" />
              ) : (
                <X className="h-4 w-4 shrink-0" />
              )}
              {correct ? t("listenCorrect") : `${t("listenWrong")}: ${face.example}`}
            </p>
            <div className="rounded-xl bg-muted/50 p-4 text-center">
              <p className="font-semibold leading-relaxed">{face.example}</p>
              <RevealableMeaning
                ko={face.exampleTrans}
                className="mt-1 text-sm"
                revealedClassName="text-muted-foreground"
              />
            </div>
            <Button
              disabled={busy}
              className="gap-1.5 bg-violet-600 text-white hover:bg-violet-600/90"
              onClick={() => onComplete(correct)}
            >
              {t("next")}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

/** 예문이 짧아 순서 맞추기가 무의미한 카드용 간이 표시 (cloze/build Fallback 과 동형) */
function ListenFallback({
  card,
  onContinue,
}: {
  card: VocabCard;
  onContinue: () => void;
}) {
  const t = useTranslations("study");
  const { course, src } = useCourse();
  const face = getCardFace(card, course, src);
  return (
    <div className="flex flex-1 flex-col rounded-2xl border border-border/60 bg-card p-6 shadow-sm">
      <p className="text-2xl font-bold">{face.term}</p>
      {face.pronPrimary && (
        <p className="mt-1 font-mono text-sm text-muted-foreground">
          {face.pronPrimary}
        </p>
      )}
      <p className="mt-3 text-lg font-semibold text-blue-700 dark:text-blue-300">
        {face.meaning}
      </p>
      <div className="mt-auto flex justify-center pt-6">
        <Button onClick={onContinue}>{t("next")}</Button>
      </div>
    </div>
  );
}
