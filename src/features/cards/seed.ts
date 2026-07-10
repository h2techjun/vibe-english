/**
 * 시드 로더 — 번들 콘텐츠를 IndexedDB 에 적재한다.
 * 외부 네트워크 호출 없이 빌드에 포함된 TS 데이터만 사용.
 *
 * 두 코스(en=영어 학습, ko=한국어 학습)의 콘텐츠를 **모두** 적재하고
 * course 필드로 태깅한다. 학습 방향은 런타임(로케일)에서 결정되므로
 * 빌드 분기가 없다. ko 코스 덱 id 는 en 코스와의 충돌을 막기 위해
 * "ko:" prefix 를 붙인다 (카드의 deck 참조도 함께).
 */
import { db } from "@/lib/db";
import { DEFAULT_SETTINGS } from "@/types/srs";
import { KO_DECK_PREFIX } from "@/lib/course";
import type { VocabCard, Deck } from "@/types/card";
import type { Dialogue } from "@/types/dialogue";
import type { Scenario } from "@/types/scenario";

/**
 * 통합 콘텐츠 버전 — 어느 코스든 콘텐츠 수정 시 +1.
 * (구 영어 빌드 SEED_VERSION 11 을 승계해 12부터 시작 — 기존 사용자 재적재 보장)
 * 13: ko 코스 단어장 파일럿(vocab-a1, #47) 추가.
 * 14: ko 코스 단어장 a2~c2 확대(vocab-a2~c2, 각 30단어 = 총 180).
 */
const SEED_VERSION = 14;

interface SeedContent {
  cards: VocabCard[];
  decks: Deck[];
  dialogues: Dialogue[];
  scenarios: Scenario[];
  version: number;
}

/** 두 코스 콘텐츠를 course 태그와 함께 통합 로드한다. */
async function loadContent(): Promise<SeedContent> {
  const [en, enDlg, enScn, ko, koDlg, koScn] = await Promise.all([
    import("./data"),
    import("./data/dialogues"),
    import("./data/scenarios"),
    import("./data-ko"),
    import("./data-ko/dialogues"),
    import("./data-ko/scenarios"),
  ]);

  const cards: VocabCard[] = [
    ...en.ALL_CARDS.map((c) => ({ ...c, course: "en" as const })),
    ...ko.ALL_CARDS_KO.map((c) => ({
      ...c,
      course: "ko" as const,
      deck: KO_DECK_PREFIX + c.deck,
    })),
  ];
  const decks: Deck[] = [
    ...en.ALL_DECKS.map((d) => ({ ...d, course: "en" as const })),
    ...ko.ALL_DECKS_KO.map((d) => ({
      ...d,
      course: "ko" as const,
      id: KO_DECK_PREFIX + d.id,
    })),
  ];
  const dialogues: Dialogue[] = [
    ...enDlg.ALL_DIALOGUES.map((d) => ({ ...d, course: "en" as const })),
    ...koDlg.ALL_DIALOGUES_KO.map((d) => ({ ...d, course: "ko" as const })),
  ];
  const scenarios: Scenario[] = [
    ...enScn.ALL_SCENARIOS.map((s) => ({ ...s, course: "en" as const })),
    ...koScn.ALL_SCENARIOS_KO.map((s) => ({ ...s, course: "ko" as const })),
  ];

  return { cards, decks, dialogues, scenarios, version: SEED_VERSION };
}

/**
 * 콘텐츠가 최신 버전으로 적재되어 있는지 보장한다.
 * - 최초 실행: cards/decks 적재 + 기본 설정 생성
 * - 콘텐츠 버전 상승: cards/decks 만 갱신 (progress 보존)
 * - 이미 최신: 아무것도 하지 않음
 */
export async function ensureSeeded(): Promise<void> {
  const settings = await db.settings.get("main");
  if (settings && settings.seedVersion >= SEED_VERSION) return;

  const content = await loadContent();

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
