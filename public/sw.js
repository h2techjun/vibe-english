/* Loopla 서비스 워커 — 정적 export(GitHub Pages/Workmate public) 호환 수제 SW.
 * serwist 는 route handler 가 필요해 2026-05 정적화 때 제거됐고, 그 뒤 SW 가 아예 없어
 * (1) 오프라인이 안 되고 (2) Android Chrome 에서 복습 알림이 절대 뜨지 않았다
 *     (new Notification() 은 Android 에서 SW 의 showNotification 만 허용).
 * 역할: 같은 오리진·같은 scope 의 페이지/정적 자산 런타임 캐싱 + 알림 클릭 시 앱 포커스.
 * 외부 네트워크 호출 없음. 버전을 올리면 activate 에서 옛 캐시를 지운다. */
const VERSION = "loopla-sw-v1";
const PAGE_CACHE = `${VERSION}-pages`;
const ASSET_CACHE = `${VERSION}-assets`;

self.addEventListener("install", (event) => {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            // 옛 버전 + 2026-05 정적화 전 serwist 잔재 캐시까지 정리
            .filter((k) => (k.startsWith("loopla-sw-") || k.startsWith("serwist-")) && !k.startsWith(VERSION))
            .map((k) => caches.delete(k)),
        ),
      )
      .then(() => self.clients.claim()),
  );
});

/** scope 안의 요청만 다룬다 (Workmate 처럼 다른 앱과 오리진을 공유하는 배치 대비) */
function inScope(url) {
  return url.origin === self.location.origin && url.pathname.startsWith(self.registration.scope.replace(self.location.origin, ""));
}

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (!inScope(url)) return;

  // 페이지 내비게이션: 네트워크 우선, 실패(오프라인) 시 캐시
  if (req.mode === "navigate") {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(PAGE_CACHE).then((c) => c.put(req, copy));
          return res;
        })
        .catch(() => caches.match(req).then((hit) => hit || caches.match(req, { ignoreSearch: true }))),
    );
    return;
  }

  // 해시 붙은 정적 자산(_next/static)·아이콘·manifest: 캐시 우선
  const isAsset =
    url.pathname.includes("/_next/static/") ||
    /\.(png|svg|ico|json|woff2?|css|js)$/.test(url.pathname);
  if (isAsset) {
    event.respondWith(
      caches.match(req).then(
        (hit) =>
          hit ||
          fetch(req).then((res) => {
            if (res.ok) {
              const copy = res.clone();
              caches.open(ASSET_CACHE).then((c) => c.put(req, copy));
            }
            return res;
          }),
      ),
    );
  }
});

// 알림 클릭 → 이미 열린 앱 탭이 있으면 포커스, 없으면 scope 루트 열기
self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  const target = event.notification.data && event.notification.data.url
    ? event.notification.data.url
    : self.registration.scope;
  event.waitUntil(
    self.clients.matchAll({ type: "window", includeUncontrolled: true }).then((list) => {
      for (const client of list) {
        if (client.url.startsWith(self.registration.scope) && "focus" in client) {
          client.navigate(target);
          return client.focus();
        }
      }
      return self.clients.openWindow(target);
    }),
  );
});
