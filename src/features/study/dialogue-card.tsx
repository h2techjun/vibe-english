"use client";

import { useEffect, useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import type { Dialogue } from "@/types/dialogue";
import type { ReviewGrade } from "@/types/srs";
import { Rating } from "@/types/srs";
import { REVIEW_GRADES } from "@/features/srs/scheduler";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { RevealableMeaning } from "@/components/revealable-meaning";
import { useTts } from "./use-tts";
import { Volume2, MessageSquareQuote } from "lucide-react";
import { cn } from "@/lib/utils";

type Part = { text: string } | { blank: number };

/** "I'm {0}, thank you." -> [{text}, {blank:0}, {text}] */
function parseTemplate(template: string): Part[] {
  const parts: Part[] = [];
  const re = /\{(\d+)\}/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(template)) !== null) {
    if (m.index > last) parts.push({ text: template.slice(last, m.index) });
    parts.push({ blank: Number(m[1]) });
    last = m.index + m[0].length;
  }
  if (last < template.length) parts.push({ text: template.slice(last) });
  return parts;
}

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

interface Props {
  dialogue: Dialogue;
  isNew: boolean;
  busy: boolean;
  onGrade: (grade: ReviewGrade) => void;
}

export function DialogueCard({ dialogue, isNew, busy, onGrade }: Props) {
  const t = useTranslations("study");
  const { speak, supported } = useTts();
  const parts = useMemo(
    () => parseTemplate(dialogue.template),
    [dialogue.template],
  );

  const [selected, setSelected] = useState<(number | null)[]>(() =>
    dialogue.blanks.map(() => null),
  );
  const [completed, setCompleted] = useState(false);

  // 상대 말 자동 재생
  useEffect(() => {
    if (supported) speak(dialogue.prompt.en);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dialogue.id]);

  const allFilled = selected.every((s) => s !== null);
  const sentence = parts
    .map((p) =>
      "text" in p
        ? p.text
        : selected[p.blank] !== null
          ? dialogue.blanks[p.blank][selected[p.blank]!].en
          : "____",
    )
    .join("");

  function pick(blankIdx: number, optIdx: number) {
    if (completed) return;
    setSelected((prev) => {
      const next = [...prev];
      next[blankIdx] = next[blankIdx] === optIdx ? null : optIdx;
      return next;
    });
  }

  return (
    <div className="flex flex-1 flex-col">
      <div className="mb-3 flex items-center gap-2">
        <Badge variant="secondary">{dialogue.level}</Badge>
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
        <span className="ml-auto flex items-center gap-1 text-xs text-muted-foreground">
          {dialogue.context.en} ·
          <RevealableMeaning ko={dialogue.context.ko} className="text-xs" />
        </span>
      </div>

      {/* 상대 말 */}
      <div className="rounded-2xl rounded-bl-sm border border-border/60 bg-muted/50 p-4">
        <div className="flex items-start justify-between gap-2">
          <p className="text-lg font-semibold leading-relaxed">
            {dialogue.prompt.en}
          </p>
          <Button
            variant="ghost"
            size="icon-sm"
            className="shrink-0"
            disabled={!supported}
            onClick={() => speak(dialogue.prompt.en)}
            aria-label={t("listen")}
          >
            <Volume2 className="h-4 w-4" />
          </Button>
        </div>
        <div className="mt-1 text-sm">
          <RevealableMeaning ko={dialogue.prompt.ko} className="text-sm" />
        </div>
      </div>

      {/* 내 응답 (빈칸 문장) */}
      <p className="mt-4 text-xs font-medium text-muted-foreground">
        {t("dialoguePrompt")}
      </p>
      <p className="mt-1 text-lg leading-relaxed">
        {parts.map((p, i) =>
          "text" in p ? (
            <span key={i}>{p.text}</span>
          ) : selected[p.blank] !== null ? (
            <span
              key={i}
              className="font-semibold text-blue-600 dark:text-blue-400"
            >
              {dialogue.blanks[p.blank][selected[p.blank]!].en}
            </span>
          ) : (
            <span
              key={i}
              className="mx-0.5 inline-block min-w-12 border-b-2 border-dashed border-blue-400 align-bottom text-blue-400"
            >
              &nbsp;
            </span>
          ),
        )}
      </p>

      {!completed ? (
        <>
          {/* 빈칸별 선택지 */}
          <div className="mt-4 flex flex-col gap-3">
            {dialogue.blanks.map((options, bi) => (
              <div key={bi} className="flex flex-col gap-1.5">
                <span className="text-[11px] font-medium text-muted-foreground">
                  {bi + 1}
                </span>
                <div className="flex flex-wrap gap-2">
                  {options.map((opt, oi) => (
                    <div
                      key={oi}
                      role="button"
                      tabIndex={0}
                      onClick={() => pick(bi, oi)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          pick(bi, oi);
                        }
                      }}
                      className={cn(
                        "flex cursor-pointer items-center gap-1.5 rounded-lg border px-3 py-2 text-sm transition-colors",
                        selected[bi] === oi
                          ? "border-blue-500 bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300"
                          : "border-border hover:border-blue-300",
                      )}
                    >
                      <span className="font-medium">{opt.en}</span>
                      <RevealableMeaning
                        ko={opt.ko}
                        className="text-[11px]"
                        revealedClassName="text-muted-foreground"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-auto flex justify-center pt-6">
            <Button disabled={!allFilled} onClick={() => setCompleted(true)}>
              {t("checkAnswer")}
            </Button>
          </div>
        </>
      ) : (
        <>
          {/* 완성: 내 문장 + 음성 */}
          <div className="mt-4 flex items-center gap-2 rounded-xl bg-emerald-50 p-3 dark:bg-emerald-950/40">
            <p className="flex-1 font-semibold text-emerald-700 dark:text-emerald-300">
              {sentence}
            </p>
            <Button
              variant="ghost"
              size="icon-sm"
              disabled={!supported}
              onClick={() => speak(sentence)}
              aria-label={t("listen")}
            >
              <Volume2 className="h-4 w-4" />
            </Button>
          </div>

          {/* 모범답안 + 대체 표현 */}
          <div className="mt-4">
            <p className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
              <MessageSquareQuote className="h-3.5 w-3.5" />
              {t("dialogueComplete")}
            </p>
            <ul className="mt-2 flex flex-col gap-2">
              {[dialogue.example, ...dialogue.alternatives].map((alt, i) => (
                <li
                  key={i}
                  className="rounded-lg border border-border/60 p-2.5 text-sm"
                >
                  <div className="flex items-center gap-1.5">
                    <span>{alt.en}</span>
                    <Button
                      variant="ghost"
                      size="icon-xs"
                      disabled={!supported}
                      onClick={() => speak(alt.en)}
                      aria-label={t("listen")}
                    >
                      <Volume2 className="h-3.5 w-3.5" />
                    </Button>
                  </div>
                  <RevealableMeaning
                    ko={alt.ko}
                    className="text-xs"
                    revealedClassName="text-muted-foreground"
                  />
                </li>
              ))}
            </ul>
          </div>

          {/* FSRS 자가 평가 */}
          <div className="mt-5 grid grid-cols-4 gap-2">
            {REVIEW_GRADES.map((g) => (
              <button
                key={g}
                disabled={busy}
                onClick={() => onGrade(g)}
                className={cn(
                  "rounded-lg px-2 py-2.5 text-sm font-semibold transition-opacity disabled:opacity-50",
                  GRADE_STYLES[g],
                )}
              >
                {t(`rate.${GRADE_KEY[g]}`)}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
