"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { ensureSeeded } from "@/features/cards/seed";
import { Loader2 } from "lucide-react";

/**
 * 앱 진입 시 번들 콘텐츠가 IndexedDB 에 적재되었는지 보장한다.
 * 시드 완료 전까지 로딩 표시.
 */
export function SeedGate({ children }: { children: React.ReactNode }) {
  const t = useTranslations("study");
  const [ready, setReady] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    let mounted = true;
    ensureSeeded()
      .then(() => mounted && setReady(true))
      .catch((e) => {
        console.error("[SeedGate] 시드 적재 실패:", e);
        if (mounted) setError(true);
      });
    return () => {
      mounted = false;
    };
  }, []);

  if (error) {
    return (
      <div className="flex flex-1 items-center justify-center p-8 text-center text-sm text-destructive">
        {t("loadError")}
      </div>
    );
  }

  if (!ready) {
    return (
      <div className="flex flex-1 flex-col items-center justify-center gap-3 p-8 text-muted-foreground">
        <Loader2 className="h-6 w-6 animate-spin" />
        <p className="text-sm">{t("loading")}</p>
      </div>
    );
  }

  return <>{children}</>;
}
