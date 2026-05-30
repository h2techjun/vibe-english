import { setRequestLocale } from "next-intl/server";
import { AppHeader } from "@/components/app-header";
import { BottomNav } from "@/components/bottom-nav";
import { SeedGate } from "@/components/seed-gate";

export default async function AppShellLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="flex min-h-dvh flex-col">
      <AppHeader />
      <main className="mx-auto flex w-full max-w-lg flex-1 flex-col px-4 py-5">
        <SeedGate>{children}</SeedGate>
      </main>
      <BottomNav />
    </div>
  );
}
