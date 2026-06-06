/**
 * 시드 로더 — 번들 콘텐츠를 IndexedDB 에 적재한다.
 * 외부 네트워크 호출 없이 빌드에 포함된 TS 데이터만 사용.
 *
 * 빌드 타깃(영어 학습 / 한국어 학습)에 따라 콘텐츠 세트를 분기한다.
 * dynamic import 라서 빌드마다 해당 콘텐츠만 청크로 로드된다.
 */
import { db } from "@/lib/db";
import { DEFAULT_SETTINGS } from "@/types/srs";
import type { VocabCard, Deck } from "@/types/card";
import type { Dialogue } from "@/types/dialogue";
import type { Scenario } from "@/types/scenario";

const IS_KOREAN = process.env.NEXT_PUBLIC_APP_TARGET === "korean";

interface SeedContent {
  cards: VocabCard[];
  decks: Deck[];
  dialogues: Dialogue[];
  scenarios: Scenario[];
  version: number;
}

/** 빌드 타깃에 맞는 콘텐츠 세트를 로드한다. */
async function loadContent(): Promise<SeedContent> {
  if (IS_KOREAN) {
    const [c, d, s] = await Promise.all([
      import("./data-ko"),
      import("./data-ko/dialogues"),
      import("./data-ko/scenarios"),
    ]);
    return {
      cards: c.ALL_CARDS_KO,
      decks: c.ALL_DECKS_KO,
      dialogues: d.ALL_DIALOGUES_KO,
      scenarios: s.ALL_SCENARIOS_KO,
      version: c.SEED_VERSION_KO,
    };
  }
  const [c, d, s] = await Promise.all([
    import("./data"),
    import("./data/dialogues"),
    import("./data/scenarios"),
  ]);
  return {
    cards: c.ALL_CARDS,
    decks: c.ALL_DECKS,
    dialogues: d.ALL_DIALOGUES,
    scenarios: s.ALL_SCENARIOS,
    version: c.SEED_VERSION,
  };
}

/**
 * 콘텐츠가 최신 버전으로 적재되어 있는지 보장한다.
 * - 최초 실행: cards/decks 적재 + 기본 설정 생성
 * - 콘텐츠 버전 상승: cards/decks 만 갱신 (progress 보존)
 * - 이미 최신: 아무것도 하지 않음
 */
export async function ensureSeeded(): Promise<void> {
  const content = await loadContent();
  const settings = await db.settings.get("main");
  if (settings && settings.seedVersion >= content.version) return;

  await db.transaction(
    "rw",
    [db.cards, db.decks, db.dialogues, db.scenarios, db.settings],
    async () => {
      // 콘텐츠는 통째로 교체 (id 안정 → progress 는 별도 테이블이라 보존됨)
      await db.cards.clear();
      await db.decks.clear();
      await db.dialogues.clear();
      await db.scenarios.clear();
      await db.cards.bulkPut(content.cards);
      await db.decks.bulkPut(content.decks);
      await db.dialogues.bulkPut(content.dialogues);
      await db.scenarios.bulkPut(content.scenarios);

      if (settings) {
        await db.settings.update("main", { seedVersion: content.version });
      } else {
        await db.settings.put({
          ...DEFAULT_SETTINGS,
          seedVersion: content.version,
        });
      }
    },
  );
}

/** 앱 설정을 가져온다 (없으면 기본값 생성 후 반환) */
export async function getSettings() {
  const existing = await db.settings.get("main");
  if (existing) return existing;
  // seedVersion 0 → 이후 ensureSeeded 가 실제 콘텐츠 버전으로 적재
  const created = { ...DEFAULT_SETTINGS, seedVersion: 0 };
  await db.settings.put(created);
  return created;
}
