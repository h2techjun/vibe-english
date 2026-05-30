import { setRequestLocale } from "next-intl/server";
import { StudySession } from "@/features/study/study-session";

export default async function StudyPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ deck?: string }>;
}) {
  const { locale } = await params;
  const { deck } = await searchParams;
  setRequestLocale(locale);

  return <StudySession deckId={deck} />;
}
