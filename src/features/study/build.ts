/**
 * 조립형 학습(build) 유닛 분해/뱅크 유틸 — 순수 함수, 부수효과 없음.
 *
 * 카드의 학습 대상 term 을 "유닛"(ko=음절, en=글자 또는 단어) 배열로 쪼개고,
 * 오답 유닛을 섞어 넣은 뱅크를 만든다. 코스에 따라 분기:
 *  - ko 코스(학습 대상=card.ko): 한글 음절 단위.
 *  - en 코스(학습 대상=card.en): 공백 없는 짧은 단어(≤8자)는 글자 단위,
 *    그 외(여러 단어/긴 표현)는 단어 단위.
 */
import { toSyllables, isHangulSyllable, choseongHint } from "@/lib/hangul";
import type { VocabCard, Course } from "@/types/card";

/** Fisher-Yates 셔플. cloze.ts 에 동일 패턴이 있지만 비공개라 로컬로 재구현. */
function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** 유닛 비교용 정규화. en 은 대소문자 무시, ko 음절은 대소문자 개념이 없어 그대로. */
function normalizeUnit(unit: string, course: Course): string {
  return course === "en" ? unit.toLowerCase() : unit;
}

/**
 * term 을 조립 유닛 배열로 분해한다.
 * - ko: 완성형 한글 음절만 남긴다 (공백·물음표·틸드(~) 등 구두점은 한글 음절이
 *   아니므로 자동 제외된다).
 * - en: 공백이 없고 8자 이하인 짧은 단어는 글자 단위(`Array.from`), 그 외(여러
 *   단어로 이루어졌거나 긴 표현)는 단어 단위(공백 분리).
 */
export function splitUnits(term: string, course: Course): string[] {
  if (course === "ko") {
    return toSyllables(term).filter(isHangulSyllable);
  }
  const trimmed = term.trim();
  if (!/\s/.test(trimmed) && trimmed.length <= 8) {
    return Array.from(trimmed);
  }
  return trimmed.split(/\s+/).filter(Boolean);
}

/** 전체 카드의 학습대상 term 을 분해해 오답 후보 유닛 풀을 만든다 (중복 제거). */
export function buildUnitPool(cards: VocabCard[], course: Course): string[] {
  const set = new Set<string>();
  for (const card of cards) {
    const term = course === "ko" ? card.ko : card.en;
    if (!term) continue;
    for (const unit of splitUnits(term, course)) {
      set.add(unit);
    }
  }
  return [...set];
}

/** 뱅크 크기 하한/상한 — 정답 유닛이 적으면 오답으로 채우고, 많으면 그대로 둔다. */
const MIN_BANK = 5;
const MAX_BANK = 8;

/**
 * 오답 유닛 후보가 정답과 "같은 결"인지 판별한다.
 * en 코스는 pool 이 여러 카드에서 나온 유닛을 섞어 담는데, 짧은 단어(글자 단위 분해)와
 * 여러 단어 표현(단어 단위 분해)이 같은 배열에 공존한다. 글자 조립 문제에 통짜 단어가,
 * 단어 조립 문제에 낱글자가 오답으로 섞이면 뱅크가 시각적으로 깨지므로 길이로 결을 맞춘다
 * (단일 글자 정답 ↔ 1글자 후보만, 단어 정답 ↔ 2글자 이상 후보만). ko 코스는 음절이 항상
 * 1글자라 전부 같은 결이므로 필터가 사실상 no-op.
 */
function sameGrain(unit: string, answerUnits: string[]): boolean {
  const letterMode = answerUnits.every((u) => u.length === 1);
  return letterMode ? unit.length === 1 : unit.length > 1;
}

/**
 * 정답 유닛 전체 + 오답 유닛(pool 에서 정답과 안 겹치고 결이 같은 것 중 랜덤 N개)을 섞는다.
 * N 은 전체 뱅크가 5~8개가 되도록 정답 길이 기준으로 계산한다
 * (정답 유닛이 이미 5개 이상이면 오답을 추가하지 않는다).
 */
export function buildBank(
  answerUnits: string[],
  pool: string[],
  course: Course,
): string[] {
  const targetTotal = Math.min(
    MAX_BANK,
    Math.max(MIN_BANK, answerUnits.length),
  );
  const distractorCount = Math.max(0, targetTotal - answerUnits.length);

  const seen = new Set(answerUnits.map((u) => normalizeUnit(u, course)));
  const distractors: string[] = [];
  for (const unit of shuffle(pool)) {
    if (!sameGrain(unit, answerUnits)) continue;
    const key = normalizeUnit(unit, course);
    if (!key || seen.has(key)) continue;
    seen.add(key);
    distractors.push(unit);
    if (distractors.length >= distractorCount) break;
  }

  return shuffle([...answerUnits, ...distractors]);
}

/**
 * 챌린지 패널 초기 힌트.
 * - ko: 초성 힌트 (예: "사과" → "ㅅㄱ").
 * - en: 첫 글자 대문자 (예: "book" → "B"). term 에서 첫 글자를 못 얻으면 발음
 *   (pron)으로 폴백.
 */
export function initialHint(
  term: string,
  course: Course,
  pron?: string,
): string {
  if (course === "ko") return choseongHint(term);
  const first = term.trim().charAt(0);
  return first ? first.toUpperCase() : (pron ?? "");
}
