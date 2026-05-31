import { Suspense } from "react";
import { setRequestLocale } from "next-intl/server";
import { StudySession } from "@/features/study/study-session";

export default async function StudyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  // deck 파라미터는 StudySession 이 클라이언트에서 읽는다 (static export 호환)
  return (
    <Suspense>
      <StudySession />
    </Suspense>
  );
}
