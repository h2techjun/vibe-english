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
import { Progress } from "@/components/ui/progress";
import { GoalRing } from "./goal-ring";
import { cn } from "@/lib/utils";
import {
  Flame,
  Play,
  AlertTriangle,
  Layers,
  BookText,
  Repeat,
  ChevronRight,
  Sparkles,
} from "lucide-react";

/** 시간대 인사 키 — 아침(5~11)·낮(11~18)·저녁(그 외) */
function greetingKey(hour: number): "morning" | "afternoon" | "evening" {
  if (hour >= 5 && hour < 11) return "morning";
  if (hour >= 11 && hour < 18) return "afternoon";
  return "evening";
}

/**
 * 홈 — "오늘 할 일 하나"에 집중한다.
 * 순서: 인사 → 학습 시작 CTA(가장 크게) → 스트릭·목표 요약 → 바로가기 → 레벨 진도.
 * 통계 카드가 CTA 위에 있어 첫 화면에서 시작 버튼이 밀렸던 구조(2026-09-08 실측)를
 * Duolingo 식 "CTA 최우선"으로 뒤집었다.
 */
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
  const greet = greetingKey(new Date().getHours());

  return (
    <div className="flex flex-col gap-5">
      {/* 인사 */}
      <div>
        <h2 className="text-2xl font-black tracking-tight">
          {t(`greeting.${greet}`)}
        </h2>
        <p className="mt-0.5 text-sm text-muted-foreground">
          {reached ? t("greetingDone") : t("greetingSub")}
        </p>
      </div>

      {/* 오늘 학습 CTA — 화면에서 가장 큰 요소 */}
      {caughtUp ? (
        <Link
          href="/study?practice=1"
          prefetch={false}
          className="btn-arcade flex min-h-24 items-center gap-4 rounded-3xl bg-emerald-600 p-5 text-white transition-transform active:scale-[0.99] motion-reduce:transition-none"
        >
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white/20">
            <Repeat className="h-6 w-6" aria-hidden />
          </span>
          <span className="min-w-0 flex-1">
            <span className="block text-lg font-black leading-tight">
              {t("caughtUpTitle")}
            </span>
            <span className="mt-0.5 block text-sm opacity-90">
              {t("caughtUpSub")}
            </span>
          </span>
          <ChevronRight className="h-5 w-5 shrink-0 opacity-80" aria-hidden />
        </Link>
      ) : (
        <Link
          href="/study"
          prefetch={false}
          className="btn-arcade flex min-h-24 items-center gap-4 rounded-3xl bg-primary p-5 text-primary-foreground transition-transform active:scale-[0.99] motion-reduce:transition-none"
        >
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white/20">
            <Play className="h-6 w-6 fill-current" aria-hidden />
          </span>
          <span className="min-w-0 flex-1">
            <span className="block text-lg font-black leading-tight">
              {t("startCta")}
            </span>
            {queue !== undefined && (
              <span className="mt-0.5 block text-sm opacity-90">
                {t("startSub", { review, fresh })}
              </span>
            )}
          </span>
          <ChevronRight className="h-5 w-5 shrink-0 opacity-80" aria-hidden />
        </Link>
      )}

      {/* 스트릭 · 오늘 목표 — 한 줄 요약 */}
      <div className="grid grid-cols-2 gap-3">
        <div className="flex items-center gap-3 rounded-2xl border border-border/60 bg-card p-4">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-orange-500/15">
            <Flame
              className={cn(
                "h-6 w-6",
                stats.streak > 0 ? "text-orange-500" : "text-muted-foreground",
              )}
              aria-hidden
            />
          </span>
          <div className="min-w-0">
            <p className="text-xs text-muted-foreground">{tp("streakLabel")}</p>
            <p className="truncate text-lg font-black leading-tight">
              {stats.streak > 0
                ? tp("streakDays", { n: stats.streak })
                : tp("streakZero")}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 rounded-2xl border border-border/60 bg-card p-3">
          <GoalRing
            done={stats.today}
            goal={goal}
            reached={reached}
            size="sm"
            label={`${tp("todayGoal")} ${tp("goalProgress", { done: stats.today, goal })}`}
          />
          <div className="min-w-0">
            <p className="text-xs text-muted-foreground">{tp("todayGoal")}</p>
            <p className="text-lg font-black leading-tight tabular-nums">
              {stats.today}
              <span className="text-sm font-medium text-muted-foreground">
                {" "}
                / {goal}
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* 바로가기 — 약점 · 단어장 · 주제 */}
      <div className="flex flex-col gap-2">
        {stats.weak > 0 && (
          <QuickLink
            href="/study?weak=1"
            icon={<AlertTriangle className="h-5 w-5 text-amber-500" aria-hidden />}
            title={tp("weakFocus")}
            sub={tp("weakCount", { n: stats.weak })}
          />
        )}
        {vocabCount !== undefined && vocabCount > 0 && (
          <QuickLink
            href="/study?vocab=1"
            icon={<BookText className="h-5 w-5 text-sky-400" aria-hidden />}
            title={t("vocabTitle")}
            sub={t("vocabSub", { n: vocabCount })}
          />
        )}
        <QuickLink
          href="/decks"
          icon={<Layers className="h-5 w-5 text-violet-400" aria-hidden />}
          title={t("browseDecks")}
          sub={t("browseDecksSub")}
        />
      </div>

      {/* 레벨 진도 */}
      {stats.levels.length > 0 && (
        <section className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <h3 className="flex items-center gap-1.5 text-sm font-bold text-muted-foreground">
              <Sparkles className="h-4 w-4" aria-hidden />
              {t("levelProgress")}
            </h3>
            <Link
              href="/progress"
              prefetch={false}
              className="flex min-h-11 items-center gap-0.5 text-sm font-semibold text-primary"
            >
              {t("seeAll")}
              <ChevronRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
          <div className="flex flex-col gap-2.5 rounded-2xl border border-border/60 bg-card p-4">
            {stats.levels.map((lv) => (
              <div key={lv.level} className="flex items-center gap-3">
                <span
                  className={cn(
                    "grid h-7 w-7 shrink-0 place-items-center rounded-lg text-[11px] font-black",
                    LEVEL_TILE[lv.level],
                    currentLevel === lv.level &&
                      "ring-2 ring-primary ring-offset-2 ring-offset-card",
                  )}
                >
                  {lv.level}
                </span>
                <span className="w-14 shrink-0 text-xs text-muted-foreground">
                  {CEFR_LABELS[lv.level][locale]}
                </span>
                <Progress
                  value={lv.total > 0 ? (lv.learned / lv.total) * 100 : 0}
                  className="h-2"
                  aria-label={`${lv.level} ${lv.learned}/${lv.total}`}
                />
                <span className="w-14 shrink-0 text-right text-xs tabular-nums text-muted-foreground">
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

function QuickLink({
  href,
  icon,
  title,
  sub,
}: {
  href: string;
  icon: React.ReactNode;
  title: string;
  sub: string;
}) {
  return (
    <Link
      href={href}
      prefetch={false}
      className="flex min-h-14 items-center gap-3 rounded-2xl border border-border/60 bg-card px-4 py-3 transition-colors hover:border-primary/50 motion-reduce:transition-none"
    >
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-muted">
        {icon}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block font-bold leading-tight">{title}</span>
        <span className="block text-xs text-muted-foreground">{sub}</span>
      </span>
      <ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden />
    </Link>
  );
}
