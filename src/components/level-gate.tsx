"use client";

import { useLiveQuery } from "dexie-react-hooks";
import { db } from "@/lib/db";
import { LevelOnboarding } from "@/features/onboarding/level-onboarding";

/**
 * 시작 레벨이 설정될 때까지 온보딩 레벨 선택을 띄운다.
 * SeedGate(시드 완료) 이후에 마운트된다.
 */
export function LevelGate({ children }: { children: React.ReactNode }) {
  const settings = useLiveQuery(() => db.settings.get("main"));

  // 로딩 중 (settings 조회 전)
  if (settings === undefined) return null;

  // 시작 레벨 미설정 → 온보딩
  if (!settings.startLevel) return <LevelOnboarding />;

  return <>{children}</>;
}
