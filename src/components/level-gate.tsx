"use client";

import { useLiveQuery } from "dexie-react-hooks";
import { db } from "@/lib/db";
import { startLevelOf, useCourse } from "@/lib/course";
import { LevelOnboarding } from "@/features/onboarding/level-onboarding";

/**
 * 현재 코스의 시작 레벨이 설정될 때까지 온보딩 레벨 선택을 띄운다.
 * (코스별 실력이 다르므로 en/ko 코스 각각 처음 진입 시 한 번씩 묻는다)
 * SeedGate(시드 완료) 이후에 마운트된다.
 */
export function LevelGate({ children }: { children: React.ReactNode }) {
  const { course } = useCourse();
  const settings = useLiveQuery(() => db.settings.get("main"));

  // 로딩 중 (settings 조회 전)
  if (settings === undefined) return null;

  // 현재 코스의 시작 레벨 미설정 → 온보딩
  if (!startLevelOf(settings, course)) return <LevelOnboarding />;

  return <>{children}</>;
}
