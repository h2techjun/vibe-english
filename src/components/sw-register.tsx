"use client";

import { useEffect } from "react";

const BP = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/**
 * 서비스 워커 등록 — public/sw.js 를 basePath scope 로 등록한다.
 * (Workmate 의 /loopla 처럼 다른 앱과 오리진을 공유해도 scope 밖은 건드리지 않는다)
 * 오프라인 캐싱 + Android 알림(showNotification)의 전제 조건.
 */
export function SwRegister() {
  useEffect(() => {
    if (typeof window === "undefined" || !("serviceWorker" in navigator)) return;
    // dev 서버에서는 HMR 과 캐시가 충돌하므로 프로덕션에서만 등록
    if (process.env.NODE_ENV !== "production") return;
    navigator.serviceWorker
      .register(`${BP}/sw.js`, { scope: `${BP}/` })
      .catch((e) => console.warn("[SwRegister] 서비스 워커 등록 실패:", e));
  }, []);
  return null;
}
