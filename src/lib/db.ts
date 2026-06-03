/**
 * 로컬 전용 데이터베이스 (IndexedDB via Dexie).
 * 외부 서버 없이 브라우저에 학습 콘텐츠와 진도를 저장한다.
 *
 * 주의: 이 모듈은 클라이언트에서만 사용한다 (useLiveQuery / "use client" 컴포넌트).
 */
import Dexie, { type EntityTable } from "dexie";
import type { VocabCard, Deck } from "@/types/card";
import type { CardProgress, StudyLogEntry, AppSettings } from "@/types/srs";
import type { Dialogue } from "@/types/dialogue";

export class VibeEnglishDB extends Dexie {
  /** 학습 콘텐츠 (시드, 읽기 전용) */
  cards!: EntityTable<VocabCard, "id">;
  /** 덱(주제) 메타 */
  decks!: EntityTable<Deck, "id">;
  /** 대화 응답 카드 (시드, 읽기 전용) */
  dialogues!: EntityTable<Dialogue, "id">;
  /** 카드/대화별 FSRS 진도 (progress.cardId 에 dialogue id 도 공유) */
  progress!: EntityTable<CardProgress, "cardId">;
  /** 학습 기록 (통계/스트릭) */
  studyLog!: EntityTable<StudyLogEntry, "id">;
  /** 앱 설정 (단일 행) */
  settings!: EntityTable<AppSettings, "key">;

  constructor() {
    super("vibe-english");
    this.version(1).stores({
      // 인덱스: 쿼리에 쓰이는 필드만 선언
      cards: "id, level, deck, *tags",
      decks: "id, level, order",
      progress: "cardId, due, state",
      studyLog: "++id, cardId, reviewedAt",
      settings: "key",
    });
    // v2: 대화 응답 카드 테이블 추가
    this.version(2).stores({
      dialogues: "id, level, situation",
    });
  }
}

/**
 * 싱글턴 인스턴스.
 * SSR(Node)에서는 IndexedDB 가 없지만, Dexie 인스턴스 생성 자체는 안전하다
 * (실제 IndexedDB 접근은 쿼리 시점이며, 쿼리는 클라이언트에서만 발생).
 */
export const db = new VibeEnglishDB();
