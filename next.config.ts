import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

// GitHub Pages 정적 호스팅을 위한 static export.
// - 서버 기능(미들웨어, route handler) 미사용 → 완전 정적
// - 데이터는 IndexedDB(클라이언트), 서버 로직 없음
// - basePath: 프로젝트 사이트(user.github.io/repo) 배포 시 빌드에서 주입
//   예: NEXT_PUBLIC_BASE_PATH=/vibe-english npm run build
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  // GitHub Pages 호환: 각 라우트를 디렉토리/index.html 로 생성
  trailingSlash: true,
  images: { unoptimized: true },
  reactStrictMode: true,
  // 정적 자산 경로에 basePath 노출 (manifest/아이콘 등 클라이언트 참조용)
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default withNextIntl(nextConfig);
