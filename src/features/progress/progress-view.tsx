"use client";

import { useLiveQuery } from "dexie-react-hooks";
import { useLocale, useTranslations } from "next-intl";
import { getStudyStats } from "./stats";
import { CEFR_LABELS } from "@/types/card";
import type { Locale } from "@/i18n/routing";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Flame, BookOpenCheck, Clock, Layers, Repeat } from "lucide-react";

export function ProgressView() {
  const t = useTranslations("progress");
  const locale = useLocale() as Locale;
  const stats = useLiveQuery(() => getStudyStats());

  if (!stats) return null;

  const hasActivity = stats.reviews > 0 || stats.learned > 0;
  const maxRecent = Math.max(1, ...stats.recent.map((d) => d.count));

  const tiles = [
    { icon: BookOpenCheck, label: t("learned"), value: stats.learned },
    { icon: Clock, label: t("due"), value: stats.due },
    { icon: Layers, label: t("total"), value: stats.totalCards },
    { icon: Repeat, label: t("reviews"), value: stats.reviews },
  ];

  return (
    <div className="flex flex-col gap-5">
      {/* 스트릭 */}
      <Card className="border-border/60 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/40 dark:to-amber-950/30">
        <CardContent className="flex items-center gap-4 p-5">
          <span className="grid h-14 w-14 place-items-center rounded-2xl bg-orange-100 dark:bg-orange-900/50">
            <Flame className="h-7 w-7 text-orange-500" />
          </span>
          <div>
            <p className="text-sm text-muted-foreground">{t("streakLabel")}</p>
            <p className="text-2xl font-bold">
              {stats.streak > 0 ? t("streakDays", { n: stats.streak }) : t("streakZero")}
            </p>
          </div>
        </CardContent>
      </Card>

      {/* 통계 타일 */}
      <div className="grid grid-cols-2 gap-3">
        {tiles.map(({ icon: Icon, label, value }) => (
          <Card key={label} className="border-border/60">
            <CardContent className="flex items-center gap-3 p-4">
              <Icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <div>
                <p className="text-xl font-bold tabular-nums">{value}</p>
                <p className="text-xs text-muted-foreground">{label}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* 레벨별 진도 */}
      <section className="flex flex-col gap-3">
        <h2 className="text-sm font-semibold text-muted-foreground">
          {t("byLevel")}
        </h2>
        <div className="flex flex-col gap-2.5">
          {stats.levels.map((lv) => (
            <div key={lv.level} className="flex items-center gap-3">
              <Badge variant="secondary" className="w-9 justify-center">
                {lv.level}
              </Badge>
              <span className="w-16 shrink-0 text-xs text-muted-foreground">
                {CEFR_LABELS[lv.level][locale === "ko" ? "ko" : "en"]}
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

      {/* 최근 7일 */}
      <section className="flex flex-col gap-3">
        <h2 className="text-sm font-semibold text-muted-foreground">
          {t("recent")}
        </h2>
        {hasActivity ? (
          <div className="flex items-end justify-between gap-2 rounded-xl border border-border/60 bg-card p-4">
            {stats.recent.map((d, i) => (
              <div key={i} className="flex flex-1 flex-col items-center gap-1.5">
                <span className="text-[10px] tabular-nums text-muted-foreground">
                  {d.count > 0 ? d.count : ""}
                </span>
                <div
                  className="w-full rounded-t bg-blue-500/80 transition-all"
                  style={{
                    height: `${Math.max(4, (d.count / maxRecent) * 64)}px`,
                  }}
                />
                <span className="text-[10px] text-muted-foreground">
                  {d.label}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <p className="rounded-xl border border-dashed border-border/60 p-6 text-center text-sm text-muted-foreground">
            {t("empty")}
          </p>
        )}
      </section>
    </div>
  );
}
