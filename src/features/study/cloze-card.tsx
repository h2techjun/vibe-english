"use client";

import { useEffect, useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import type { VocabCard } from "@/types/card";
import { getCardFace } from "@/lib/card-view";
import { useCourse } from "@/lib/course";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useTts } from "./use-tts";
import { buildCloze, makeOptions } from "./cloze";
import { Volume2, Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  card: VocabCard;
  isNew: boolean;
  wordPool: string[];
  /** 평가 처리 중 — 다음 버튼 연타로 인한 이중 평가 방지 */
  busy?: boolean;
  /** 정답 여부를 부모에 전달 (FSRS 자동 평가) */
  onAnswer: (correct: boolean) => void;
}

export function ClozeCard({ card, isNew, wordPool, busy, onAnswer }: Props) {
  const t = useTranslations("study");
  const { speak, supported } = useTts();
  const { course, src } = useCourse();
  const face = getCardFace(card, course, src);

  const cloze = useMemo(() => buildCloze(card, course), [card, course]);
  const options = useMemo(
    () => (cloze ? makeOptions(cloze.answer, wordPool, course) : []),
    [cloze, wordPool, course],
  );

  const [selected, setSelected] = useState<string | null>(null);
  const answered = selected !== null;
  const correct = answered && cloze ? selected === cloze.answer : false;

  // 카드가 바뀌면 상태 초기화 + 예문 자동 재생
  useEffect(() => {
    setSelected(null);
    if (supported && cloze) speak(face.example);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [card.id]);

  // 빈칸 추출 실패 시 부모가 플래시카드로 폴백하도록 신호
  if (!cloze) {
    return <ClozeFallback card={card} onContinue={() => onAnswer(true)} />;
  }

  function choose(option: string) {
    if (answered) return;
    setSelected(option);
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
        <p className="text-sm text-muted-foreground">{t("clozePrompt")}</p>

        {/* 빈칸 예문 */}
        <p className="mt-4 text-xl font-semibold leading-relaxed">
          {answered ? face.example : cloze.masked}
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          {face.exampleTrans}
        </p>

        {/* 표현 뜻 힌트 */}
        <div className="mt-3 flex items-center gap-2 text-sm">
          <span className="font-medium">{face.term}</span>
          <span className="text-muted-foreground">— {face.meaning}</span>
          <Button
            variant="ghost"
            size="icon-sm"
            disabled={!supported}
            onClick={() => speak(face.example)}
            aria-label={t("listen")}
          >
            <Volume2 className="h-4 w-4" />
          </Button>
        </div>

        {/* 보기 */}
        <div className="mt-5 grid grid-cols-2 gap-2">
          {options.map((opt) => {
            const isAnswer = opt === cloze.answer;
            const isPicked = opt === selected;
            return (
              <button
                key={opt}
                disabled={answered}
                onClick={() => choose(opt)}
                className={cn(
                  "flex items-center justify-center gap-1.5 rounded-lg border px-3 py-3 text-base font-medium transition-colors disabled:cursor-default",
                  !answered &&
                    "border-border hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950",
                  answered &&
                    isAnswer &&
                    "border-emerald-500 bg-emerald-50 text-emerald-700 duration-300 animate-in zoom-in-95 dark:bg-emerald-950 dark:text-emerald-300",
                  answered &&
                    isPicked &&
                    !isAnswer &&
                    "animate-shake border-rose-500 bg-rose-50 text-rose-700 dark:bg-rose-950 dark:text-rose-300",
                  answered && !isAnswer && !isPicked && "opacity-50",
                )}
              >
                {answered && isAnswer && <Check className="h-4 w-4" />}
                {answered && isPicked && !isAnswer && <X className="h-4 w-4" />}
                {opt}
              </button>
            );
          })}
        </div>

        {/* 피드백 + 다음 */}
        {answered && (
          <div className="mt-auto flex flex-col items-center gap-3 pt-6">
            <p
              className={cn(
                "text-sm font-medium duration-300 animate-in fade-in slide-in-from-bottom-1",
                correct ? "text-emerald-600" : "text-rose-600",
              )}
            >
              {correct
                ? t("clozeCorrect")
                : `${t("clozeWrong")} "${cloze.answer}"`}
            </p>
            <Button disabled={busy} onClick={() => onAnswer(correct)}>
              {t("next")}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

/** 빈칸을 만들 수 없는 카드용 간이 표시 (예문이 너무 짧은 경우) */
function ClozeFallback({
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
      {face.pronSecondary && (
        <p className="text-sm text-muted-foreground">[{face.pronSecondary}]</p>
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
