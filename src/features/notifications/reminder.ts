/**
 * 복습 알림 (로컬 Notification API).
 *
 * 한계: 외부 푸시 서버(Web Push + VAPID) 없이는 "앱이 완전히 닫힌 상태의
 * 백그라운드 푸시"는 불가능하다. 여기서는 외부 의존 없이 가능한 범위 —
 * 앱을 열거나 재방문했을 때 복습 대기 카드를 알리는 로컬 리마인더만 제공한다.
 */

/** Notification 지원 여부 */
export function notificationSupported(): boolean {
  return typeof window !== "undefined" && "Notification" in window;
}

/** 현재 권한 상태 */
export function notificationPermission(): NotificationPermission | "unsupported" {
  if (!notificationSupported()) return "unsupported";
  return Notification.permission;
}

/** 권한 요청 → 허용 여부 반환 */
export async function requestNotificationPermission(): Promise<boolean> {
  if (!notificationSupported()) return false;
  if (Notification.permission === "granted") return true;
  if (Notification.permission === "denied") return false;
  const result = await Notification.requestPermission();
  return result === "granted";
}

const BP = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/**
 * 복습 리마인더 알림 표시.
 * Android Chrome 은 `new Notification()` 을 금지(Illegal constructor)하고
 * ServiceWorkerRegistration.showNotification 만 허용한다 — 그래서 2026-09-09 이전엔
 * Android 에서 알림이 한 번도 뜨지 않았다(에러를 삼켰음). SW 가 있으면 그 경로를 먼저 쓴다.
 * 아이콘은 basePath(/loopla 등)를 붙여야 배포 경로에서 404 가 나지 않는다.
 */
export async function showReviewNotification(
  title: string,
  body: string,
): Promise<void> {
  if (!notificationSupported() || Notification.permission !== "granted") return;
  const options: NotificationOptions = {
    body,
    icon: `${BP}/icons/icon-192.png`,
    badge: `${BP}/icons/icon-192.png`,
    tag: "loopla-review",
    data: { url: `${BP}/` },
  };
  if ("serviceWorker" in navigator) {
    try {
      const reg = await navigator.serviceWorker.getRegistration(`${BP}/`);
      if (reg) {
        await reg.showNotification(title, options);
        return;
      }
    } catch {
      // SW 경로 실패 → 아래 생성자 폴백
    }
  }
  try {
    new Notification(title, options);
  } catch {
    // SW 없는 Android 등 — 표시 불가. 조용히 무시
  }
}
