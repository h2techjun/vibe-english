"use client";

import { useEffect } from "react";
import { useTranslations } from "next-intl";
import { db } from "@/lib/db";
import { reportDue } from "@/lib/push";
import { computeDueReport } from "./due-report";
import { notificationPermission, showReviewNotification } from "./reminder";

/** epoch ms → 로컬 날짜 키 */
function dayKey(ms: number): string {
  const d = new Date(ms);
  return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
}

/**
 * 앱 진입 시 ① 앱 배지 갱신 ② 서버에 복습 상태 보고(푸시 예약) ③ 로컬 알림(하루 1회).
 *
 * 서버 푸시는 매시간 크론이 "보고된 다음 복습 시각"을 보고 보낸다 — 그래서 앱을 열 때마다
 * 최신 시각을 보고해야 한다(학습을 하면 due 가 뒤로 밀리므로).
 * (app) 레이아웃의 시드 완료 후 마운트된다.
 */
export function ReminderMount() {
  const t = useTranslations("settings");

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const nowMs = Date.now();
      const { dueCount, nextDueAt } = await computeDueReport(nowMs);
      if (cancelled) return;

      // 설치형 PWA 아이콘 배지 — 알림 설정과 무관하게 갱신 (지원 브라우저만)
      try {
        if (dueCount > 0) await navigator.setAppBadge?.(dueCount);
        else await navigator.clearAppBadge?.();
      } catch {
        // 미지원
      }

      const s = await db.settings.get("main");
      if (cancelled || !s?.notificationsEnabled) return;

      // 서버 푸시 예약 갱신 — 구독이 있을 때만 반영된다
      void reportDue({ nextDueAt, dueCount });

      if (notificationPermission() !== "granted") return;
      if (dueCount <= 0) return;
      const today = dayKey(nowMs);
      if (s.lastNotifiedDay === today) return; // 오늘 이미 로컬 알림

      await showReviewNotification(t("notifTitle"), t("notifBody", { n: dueCount }));
      await db.settings.update("main", { lastNotifiedDay: today });
    })();
    return () => {
      cancelled = true;
    };
  }, [t]);

  return null;
}
