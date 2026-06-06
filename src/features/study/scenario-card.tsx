"use client";

import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import type { Scenario } from "@/types/scenario";
import type { ReviewGrade } from "@/types/srs";
import { Rating } from "@/types/srs";
import { REVIEW_GRADES } from "@/features/srs/scheduler";
import { learnText, meaningText } from "@/lib/card-view";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { RevealableMeaning } from "@/components/revealable-meaning";
import { useTts } from "./use-tts";
import { Volume2, Lightbulb } from "lucide-react";
import { cn } from "@/lib/utils";

type Part = { text: string } | { blank: number };
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
  scenario: Scenario;
  isNew: boolean;
  busy: boolean;
  onGrade: (grade: ReviewGrade) => void;
}

export function ScenarioCard({ scenario, isNew, busy, onGrade }: Props) {
  const t = useTranslations("study");
  const { speak, supported } = useTts();

  const [turnIndex, setTurnIndex] = useState(0);
  const [responses, setResponses] = useState<string[]>([]);
  const [finished, setFinished] = useState(false);
  const [selected, setSelected] = useState<(number | null)[]>(() =>
    scenario.turns[0].blanks.map(() => null),
  );

  const turn = scenario.turns[turnIndex];
  const parts = useMemo(() => parseTemplate(turn.template), [turn.template]);

  const allFilled = selected.every((s) => s !== null);
  const built = parts
    .map((p) => {
      if ("text" in p) return p.text;
      const opt = turn.blanks[p.blank]?.[selected[p.blank] ?? -1];
      return opt ? learnText(opt) : "____";
    })
    .join("");

  function pick(blankIdx: number, optIdx: number) {
    setSelected((prev) => {
      const next = [...prev];
      next[blankIdx] = next[blankIdx] === optIdx ? null : optIdx;
      return next;
    });
  }

  function nextTurn() {
    const newResponses = [...responses, built];
    setResponses(newResponses);
    if (turnIndex + 1 >= scenario.turns.length) {
      setFinished(true);
    } else {
      const ni = turnIndex + 1;
      setTurnIndex(ni);
      setSelected(scenario.turns[ni].blanks.map(() => null));
    }
  }

  return (
    <div className="flex flex-1 flex-col">
      <div className="mb-3 flex items-center gap-2">
        <Badge variant="secondary">{scenario.level}</Badge>
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
          {learnText(scenario.title)} ·
          <RevealableMeaning
            ko={meaningText(scenario.title)}
            className="text-xs"
          />
        </span>
      </div>

      <p className="mb-2 text-xs text-muted-foreground">
        {t("progress", {
          current: Math.min(turnIndex + 1, scenario.turns.length),
          total: scenario.turns.length,
        })}
      </p>

      {/* 누적 대화 (완료된 턴) */}
      <div className="flex flex-col gap-2">
        {responses.map((resp, i) => (
          <div key={i} className="flex flex-col gap-1">
            <div className="self-start rounded-2xl rounded-bl-sm bg-muted px-3 py-1.5 text-sm">
              {learnText(scenario.turns[i].prompt)}
            </div>
            <div className="self-end rounded-2xl rounded-br-sm bg-blue-600 px-3 py-1.5 text-sm text-white">
              {resp}
            </div>
          </div>
        ))}
      </div>

      {!finished ? (
        <div className="mt-2 flex flex-col gap-3">
          <div className="self-start rounded-2xl rounded-bl-sm border border-border/60 bg-muted/50 px-3 py-2">
            <div className="flex items-center gap-2">
              <p className="text-sm font-medium">{learnText(turn.prompt)}</p>
              <Button
                variant="outline"
                size="sm"
                className="ml-auto shrink-0 gap-1"
                disabled={!supported}
                onClick={() => speak(learnText(turn.prompt))}
              >
                <Volume2 className="h-3.5 w-3.5" />
                {t("listen")}
              </Button>
            </div>
            <RevealableMeaning ko={meaningText(turn.prompt)} className="text-xs" />
          </div>

          <p className="text-base leading-relaxed">
            {parts.map((p, i) => {
              if ("text" in p) return <span key={i}>{p.text}</span>;
              const opt = turn.blanks[p.blank]?.[selected[p.blank] ?? -1];
              return opt ? (
                <span
                  key={i}
                  className="font-semibold text-blue-600 dark:text-blue-400"
                >
                  {learnText(opt)}
                </span>
              ) : (
                <span
                  key={i}
                  className="mx-0.5 inline-block min-w-10 border-b-2 border-dashed border-blue-400 align-bottom"
                >
                  &nbsp;
                </span>
              );
            })}
          </p>

          <div className="flex flex-col gap-2">
            {turn.blanks.map((options, bi) => (
              <div key={bi} className="flex flex-wrap gap-2">
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
                      "flex cursor-pointer items-center gap-1.5 rounded-lg border px-3 py-1.5 text-sm transition-colors",
                      selected[bi] === oi
                        ? "border-blue-500 bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300"
                        : "border-border hover:border-blue-300",
                    )}
                  >
                    <span className="font-medium">{learnText(opt)}</span>
                    <RevealableMeaning
                      ko={meaningText(opt)}
                      className="text-[11px]"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className="flex justify-center pt-2">
            <Button disabled={!allFilled} onClick={nextTurn}>
              {turnIndex + 1 >= scenario.turns.length
                ? t("checkAnswer")
                : t("next")}
            </Button>
          </div>
        </div>
      ) : (
        <div className="mt-4 flex flex-col gap-4">
          <p className="text-center text-sm font-medium text-emerald-600">
            {t("listenCorrect")}
          </p>

          {/* 표현 노트 — 모든 턴 선택지의 뉘앙스 */}
          {scenario.turns.some((tn) =>
            tn.blanks.some((opts) => opts.some((o) => o.note)),
          ) && (
            <div className="rounded-lg bg-amber-50 p-3 dark:bg-amber-950/30">
              <p className="flex items-center gap-1.5 text-xs font-medium text-amber-700 dark:text-amber-400">
                <Lightbulb className="h-3.5 w-3.5" />
                {t("expressionNotes")}
              </p>
              <div className="mt-2 flex flex-col gap-1.5">
                {scenario.turns.flatMap((tn, ti) =>
                  tn.blanks.flatMap((opts, bi) =>
                    opts
                      .filter((o) => o.note)
                      .map((o, oi) => (
                        <div
                          key={`${ti}-${bi}-${oi}`}
                          className="flex items-baseline gap-2"
                        >
                          <span className="shrink-0 text-sm font-medium text-blue-600 dark:text-blue-400">
                            {learnText(o)}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {o.note}
                          </span>
                        </div>
                      )),
                  ),
                )}
              </div>
            </div>
          )}

          <div className="grid grid-cols-4 gap-2">
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
        </div>
      )}
    </div>
  );
}
