/**
 * 복습 푸시 구독 — 앱을 닫아도 매일 저녁 8시(KST) 알림이 오게 한다.
 *
 * 서버는 Workmate(workmate.tools/api/loopla/push) — Neon DB 에 endpoint·키·로케일만 저장.
 * 학습 데이터는 여전히 브라우저(IndexedDB)에만 있다. 옵트인(설정 토글)일 때만 호출.
 * 전제: 서비스 워커(public/sw.js) 등록 — dev 서버에선 등록하지 않으므로 'unsupported'.
 * iOS 는 홈 화면에 추가한 PWA 에서만 PushManager 가 존재한다(Safari 16.4+).
 */

const BP = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const API = "https://workmate.tools/api/loopla/push/subscribe";
/** VAPID 공개키 — 공개 값. 비공개키는 Workmate Vercel env 에만 있다. */
export const VAPID_PUBLIC_KEY =
  "BEmmM6yQb4KkK_Vgi1TvI6z4cjDv_OxMZJtS_W-LGclFVbBLAjHSasj6L5mPIqzEk8FqEBE56_tucKcbFSe3iAw";

export type PushOutcome = "subscribed" | "unsupported" | "denied" | "failed";

export function pushSupported(): boolean {
  return (
    typeof window !== "undefined" &&
    "serviceWorker" in navigator &&
    "PushManager" in window &&
    "Notification" in window
  );
}

function urlBase64ToUint8Array(base64: string): Uint8Array<ArrayBuffer> {
  const padding = "=".repeat((4 - (base64.length % 4)) % 4);
  const b64 = (base64 + padding).replace(/-/g, "+").replace(/_/g, "/");
  const raw = atob(b64);
  // TS 5.7+: applicationServerKey 는 ArrayBuffer 기반이어야 해 SharedArrayBuffer 가능성을 제거한다
  const out = new Uint8Array(new ArrayBuffer(raw.length));
  for (let i = 0; i < raw.length; i += 1) out[i] = raw.charCodeAt(i);
  return out;
}

async function getRegistration(): Promise<ServiceWorkerRegistration | undefined> {
  const reg = await navigator.serviceWorker.getRegistration(`${BP}/`);
  if (!reg) return undefined;
  // 방금 등록됐으면 active 될 때까지 (pushManager.subscribe 는 active 워커가 필요)
  if (!reg.active) await navigator.serviceWorker.ready;
  return reg;
}

/** 구독 생성 + 서버 등록. 권한은 호출 전에 받아 둔다(설정 토글 → requestPermission). */
export async function subscribePush(locale: string): Promise<PushOutcome> {
  if (!pushSupported()) return "unsupported";
  if (Notification.permission !== "granted") return "denied";
  try {
    const reg = await getRegistration();
    if (!reg) return "unsupported";
    const existing = await reg.pushManager.getSubscription();
    const sub =
      existing ??
      (await reg.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(VAPID_PUBLIC_KEY),
      }));
    const res = await fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ subscription: sub.toJSON(), locale }),
    });
    return res.ok ? "subscribed" : "failed";
  } catch {
    return "failed";
  }
}

/** 서버 행 삭제(최선) + 브라우저 구독 해제 */
export async function unsubscribePush(): Promise<void> {
  if (!pushSupported()) return;
  try {
    const reg = await navigator.serviceWorker.getRegistration(`${BP}/`);
    const sub = await reg?.pushManager.getSubscription();
    if (!sub) return;
    await fetch(API, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ endpoint: sub.endpoint }),
    }).catch(() => undefined);
    await sub.unsubscribe();
  } catch {
    // 해제 실패는 조용히 — 서버 크론이 410 을 받으면 스스로 지운다
  }
}
