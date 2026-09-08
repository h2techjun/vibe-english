import { setRequestLocale } from "next-intl/server";
import { AppHeader } from "@/components/app-header";
import { BottomNav } from "@/components/bottom-nav";
import { SeedGate } from "@/components/seed-gate";
import { LevelGate } from "@/components/level-gate";
import { ReminderMount } from "@/features/notifications/reminder-mount";

/**
 * 앱 셸 — 게이트(시드·온보딩)가 헤더/탭바 **바깥**에 있다.
 * 온보딩 중에 탭바가 보이면 어느 탭을 눌러도 위저드만 다시 뜨는 막다른길이라
 * (2026-09-08 실측) 온보딩은 크롬 없이 전체화면으로 띄운다.
 * 학습 화면(/study)은 AppHeader/BottomNav 가 스스로 숨어 집중 모드가 된다.
 */
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
    <SeedGate>
      <LevelGate>
        <div className="flex min-h-dvh flex-col">
          <AppHeader />
          <main className="mx-auto flex w-full max-w-lg flex-1 flex-col px-4 py-4">
            <ReminderMount />
            {children}
          </main>
          <BottomNav />
        </div>
      </LevelGate>
    </SeedGate>
  );
}
