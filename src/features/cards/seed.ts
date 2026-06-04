/**
 * 시드 로더 — 번들 콘텐츠를 IndexedDB 에 적재한다.
 * 외부 네트워크 호출 없이 빌드에 포함된 JSON/TS 데이터만 사용.
 */
import { db } from "@/lib/db";
import { DEFAULT_SETTINGS } from "@/types/srs";
import { ALL_CARDS, ALL_DECKS, SEED_VERSION } from "./data";
import { ALL_DIALOGUES } from "./data/dialogues";
import { ALL_SCENARIOS } from "./data/scenarios";

/**
 * 콘텐츠가 최신 버전으로 적재되어 있는지 보장한다.
 * - 최초 실행: cards/decks 적재 + 기본 설정 생성
 * - SEED_VERSION 상승: cards/decks 만 갱신 (progress 보존)
 * - 이미 최신: 아무것도 하지 않음
 */
export async function ensureSeeded(): Promise<void> {
  const settings = await db.settings.get("main");
  if (settings && settings.seedVersion >= SEED_VERSION) return;

    await db.transaction(
    "rw",
    [db.cards, db.decks, db.dialogues, db.scenarios, db.settings],
    async () => {
      // 콘텐츠는 통째로 교체 (id 안정 → progress 는 별도 테이블이라 보존됨)
      await db.cards.clear();
      await db.decks.clear();
      await db.dialogues.clear();
      await db.scenarios.clear();
      await db.cards.bulkPut(ALL_CARDS);
      await db.decks.bulkPut(ALL_DECKS);
      await db.dialogues.bulkPut(ALL_DIALOGUES);
      await db.scenarios.bulkPut(ALL_SCENARIOS);

      if (settings) {
        await db.settings.update("main", { seedVersion: SEED_VERSION });
      } else {
        await db.settings.put({
          ...DEFAULT_SETTINGS,
          seedVersion: SEED_VERSION,
        });
      }
    },
  );
}

/** 앱 설정을 가져온다 (없으면 기본값 생성 후 반환) */
export async function getSettings() {
  const existing = await db.settings.get("main");
  if (existing) return existing;
  const created = { ...DEFAULT_SETTINGS, seedVersion: SEED_VERSION };
  await db.settings.put(created);
  return created;
}
