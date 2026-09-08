"use client";

import { useEffect } from "react";
import { useLocale } from "next-intl";
import { useRouter } from "@/i18n/navigation";
import { db } from "@/lib/db";
import { courseForLocale, startLevelOf } from "@/lib/course";

/**
 * 랜딩에서 재방문자를 바로 홈으로 보낸다.
 * 온보딩(시작 레벨)을 마친 사용자가 매번 랜딩을 거쳐 "지금 시작하기"를
 * 눌러야 했던 마찰(2026-09-08 실측)을 없앤다. 정적 export 라 서버 리다이렉트가
 * 없으므로 클라이언트에서 IndexedDB 설정을 읽어 판단한다. 첫 방문자는 그대로.
 */
export function ReturningRedirect() {
  const locale = useLocale();
  const router = useRouter();

  useEffect(() => {
    let mounted = true;
    db.settings
      .get("main")
      .then((settings) => {
        if (!mounted) return;
        if (startLevelOf(settings, courseForLocale(locale))) {
          router.replace("/home");
        }
      })
      .catch(() => {
        // DB 접근 실패(프라이빗 모드 등) — 랜딩을 그대로 보여준다
      });
    return () => {
      mounted = false;
    };
  }, [locale, router]);

  return null;
}
