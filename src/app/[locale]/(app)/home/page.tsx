import { setRequestLocale } from "next-intl/server";
import { HomeDashboard } from "@/features/home/home-dashboard";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <HomeDashboard />;
}
