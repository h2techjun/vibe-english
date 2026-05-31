import { redirect } from "next/navigation";
import { routing } from "@/i18n/routing";

// static export: 루트 진입 시 기본 로케일로 보낸다.
export default function RootPage() {
  redirect(`/${routing.defaultLocale}`);
}
