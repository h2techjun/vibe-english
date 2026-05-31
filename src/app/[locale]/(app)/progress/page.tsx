import { setRequestLocale } from "next-intl/server";
import { ProgressView } from "@/features/progress/progress-view";

export default async function ProgressPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <ProgressView />;
}
