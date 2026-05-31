"use client";

import { useLiveQuery } from "dexie-react-hooks";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { db } from "@/lib/db";
import { getDeckStats } from "@/features/srs/repository";
import { CEFR_LABELS, type CefrLevel } from "@/types/card";
import type { Locale } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import {
  Hand,
  UserRound,
  Hash,
  Clock,
  UtensilsCrossed,
  ShoppingBag,
  MapPin,
  MessageCircle,
  Smile,
  HelpCircle,
  Layers,
  type LucideIcon,
} from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  Hand,
  UserRound,
  Hash,
  Clock,
  UtensilsCrossed,
  ShoppingBag,
  MapPin,
  MessageCircle,
  Smile,
  HelpCircle,
};

export function DecksList() {
  const t = useTranslations("decks");
  const locale = useLocale() as Locale;

  const decks = useLiveQuery(() => db.decks.orderBy("order").toArray());
  const stats = useLiveQuery(() => getDeckStats());

  if (!decks) return null;

  // 레벨별 그룹핑 (레벨 순서 유지)
  const byLevel = new Map<CefrLevel, typeof decks>();
  for (const d of decks) {
    const arr = byLevel.get(d.level) ?? [];
    arr.push(d);
    byLevel.set(d.level, arr);
  }

  return (
    <div className="flex flex-col gap-6">
      {[...byLevel.entries()].map(([level, levelDecks]) => (
        <section key={level} className="flex flex-col gap-3">
          <div className="flex items-baseline gap-2">
            <Badge variant="secondary">{level}</Badge>
            <h2 className="text-sm font-semibold text-muted-foreground">
              {CEFR_LABELS[level][locale === "ko" ? "ko" : "en"]}
            </h2>
          </div>

          <div className="grid gap-3">
            {levelDecks.map((deck) => {
              const Icon = deck.icon ? (ICONS[deck.icon] ?? Layers) : Layers;
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
                          {deck.title[locale === "ko" ? "ko" : "en"]}
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
                        {deck.description[locale === "ko" ? "ko" : "en"]}
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
                      render={<Link href={`/study?deck=${deck.id}`} prefetch={false} />}
                    >
                      {t("study")}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}
