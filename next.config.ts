import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import { withSerwist } from "@serwist/turbopack";

// PWA 서비스 워커: @serwist/turbopack (Next.js 16 Turbopack 호환).
// /serwist/sw.js 로 서비스 워커를 서빙 (app/serwist/[path]/route.ts).
// 서비스 워커 소스: src/app/sw.ts

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  reactStrictMode: true,
};

export default withSerwist(withNextIntl(nextConfig));
