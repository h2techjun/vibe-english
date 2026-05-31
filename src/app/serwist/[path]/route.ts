import { createSerwistRoute } from "@serwist/turbopack";

// Turbopack 호환 서비스 워커 빌드/서빙 라우트.
// /serwist/sw.js 로 서비스 워커를 제공한다 (SerwistProvider 가 등록).
export const { dynamic, dynamicParams, revalidate, generateStaticParams, GET } =
  createSerwistRoute({
    swSrc: "src/app/sw.ts",
    useNativeEsbuild: true,
  });
