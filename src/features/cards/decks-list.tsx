"use client";

import { useState } from "react";
import { useLiveQuery } from "dexie-react-hooks";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { db } from "@/lib/db";
import { getDeckStats } from "@/features/srs/repository";
import { CEFR_LABELS, CEFR_LEVELS, isVocabDeck, type CefrLevel } from "@/types/card";
import { useCourse } from "@/lib/course";
import type { Locale } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import * as LucideIcons from "lucide-react";
import { Layers, BookText, type LucideIcon } from "lucide-react";

type DeckView = "conversation" | "vocab";

/** deck.icon 문자열을 lucide 컴포넌트로 (단어 덱은 BookText 통일) */
function iconFor(deckId: string, iconName?: string): LucideIcon {
  if (isVocabDeck(deckId)) return BookText;
  if (iconName) {
    const found = (LucideIcons as Record<string, unknown>)[iconName];
    if (found) return found as LucideIcon;
  }
  return Layers;
}

/** 로케일에 맞는 표시 텍스트 (zh 미번역 시 en 폴백) */
function pickText(
  t: { ko: string; en: string; zh?: string },
  locale: Locale,
): string {
  if (locale === "ko") return t.ko;
  if (locale === "zh") return t.zh ?? t.en;
  return t.en;
}

export function DecksList() {
  const t = useTranslations("decks");
  const locale = useLocale() as Locale;
  const { course } = useCourse();
  const [view, setView] = useState<DeckView>("conversation");

  const decks = useLiveQuery(
    () => db.decks.where("course").equals(course).sortBy("order"),
    [course],
  );
  const stats = useLiveQuery(() => getDeckStats(course), [course]);

  if (!decks) return null;

  // 회화/단어 필터 (ko 코스는 단어 덱이 없어 토글 숨김 → 회화 고정)
  const effectiveView = course === "ko" ? "conversation" : view;
  const visible = decks.filter((d) =>
    effectiveView === "vocab" ? isVocabDeck(d.id) : !isVocabDeck(d.id),
  );

  // 레벨별 그룹핑
  const byLevel = new Map<CefrLevel, typeof decks>();
  for (const d of visible) {
    const arr = byLevel.get(d.level) ?? [];
    arr.push(d);
    byLevel.set(d.level, arr);
  }

  return (
    <div className="flex flex-col gap-5">
      {/* 회화/단어 토글 (en 코스 전용 — ko 코스는 단어 덱 없음) */}
      {course === "en" && (
        <div className="flex gap-1 rounded-lg bg-muted p-1 text-sm">
          {(["conversation", "vocab"] as const).map((v) => (
            <button
              key={v}
              onClick={() => setView(v)}
              className={cn(
                "flex-1 rounded-md py-1.5 font-medium transition-colors",
                view === v
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {t(v)}
            </button>
          ))}
        </div>
      )}

      {CEFR_LEVELS.filter((l) => byLevel.has(l)).map((level) => {
        const levelDecks = byLevel.get(level)!;
        return (
        <section key={level} className="flex flex-col gap-3">
          <div className="flex items-baseline gap-2">
            <Badge variant="secondary">{level}</Badge>
            <h2 className="text-sm font-semibold text-muted-foreground">
              {CEFR_LABELS[level][locale]}
            </h2>
          </div>

          <div className="grid gap-3">
            {levelDecks.map((deck) => {
              const Icon = iconFor(deck.id, deck.icon);
              const s = stats?.get(deck.id) ?? { total: 0, learned: 0, due: 0 };
              const pct = s.total > 0 ? (s.learned / s.total) * 100 : 0;

              return (
                <Card key={deck.id} className="border-border/60">
                  <CardContent className="flex items-center gap-4 p-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-950 dark:text-blue-400">
                      <Icon className="h-5 w-5" />
                    </span>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="truncate font-semibold">
                          {pickText(deck.title, locale)}
                        </h3>
                        {s.due > 0 && (
                          <Badge
                            variant="outline"
                            className="border-amber-300 text-amber-600 dark:border-amber-700 dark:text-amber-400"
                          >
                            {t("dueLabel", { n: s.due })}
                          </Badge>
                        )}
                      </div>
                      <p className="truncate text-xs text-muted-foreground">
                        {pickText(deck.description, locale)}
                      </p>
                      <div className="mt-2 flex items-center gap-2">
                        <Progress value={pct} className="h-1.5" />
                        <span className="shrink-0 text-[10px] tabular-nums text-muted-foreground">
                          {t("progressLabel", {
                            learned: s.learned,
                            total: s.total,
                          })}
                        </span>
                      </div>
                    </div>

                    <Button
                      size="sm"
                      className="shrink-0"
                      nativeButton={false}
                      render={
                        <Link href={`/study?deck=${deck.id}`} prefetch={false} />
                      }
                    >
                      {t("study")}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>
        );
      })}
    </div>
  );
}
