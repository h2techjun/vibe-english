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

/** 복습 리마인더 알림 표시 */
export function showReviewNotification(title: string, body: string): void {
  if (!notificationSupported() || Notification.permission !== "granted") return;
  try {
    new Notification(title, {
      body,
      icon: "/icons/icon-192.png",
      badge: "/icons/icon-192.png",
      tag: "vibe-english-review",
    });
  } catch {
    // 일부 브라우저는 SW 없이 Notification 생성자 사용을 제한 — 조용히 무시
  }
}
