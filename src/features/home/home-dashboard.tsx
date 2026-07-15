"use client";

import { useLiveQuery } from "dexie-react-hooks";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { db } from "@/lib/db";
import { startLevelOf, useCourse } from "@/lib/course";
import { getStudyStats } from "@/features/progress/stats";
import { buildStudyQueue } from "@/features/srs/repository";
import { CEFR_LABELS, isVocabDeck } from "@/types/card";
import { LEVEL_TILE } from "@/features/onboarding/onboarding-config";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { GoalRing } from "./goal-ring";
import { cn } from "@/lib/utils";
import {
  Flame,
  PartyPopper,
  Play,
  AlertTriangle,
  Layers,
  BarChart3,
  BookText,
  Repeat,
} from "lucide-react";

export function HomeDashboard() {
  const t = useTranslations("home");
  const tp = useTranslations("progress");
  const locale = useLocale() as Locale;
  const { course } = useCourse();
  const stats = useLiveQuery(() => getStudyStats(course), [course]);
  const settings = useLiveQuery(() => db.settings.get("main"));
  const queue = useLiveQuery(
    () => buildStudyQueue(new Date(), undefined, course),
    [course],
  );
  // 현재 코스의 단어장(vocab-*) 카드 수 — 단어장 진입 CTA 노출 판단
  const vocabCount = useLiveQuery(
    () =>
      db.cards
        .where("course")
        .equals(course)
        .toArray()
        .then((cards) => cards.filter((c) => isVocabDeck(c.deck)).length),
    [course],
  );

  if (!stats) return null;

  const goal = settings?.dailyGoal ?? 20;
  const reached = stats.today >= goal;
  const currentLevel = startLevelOf(settings, course);
  const review = queue?.reviewCount ?? 0;
  const fresh = queue?.newCount ?? 0;
  const caughtUp = queue !== undefined && review + fresh === 0;

  return (
    <div className="flex flex-col gap-4">
      {/* 스트릭 히어로 */}
      <Card className="border-border/60 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/40 dark:to-amber-950/30">
        <CardContent className="flex items-center gap-4 p-5">
          <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-orange-100 dark:bg-orange-900/50">
            <Flame className="h-7 w-7 text-orange-500" />
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-sm text-muted-foreground">{tp("streakLabel")}</p>
            <p className="text-2xl font-bold">
              {stats.streak > 0
                ? tp("streakDays", { n: stats.streak })
                : tp("streakZero")}
            </p>
          </div>
          {stats.streak >= 7 && (
            <span className="text-3xl" title={tp("badge")}>
              {stats.streak >= 100 ? "👑" : stats.streak >= 30 ? "⭐" : "🔥"}
            </span>
          )}
        </CardContent>
      </Card>

      {/* 오늘 목표 링 */}
      <Card className="border-border/60">
        <CardContent className="flex items-center gap-5 p-5">
          <GoalRing done={stats.today} goal={goal} reached={reached} />
          <div className="min-w-0 flex-1">
            <p className="text-sm font-semibold">{tp("todayGoal")}</p>
            <p className="mt-1 text-sm text-muted-foreground">
              {reached
                ? tp("goalDone")
                : tp("goalProgress", { done: stats.today, goal })}
            </p>
          </div>
        </CardContent>
      </Card>

      {/* 다음 할 일 CTA */}
      {caughtUp ? (
        <Card className="border-emerald-300/60 bg-emerald-50/60 dark:border-emerald-800/60 dark:bg-emerald-950/30">
          <CardContent className="flex flex-col items-center gap-3 p-6 text-center">
            <PartyPopper className="h-9 w-9 text-emerald-500" />
            <div>
              <p className="font-bold">{t("caughtUpTitle")}</p>
              <p className="mt-0.5 text-sm text-muted-foreground">
                {t("caughtUpSub")}
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              <Button
                className="gap-1.5"
                nativeButton={false}
                render={<Link href="/study?practice=1" prefetch={false} />}
              >
                <Repeat className="h-4 w-4" />
                {t("practice")}
              </Button>
              <Button
                variant="outline"
                className="gap-1.5"
                nativeButton={false}
                render={<Link href="/decks" prefetch={false} />}
              >
                <Layers className="h-4 w-4" />
                {t("browseDecks")}
              </Button>
            </div>
          </CardContent>
        </Card>
      ) : (
        <Button
          size="lg"
          className="h-auto flex-col items-start gap-0.5 py-4 font-bold"
          nativeButton={false}
          render={<Link href="/study" prefetch={false} />}
        >
          <span className="flex items-center gap-2 text-base">
            <Play className="h-4 w-4 fill-current" />
            {t("startCta")}
          </span>
          {queue !== undefined && (
            <span className="pl-6 text-xs font-medium opacity-90">
              {t("startSub", { review, fresh })}
            </span>
          )}
        </Button>
      )}

      {/* 약점 집중 */}
      {stats.weak > 0 && (
        <Button
          variant="outline"
          nativeButton={false}
          className="justify-start gap-2 border-amber-300 text-amber-700 dark:border-amber-700 dark:text-amber-300"
          render={<Link href="/study?weak=1" prefetch={false} />}
        >
          <AlertTriangle className="h-4 w-4" />
          {tp("weakFocus")} · {tp("weakCount", { n: stats.weak })}
        </Button>
      )}

      {/* 단어장 진입 — 기본 학습 큐(회화)에서 빠진 단어 덱을 노출 */}
      {vocabCount !== undefined && vocabCount > 0 && (
        <Button
          variant="outline"
          nativeButton={false}
          className="justify-start gap-2"
          render={<Link href="/study?vocab=1" prefetch={false} />}
        >
          <BookText className="h-4 w-4" />
          {t("vocabTitle")} · {t("vocabSub", { n: vocabCount })}
        </Button>
      )}

      {/* 레벨 진도 시각화 */}
      {stats.levels.length > 0 && (
        <section className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-semibold text-muted-foreground">
              {t("levelProgress")}
            </h2>
            <Link
              href="/progress"
              prefetch={false}
              className="flex items-center gap-1 text-xs font-medium text-blue-600 dark:text-blue-400"
            >
              <BarChart3 className="h-3.5 w-3.5" />
              {tp("byLevel")}
            </Link>
          </div>
          <div className="flex flex-col gap-2.5">
            {stats.levels.map((lv) => (
              <div key={lv.level} className="flex items-center gap-3">
                <span
                  className={cn(
                    "grid h-7 w-7 shrink-0 place-items-center rounded-lg text-[11px] font-black",
                    LEVEL_TILE[lv.level],
                    currentLevel === lv.level &&
                      "ring-2 ring-offset-1 ring-blue-400 ring-offset-background",
                  )}
                >
                  {lv.level}
                </span>
                <span className="w-16 shrink-0 text-xs text-muted-foreground">
                  {CEFR_LABELS[lv.level][locale]}
                </span>
                <Progress
                  value={lv.total > 0 ? (lv.learned / lv.total) * 100 : 0}
                  className="h-2"
                />
                <span className="w-12 shrink-0 text-right text-xs tabular-nums text-muted-foreground">
                  {lv.learned}/{lv.total}
                </span>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
