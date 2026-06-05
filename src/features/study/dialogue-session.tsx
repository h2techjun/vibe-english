"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import type { Dialogue } from "@/types/dialogue";
import type { CardProgress, ReviewGrade } from "@/types/srs";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Loader2, PartyPopper, Coffee } from "lucide-react";
import {
  buildDialogueQueue,
  getProgressMap,
  applyGrade,
} from "@/features/srs/repository";
import { DialogueCard } from "./dialogue-card";

type Status = "loading" | "studying" | "empty" | "done";

export function DialogueSession() {
  const t = useTranslations("study");
  const [status, setStatus] = useState<Status>("loading");
  const [queue, setQueue] = useState<Dialogue[]>([]);
  const [progressMap, setProgressMap] = useState<Map<string, CardProgress>>(
    new Map(),
  );
  const [index, setIndex] = useState(0);
  const [studied, setStudied] = useState(0);
  const [busy, setBusy] = useState(false);
  const [reloadKey, setReloadKey] = useState(0);

  useEffect(() => {
    let mounted = true;
    setIndex(0);
    setStudied(0);
    setStatus("loading");
    (async () => {
      const now = new Date();
      const [q, pm] = await Promise.all([
        buildDialogueQueue(now),
        getProgressMap(),
      ]);
      if (!mounted) return;
      setQueue(q);
      setProgressMap(pm);
      setStatus(q.length === 0 ? "empty" : "studying");
    })();
    return () => {
      mounted = false;
    };
  }, [reloadKey]);

  const current = queue[index];
  const isNew = current ? !progressMap.has(current.id) : false;

  async function handleGrade(grade: ReviewGrade) {
    if (!current || busy) return;
    setBusy(true);
    try {
      await applyGrade(current.id, grade);
      const next = index + 1;
      setStudied((s) => s + 1);
      if (next >= queue.length) setStatus("done");
      else setIndex(next);
    } finally {
      setBusy(false);
    }
  }

  if (status === "loading") {
    return (
      <div className="flex flex-1 flex-col items-center justify-center gap-3 text-muted-foreground">
        <Loader2 className="h-6 w-6 animate-spin" />
        <p className="text-sm">{t("loading")}</p>
      </div>
    );
  }

  if (status === "empty") {
    return (
      <Centered
        icon={<Coffee className="h-10 w-10 text-muted-foreground" />}
        title={t("emptyTitle")}
        desc={t("emptyDesc")}
      >
        <Button nativeButton={false} render={<Link href="/decks" prefetch={false} />}>
          {t("goDecks")}
        </Button>
      </Centered>
    );
  }

  if (status === "done") {
    return (
      <Centered
        icon={<PartyPopper className="h-10 w-10 text-blue-600" />}
        title={t("doneTitle")}
        desc={t("doneDesc", { count: studied })}
      >
        <div className="flex gap-2">
          <Button onClick={() => setReloadKey((k) => k + 1)}>
            {t("studyAgain")}
          </Button>
          <Button
            variant="outline"
            nativeButton={false}
            render={<Link href="/" prefetch={false} />}
          >
            {t("backHome")}
          </Button>
        </div>
      </Centered>
    );
  }

  return (
    <div className="flex flex-1 flex-col">
      <div className="mb-3 flex items-center gap-3">
        <Progress value={(index / queue.length) * 100} className="h-2" />
        <span className="shrink-0 text-xs tabular-nums text-muted-foreground">
          {t("progress", { current: index + 1, total: queue.length })}
        </span>
      </div>
      {current && (
        <DialogueCard
          key={current.id}
          dialogue={current}
          isNew={isNew}
          busy={busy}
          onGrade={handleGrade}
        />
      )}
    </div>
  );
}

function Centered({
  icon,
  title,
  desc,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4 text-center">
      {icon}
      <div className="space-y-1">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="max-w-xs text-sm text-muted-foreground">{desc}</p>
      </div>
      {children}
    </div>
  );
}
