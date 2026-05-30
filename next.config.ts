import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

// PWA 서비스 워커(오프라인 캐싱 + 푸시 알림)는 Phase 6 에서 활성화한다.
// Next.js 16 + Turbopack 은 현재 @serwist/next(webpack 기반)와 호환되지 않아
// (serwist GitHub #54), Phase 6 에서 @serwist/turbopack 으로 전환 예정.
// 지금은 manifest.json 기반 "설치형 PWA"(홈 화면 추가)만 제공한다.
// 서비스 워커 소스는 src/app/sw.ts 에 보존되어 있다.

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  reactStrictMode: true,
};

export default withNextIntl(nextConfig);
