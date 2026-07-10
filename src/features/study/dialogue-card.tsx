"use client";

import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import type { Dialogue, BlankOption } from "@/types/dialogue";
import type { ReviewGrade } from "@/types/srs";
import { Rating } from "@/types/srs";
import { REVIEW_GRADES } from "@/features/srs/scheduler";
import { learnText, meaningText, noteText } from "@/lib/card-view";
import { useCourse } from "@/lib/course";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { RevealableMeaning } from "@/components/revealable-meaning";
import { useTts } from "./use-tts";
import { Volume2, MessageSquareQuote, Lightbulb } from "lucide-react";
import { cn } from "@/lib/utils";

type Part = { text: string } | { blank: number };

/** "I'm {0}, thank you." -> [{text}, {blank:0}, {text}] */
function parseTemplate(template: string): Part[] {
  const parts: Part[] = [];
  let last = 0;
  for (const m of template.matchAll(/\{(\d+)\}/g)) {
    const idx = m.index ?? 0;
    if (idx > last) parts.push({ text: template.slice(last, idx) });
    parts.push({ blank: Number(m[1]) });
    last = idx + m[0].length;
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
  const { course, src } = useCourse();
  const parts = useMemo(
    () => parseTemplate(dialogue.template),
    [dialogue.template],
  );

  const [selected, setSelected] = useState<(number | null)[]>(() =>
    dialogue.blanks.map(() => null),
  );
  const [completed, setCompleted] = useState(false);

  const allFilled = selected.every((s) => s !== null);
  const sentence = parts
    .map((p) => {
      if ("text" in p) return p.text;
      const opt = dialogue.blanks[p.blank]?.[selected[p.blank] ?? -1];
      return opt ? learnText(opt, course) : "____";
    })
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
          {learnText(dialogue.context, course)} ·
          <RevealableMeaning
            ko={meaningText(dialogue.context, course, src)}
            className="text-xs"
          />
        </span>
      </div>

      {/* 상대 말 */}
      <div className="rounded-2xl rounded-bl-sm border border-border/60 bg-muted/50 p-4">
        <div className="flex items-start justify-between gap-2">
          <p className="text-lg font-semibold leading-relaxed">
            {learnText(dialogue.prompt, course)}
          </p>
          <Button
            variant="outline"
            size="sm"
            className="shrink-0 gap-1"
            disabled={!supported}
            onClick={() => speak(learnText(dialogue.prompt, course))}
          >
            <Volume2 className="h-4 w-4" />
            {t("listen")}
          </Button>
        </div>
        <div className="mt-1 text-sm">
          <RevealableMeaning
            ko={meaningText(dialogue.prompt, course, src)}
            className="text-sm"
          />
        </div>
      </div>

      {/* 내 응답 (빈칸 문장) */}
      <p className="mt-4 text-xs font-medium text-muted-foreground">
        {t("dialoguePrompt")}
      </p>
      <p className="mt-1 text-lg leading-relaxed">
        {parts.map((p, i) => {
          if ("text" in p) return <span key={i}>{p.text}</span>;
          const opt = dialogue.blanks[p.blank]?.[selected[p.blank] ?? -1];
          return opt ? (
            <span
              key={i}
              className="font-semibold text-violet-600 dark:text-violet-400"
            >
              {learnText(opt, course)}
            </span>
          ) : (
            <span
              key={i}
              className="mx-0.5 inline-block min-w-12 border-b-2 border-dashed border-violet-400 align-bottom text-violet-400"
            >
              &nbsp;
            </span>
          );
        })}
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
                          ? "border-violet-500 bg-violet-50 text-violet-700 dark:bg-violet-950 dark:text-violet-300"
                          : "border-border hover:border-violet-300",
                      )}
                    >
                      <span className="font-medium">{learnText(opt, course)}</span>
                      {selected[bi] === oi && (
                        <span className="text-[11px] text-muted-foreground">
                          {meaningText(opt, course, src)}
                        </span>
                      )}
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
          <div className="mt-4 flex items-center gap-2 rounded-xl border border-emerald-500 bg-emerald-50 p-3 dark:bg-emerald-950/40">
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

          {/* 표현 노트 — 빈칸 선택지들의 뉘앙스(언제·어떤 느낌) */}
          {dialogue.blanks.some((opts) => opts.some((o) => o.note)) && (
            <div className="mt-4 rounded-lg bg-amber-50 p-3 dark:bg-amber-950/30">
              <p className="flex items-center gap-1.5 text-xs font-medium text-amber-700 dark:text-amber-400">
                <Lightbulb className="h-3.5 w-3.5" />
                {t("expressionNotes")}
              </p>
              <div className="mt-2 flex flex-col gap-1.5">
                {dialogue.blanks.flatMap((opts, bi) =>
                  opts
                    .filter((o) => o.note)
                    .map((o, oi) => (
                      <div
                        key={`${bi}-${oi}`}
                        className="flex items-baseline gap-2"
                      >
                        <span className="shrink-0 text-sm font-medium text-blue-600 dark:text-blue-400">
                          {learnText(o, course)}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {noteText(o, src)}
                        </span>
                      </div>
                    )),
                )}
              </div>
            </div>
          )}

          {/* 모범답안 + 대체 표현 */}
          <div className="mt-4">
            <p className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
              <MessageSquareQuote className="h-3.5 w-3.5" />
              {t("dialogueComplete")}
            </p>
            <ul className="mt-2 flex flex-col gap-2">
              {([dialogue.example, ...dialogue.alternatives] as BlankOption[]).map(
                (alt, i) => (
                  <li
                    key={i}
                    className="rounded-lg border border-border/60 p-2.5 text-sm"
                  >
                    <div className="flex items-center gap-1.5">
                      <span>{learnText(alt, course)}</span>
                      <Button
                        variant="ghost"
                        size="icon-xs"
                        disabled={!supported}
                        onClick={() => speak(learnText(alt, course))}
                        aria-label={t("listen")}
                      >
                        <Volume2 className="h-3.5 w-3.5" />
                      </Button>
                    </div>
                    <RevealableMeaning
                      ko={meaningText(alt, course, src)}
                      className="text-xs"
                      revealedClassName="text-muted-foreground"
                    />
                    {noteText(alt, src) && (
                      <p className="mt-0.5 text-[11px] text-muted-foreground/80">
                        {noteText(alt, src)}
                      </p>
                    )}
                  </li>
                ),
              )}
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
