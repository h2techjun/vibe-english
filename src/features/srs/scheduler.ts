/**
 * FSRS 스케줄러 (순수 로직, DB 비의존 → 테스트 가능).
 * ts-fsrs 5.x 래퍼.
 */
import {
  fsrs,
  generatorParameters,
  createEmptyCard,
  Rating,
  type Grade,
} from "ts-fsrs";
import type { CardProgress, ReviewGrade } from "@/types/srs";
import { toCardProgress, toFsrsCard } from "@/types/srs";

/** 한국어 학습자용 기본 파라미터. 짧은 학습 스텝 + 약간의 fuzz 로 몰림 방지. */
const scheduler = fsrs(
  generatorParameters({
    enable_fuzz: true,
    enable_short_term: true,
  }),
);

/** UI 평가 4등급 */
export const REVIEW_GRADES: ReviewGrade[] = [
  Rating.Again,
  Rating.Hard,
  Rating.Good,
  Rating.Easy,
];

/**
 * 카드 한 장을 평가하여 다음 진도를 계산한다.
 * @param progress 기존 진도 (없으면 신규 카드로 시작)
 * @param grade 사용자 평가
 * @param now 현재 시각
 */
export function gradeCard(
  cardId: string,
  progress: CardProgress | undefined,
  grade: ReviewGrade,
  now: Date,
): { progress: CardProgress; prevState: CardProgress["state"] } {
  const fsrsCard = progress ? toFsrsCard(progress) : createEmptyCard(now);
  const prevState = fsrsCard.state;
  const { card } = scheduler.next(fsrsCard, now, grade as Grade);
  return { progress: toCardProgress(cardId, card), prevState };
}

/**
 * 각 등급을 선택했을 때의 "다음 복습까지 남는 시간(분)" 미리보기.
 * UI 평가 버튼에 "10분 / 1일" 같은 라벨을 붙이는 데 쓴다.
 */
export function previewIntervalsMin(
  progress: CardProgress | undefined,
  now: Date,
): Record<ReviewGrade, number> {
  const fsrsCard = progress ? toFsrsCard(progress) : createEmptyCard(now);
  const preview = scheduler.repeat(fsrsCard, now);
  const minutesUntil = (due: Date) =>
    Math.max(1, Math.round((due.getTime() - now.getTime()) / 60000));

  return {
    [Rating.Again]: minutesUntil(preview[Rating.Again].card.due),
    [Rating.Hard]: minutesUntil(preview[Rating.Hard].card.due),
    [Rating.Good]: minutesUntil(preview[Rating.Good].card.due),
    [Rating.Easy]: minutesUntil(preview[Rating.Easy].card.due),
  };
}
