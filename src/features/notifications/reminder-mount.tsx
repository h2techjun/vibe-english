"use client";

import { useEffect } from "react";
import { useTranslations } from "next-intl";
import { db } from "@/lib/db";
import { notificationPermission, showReviewNotification } from "./reminder";

/** epoch ms → 로컬 날짜 키 */
function dayKey(ms: number): string {
  const d = new Date(ms);
  return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
}

/**
 * 앱 진입 시 복습 대기 카드가 있으면 하루 1회 로컬 알림.
 * (app) 레이아웃의 시드 완료 후 마운트된다.
 */
export function ReminderMount() {
  const t = useTranslations("settings");

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const s = await db.settings.get("main");
      if (cancelled || !s?.notificationsEnabled) return;
      if (notificationPermission() !== "granted") return;

      const nowMs = Date.now();
      const today = dayKey(nowMs);
      if (s.lastNotifiedDay === today) return; // 오늘 이미 알림

      const due = await db.progress.where("due").belowOrEqual(nowMs).count();
      if (cancelled || due <= 0) return;

      showReviewNotification(t("notifTitle"), t("notifBody", { n: due }));
      await db.settings.update("main", { lastNotifiedDay: today });
    })();
    return () => {
      cancelled = true;
    };
  }, [t]);

  return null;
}
