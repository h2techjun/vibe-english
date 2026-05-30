import { setRequestLocale } from "next-intl/server";

export default async function ProgressPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm text-muted-foreground">진도 & 통계 (추후 구현)</p>
    </div>
  );
}
