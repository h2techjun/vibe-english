"use client";

import { useEffect, useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import type { VocabCard } from "@/types/card";
import { getCardFace } from "@/lib/card-view";
import { useCourse } from "@/lib/course";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { StudyShell } from "./ui/study-shell";
import { ChallengePanel } from "./ui/challenge-panel";
import { AnswerCard } from "./ui/answer-card";
import { ActionBar } from "./ui/action-bar";
import { CardMeta } from "./ui/card-meta";
import { splitUnits, buildBank, initialHint } from "./build";

interface Props {
  card: VocabCard;
  isNew: boolean;
  /** 오답 유닛 풀 — study-session 이 buildUnitPool 로 만들어 주입 */
  unitPool: string[];
  /** 평가 처리 중 — 다음 버튼 연타로 인한 이중 평가 방지 */
  busy?: boolean;
  /** 정답 여부를 부모에 전달 (FSRS 자동 평가) */
  onAnswer: (correct: boolean) => void;
}

/** 오답 shake 애니메이션 지속 시간(ms). globals.css 의 loopla-shake(0.4s)와 일치. */
const SHAKE_MS = 400;

/**
 * 조립형 학습(build) 카드 — ChallengePanel 에 음절/스펠링 뱅크를 채워 단어를
 * 완성하면 AnswerCard 로 정답을 보여준다. ko 코스=음절 조립 / en 코스=글자·단어
 * 조립(build.ts 의 splitUnits 가 분기). props 는 cloze-card 와 동형(card/isNew/busy/onAnswer).
 */
export function BuildCard({ card, isNew, unitPool, busy, onAnswer }: Props) {
  const t = useTranslations("study");
  const { course, src } = useCourse();
  const face = getCardFace(card, course, src);

  const answerUnits = useMemo(
    () => splitUnits(face.term, course),
    [face.term, course],
  );
  const bank = useMemo(
    () => buildBank(answerUnits, unitPool, course),
    [answerUnits, unitPool, course],
  );
  const hint = initialHint(face.term, course, face.pronPrimary);

  // 채운 뱅크 타일의 인덱스를 순서대로 담는다. 정오답 판정은 이 배열로만 한다.
  const [placed, setPlaced] = useState<number[]>([]);
  const [shaking, setShaking] = useState(false);
  const [solved, setSolved] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const judged = solved || revealed;

  // 카드가 바뀌면 조립 상태 초기화 (cloze-card/flashcard 와 동형 패턴)
  useEffect(() => {
    /* eslint-disable react-hooks/set-state-in-effect */
    setPlaced([]);
    setShaking(false);
    setSolved(false);
    setRevealed(false);
    /* eslint-enable react-hooks/set-state-in-effect */
  }, [card.id]);

  // Backspace = 마지막으로 채운 슬롯 취소 (1음절 폴백 카드에서는 비활성)
  useEffect(() => {
    if (judged || shaking || answerUnits.length < 2) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key !== "Backspace") return;
      e.preventDefault();
      setPlaced((p) => (p.length === 0 ? p : p.slice(0, -1)));
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [judged, shaking, answerUnits.length]);

  // 1음절/1단어라 조립이 무의미한 카드 → 뜻만 보여주고 통과(cloze-card 의 ClozeFallback 과 동형)
  if (answerUnits.length < 2) {
    return <BuildFallback card={card} onContinue={() => onAnswer(true)} />;
  }

  function addUnit(bankIdx: number) {
    if (judged || shaking || placed.length >= answerUnits.length) return;
    const next = [...placed, bankIdx];
    setPlaced(next);
    if (next.length < answerUnits.length) return;
    const correct = next.every((idx, i) => bank[idx] === answerUnits[i]);
    if (correct) {
      setSolved(true);
    } else {
      // 첫 불일치 위치부터 되돌린다 — 마지막 타일만 튕기면 정작 올바른 끝 타일이
      // 빠지고 앞쪽 오답이 슬롯에 남아 "어디가 틀렸는지" 알 수 없게 되기 때문.
      const firstWrong = next.findIndex((idx, i) => bank[idx] !== answerUnits[i]);
      setShaking(true);
      window.setTimeout(() => {
        setShaking(false);
        setPlaced((p) => p.slice(0, firstWrong < 0 ? p.length - 1 : firstWrong));
      }, SHAKE_MS);
    }
  }

  function removeAt(pos: number) {
    if (judged || shaking) return;
    setPlaced((p) => p.filter((_, i) => i !== pos));
  }

  function handleNext() {
    if (busy) return;
    onAnswer(solved);
  }

  return (
    <div className="flex flex-1 flex-col">
      <CardMeta level={card.level} isNew={isNew} />

      <StudyShell
        left={
          <ChallengePanel
            title={t("buildPrompt")}
            prompt={face.meaning}
            hint={hint}
          >
            {/* 조립 슬롯 — 정답 길이만큼, 채운 칸=violet 실선 / 빈 칸=점선 */}
            <div
              role="group"
              aria-label={t("bankLabel")}
              className={cn(
                "flex flex-wrap justify-center gap-2",
                shaking && "animate-shake",
              )}
            >
              {answerUnits.map((unit, i) => {
                if (!judged && i >= placed.length) {
                  return (
                    <span
                      key={i}
                      className="h-11 min-w-11 rounded-lg border border-dashed border-border/60"
                    />
                  );
                }
                const label = judged ? unit : bank[placed[i]];
                return (
                  <button
                    key={i}
                    disabled={judged || shaking}
                    onClick={() => removeAt(i)}
                    aria-label={judged ? undefined : t("removeTile", { tile: label })}
                    style={judged ? { animationDelay: `${i * 60}ms` } : undefined}
                    className={cn(
                      "flex h-12 min-w-12 items-center justify-center rounded-xl border-2 px-2 text-lg font-black transition-colors disabled:cursor-default motion-reduce:transition-none",
                      judged
                        ? solved
                          ? "border-emerald-500 bg-emerald-50 text-emerald-700 duration-300 animate-in zoom-in-95 dark:bg-emerald-950 dark:text-emerald-300"
                          : "border-rose-500 bg-rose-50 text-rose-700 duration-300 animate-in zoom-in-95 dark:bg-rose-950 dark:text-rose-300"
                        : shaking
                          ? "border-rose-500 bg-rose-50 text-rose-700 dark:bg-rose-950 dark:text-rose-300"
                          : "border-violet-500 bg-violet-50 text-violet-700 dark:border-violet-600 dark:bg-violet-950 dark:text-violet-300",
                    )}
                  >
                    {label}
                  </button>
                );
              })}
            </div>

            {/* 음절/스펠링 뱅크 — 탭하면 다음 빈 슬롯 채움 */}
            {!judged && (
              <div className="flex flex-wrap justify-center gap-2">
                {bank.map((unit, idx) =>
                  placed.includes(idx) ? null : (
                    <button
                      key={idx}
                      onClick={() => addUnit(idx)}
                      disabled={shaking}
                      className="flex h-12 min-w-12 items-center justify-center rounded-xl border-2 border-border bg-background px-3 text-lg font-bold shadow-[0_3px_0_0_var(--border)] transition-all hover:border-primary/60 active:translate-y-[2px] active:shadow-none disabled:cursor-default disabled:opacity-50 motion-reduce:transition-none"
                    >
                      {unit}
                    </button>
                  ),
                )}
              </div>
            )}

          </ChallengePanel>
        }
        right={
          judged ? (
            <AnswerCard
              tiles={answerUnits}
              term={face.term}
              pron={face.pronPrimary}
              meaning={face.meaning}
              example={face.example}
              exampleTrans={face.exampleTrans}
              score={solved ? (isNew ? 80 : 120) : undefined}
              correct={solved}
              statusLabel={solved ? t("buildCorrect") : t("buildWrong")}
              nextLabel={t("next")}
              onNext={handleNext}
            />
          ) : undefined
        }
      />

      {/* 포기하고 정답 보기 — 하단 고정. 정답 후엔 AnswerCard(바텀시트)의 '다음'이 대신한다 */}
      {!judged && (
        <ActionBar>
          <Button
            variant="outline"
            className="min-h-12 w-full text-base font-bold"
            onClick={() => setRevealed(true)}
          >
            {t("showAnswer")}
          </Button>
        </ActionBar>
      )}
    </div>
  );
}

/** 조립이 무의미한 1음절/1단어 카드용 간이 표시 (cloze-card 의 ClozeFallback 과 동형) */
function BuildFallback({
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
