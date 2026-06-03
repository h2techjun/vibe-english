/**
 * SRS(간격 반복) 학습 상태 타입.
 * ts-fsrs 의 Card 를 IndexedDB 에 저장하기 위해 Date → number(ms) 로 직렬화한 형태.
 */
import type { Card as FsrsCard } from "ts-fsrs";
import { Rating, State } from "ts-fsrs";
import type { CefrLevel } from "./card";

export { Rating, State };

/** UI 평가 등급 (Manual 제외) */
export type ReviewGrade = Rating.Again | Rating.Hard | Rating.Good | Rating.Easy;

/**
 * 카드별 학습 진도 (IndexedDB 저장 형태).
 * ts-fsrs Card 의 Date 필드를 number(epoch ms) 로 보관한다.
 */
export interface CardProgress {
  /** VocabCard.id 참조 (primary key) */
  cardId: string;
  due: number;
  stability: number;
  difficulty: number;
  elapsed_days: number;
  scheduled_days: number;
  learning_steps: number;
  reps: number;
  lapses: number;
  /** ts-fsrs State (0=New,1=Learning,2=Review,3=Relearning) */
  state: State;
  last_review?: number;
}

/** 학습 1회 기록 (통계/스트릭용) */
export interface StudyLogEntry {
  /** auto-increment */
  id?: number;
  cardId: string;
  rating: Rating;
  /** 복습 시각 (epoch ms) */
  reviewedAt: number;
  /** 평가 직전 상태 */
  prevState: State;
}

/** 앱 설정 (단일 행, key='main') */
export interface AppSettings {
  key: "main";
  /** 하루 신규 카드 한도 */
  dailyNewLimit: number;
  /** 하루 복습 카드 한도 (0 = 무제한) */
  dailyReviewLimit: number;
  /** 적재된 시드 콘텐츠 버전 */
  seedVersion: number;
  /** TTS 재생 속도 (1.0 = 보통) */
  ttsRate: number;
  /** 선택된 TTS 보이스 이름 (선택) */
  ttsVoice?: string;
  /** 복습 알림 사용 여부 */
  notificationsEnabled?: boolean;
  /** 마지막으로 알림을 보낸 날짜 키 (하루 1회 제한용) */
  lastNotifiedDay?: string;
  /** 사용자가 선택한 시작 레벨. 미설정(undefined)이면 온보딩 레벨 선택을 띄운다. */
  startLevel?: CefrLevel;
}

export const DEFAULT_SETTINGS: AppSettings = {
  key: "main",
  dailyNewLimit: 15,
  dailyReviewLimit: 0,
  seedVersion: 0,
  ttsRate: 0.95,
  notificationsEnabled: false,
};

/** ts-fsrs Card → 저장용 CardProgress 변환 */
export function toCardProgress(cardId: string, card: FsrsCard): CardProgress {
  return {
    cardId,
    due: card.due.getTime(),
    stability: card.stability,
    difficulty: card.difficulty,
    elapsed_days: card.elapsed_days,
    scheduled_days: card.scheduled_days,
    learning_steps: card.learning_steps,
    reps: card.reps,
    lapses: card.lapses,
    state: card.state,
    last_review: card.last_review?.getTime(),
  };
}

/** 저장용 CardProgress → ts-fsrs Card 변환 */
export function toFsrsCard(p: CardProgress): FsrsCard {
  return {
    due: new Date(p.due),
    stability: p.stability,
    difficulty: p.difficulty,
    elapsed_days: p.elapsed_days,
    scheduled_days: p.scheduled_days,
    learning_steps: p.learning_steps,
    reps: p.reps,
    lapses: p.lapses,
    state: p.state,
    last_review: p.last_review ? new Date(p.last_review) : undefined,
  };
}
