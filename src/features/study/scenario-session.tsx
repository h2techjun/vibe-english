"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import type { Scenario } from "@/types/scenario";
import type { CardProgress, ReviewGrade } from "@/types/srs";
import { Button } from "@/components/ui/button";
import { Loader2, PartyPopper, Coffee } from "lucide-react";
import {
  buildScenarioQueue,
  getProgressMap,
  applyGrade,
} from "@/features/srs/repository";
import { ScenarioCard } from "./scenario-card";

type Status = "loading" | "studying" | "empty" | "done";

export function ScenarioSession() {
  const t = useTranslations("study");
  const [status, setStatus] = useState<Status>("loading");
  const [queue, setQueue] = useState<Scenario[]>([]);
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
      const [q, pm] = await Promise.all([
        buildScenarioQueue(new Date()),
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
      <div className="flex flex-1 flex-col items-center justify-center gap-4 text-center">
        <Coffee className="h-10 w-10 text-muted-foreground" />
        <p className="max-w-xs text-sm text-muted-foreground">{t("emptyDesc")}</p>
      </div>
    );
  }
  if (status === "done") {
    return (
      <div className="flex flex-1 flex-col items-center justify-center gap-4 text-center">
        <PartyPopper className="h-10 w-10 text-blue-600" />
        <h2 className="text-xl font-bold">{t("doneTitle")}</h2>
        <p className="max-w-xs text-sm text-muted-foreground">
          {t("doneDesc", { count: studied })}
        </p>
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
      </div>
    );
  }

  return (
    current && (
      <ScenarioCard
        key={current.id}
        scenario={current}
        isNew={isNew}
        busy={busy}
        onGrade={handleGrade}
      />
    )
  );
}
