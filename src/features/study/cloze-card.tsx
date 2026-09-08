"use client";

import { useEffect, useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import type { VocabCard } from "@/types/card";
import { getCardFace } from "@/lib/card-view";
import { useCourse } from "@/lib/course";
import { Button } from "@/components/ui/button";
import { useTts } from "./use-tts";
import { buildCloze, makeOptions } from "./cloze";
import { Volume2, Check, X } from "lucide-react";
import { FeedbackBar, ActionBar } from "./ui/action-bar";
import { CardMeta } from "./ui/card-meta";
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

  // card.id 가 바뀌면 부모(study-session)의 key={current.id} 로 리마운트돼
  // selected 가 자동 초기화되므로 여기서 리셋하지 않는다. 예문 자동 재생만.
  useEffect(() => {
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
      <CardMeta level={card.level} isNew={isNew} />

      <div className="flex flex-1 flex-col rounded-2xl border border-border/60 bg-card p-5 shadow-sm">
        <p className="text-sm font-semibold text-primary">{t("clozePrompt")}</p>

        {/* 빈칸 예문 */}
        <p className="mt-4 text-xl font-semibold leading-relaxed">
          {answered ? face.example : cloze.masked}
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          {face.exampleTrans}
        </p>

        {/* 힌트 — 정답 전엔 뜻만 보여준다. 표현(term)까지 보이면 보기 중 정답이
            그대로 드러나 퀴즈가 무의미해진다(2026-09-08 실측: "Hello. — 안녕하세요" 옆에 보기 Hello). */}
        <div className="mt-3 flex items-center gap-2 text-sm">
          {answered && <span className="font-bold">{face.term}</span>}
          <span className="text-muted-foreground">
            {answered ? `— ${face.meaning}` : `💡 ${face.meaning}`}
          </span>
          <Button
            variant="ghost"
            size="icon"
            className="min-h-11 min-w-11"
            disabled={!supported}
            onClick={() => speak(face.example)}
            aria-label={t("listen")}
          >
            <Volume2 className="h-4 w-4" />
          </Button>
        </div>

        {/* 보기 */}
        <div className="mt-5 grid grid-cols-2 gap-2" role="group" aria-label={t("clozePrompt")}>
          {options.map((opt) => {
            const isAnswer = opt === cloze.answer;
            const isPicked = opt === selected;
            return (
              <button
                key={opt}
                disabled={answered}
                onClick={() => choose(opt)}
                className={cn(
                  "flex min-h-12 items-center justify-center gap-1.5 rounded-xl border-2 px-3 py-3 text-base font-semibold transition-colors disabled:cursor-default motion-reduce:transition-none",
                  !answered &&
                    "border-border hover:border-primary/60 hover:bg-primary/10",
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
                {answered && isAnswer && <Check className="h-4 w-4" aria-hidden />}
                {answered && isPicked && !isAnswer && <X className="h-4 w-4" aria-hidden />}
                {opt}
              </button>
            );
          })}
        </div>

      </div>

      {/* 피드백 + 다음 — 하단 고정 */}
      {answered ? (
        <FeedbackBar
          correct={correct}
          title={correct ? t("clozeCorrect") : t("clozeWrong")}
          detail={correct ? undefined : `${cloze.answer} · ${face.example}`}
          nextLabel={t("next")}
          disabled={busy}
          onNext={() => onAnswer(correct)}
        />
      ) : (
        <ActionBar>
          <p className="text-center text-sm text-muted-foreground">{t("pickOption")}</p>
        </ActionBar>
      )}
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
      <p className="mt-3 text-lg font-semibold text-primary">
        {face.meaning}
      </p>
      <ActionBar>
        <Button onClick={onContinue} className="btn-arcade min-h-12 w-full text-base font-black">
          {t("next")}
        </Button>
      </ActionBar>
    </div>
  );
}
