import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // serwist(서비스 워커 라우트), api, 정적 파일, 확장자 있는 경로는 로케일 리다이렉트 제외
  matcher:
    "/((?!api|trpc|_next|_vercel|serwist|sw\\.js|manifest\\.json|icons|.*\\..*).*)",
};
