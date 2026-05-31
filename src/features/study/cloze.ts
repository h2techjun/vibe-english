/**
 * 빈칸 채우기(cloze) 유틸 — 순수 함수.
 * 예문에서 핵심 단어 1개를 빈칸으로 만들고 4지선다 보기를 생성한다.
 * 스펠링 입력 없이 "단어 고르기"만으로 학습 (사용자 요구).
 */
import type { VocabCard } from "@/types/card";

/** 빈칸 대상에서 제외할 기능어 */
const STOPWORDS = new Set([
  "i",
  "im",
  "a",
  "an",
  "the",
  "is",
  "are",
  "am",
  "was",
  "were",
  "to",
  "you",
  "your",
  "me",
  "my",
  "we",
  "it",
  "this",
  "that",
  "these",
  "those",
  "of",
  "do",
  "does",
  "did",
  "can",
  "could",
  "would",
  "will",
  "shall",
  "should",
  "may",
  "might",
  "must",
  "please",
  "and",
  "or",
  "but",
  "so",
  "at",
  "in",
  "on",
  "for",
  "be",
  "have",
  "has",
  "had",
  "get",
  "got",
  "with",
  "from",
  "by",
  "as",
  "if",
  "not",
  "no",
  "yes",
  "he",
  "she",
  "they",
  "his",
  "her",
  "our",
  "their",
  "there",
  "here",
  "what",
  "who",
  "how",
  "when",
  "where",
  "why",
  "too",
  "very",
  "just",
  "now",
  "then",
  "out",
  "up",
  "down",
  "off",
]);

const BLANK = "_____";

function normalize(word: string): string {
  return word.toLowerCase().replace(/[^a-z']/g, "");
}

export interface ClozeQuestion {
  /** 빈칸이 들어간 예문 */
  masked: string;
  /** 정답 단어 (원형, 대소문자 유지) */
  answer: string;
}

/**
 * 카드의 예문에서 빈칸 문제를 만든다.
 * card.en 의 핵심 단어와 겹치는 단어를 우선 빈칸 처리한다.
 * 적절한 후보가 없으면 null (호출부에서 플래시카드로 폴백).
 */
export function buildCloze(card: VocabCard): ClozeQuestion | null {
  const sentence = card.exampleEn;
  const rawWords = sentence.split(/\s+/);

  const enWords = new Set(
    card.en.split(/\s+/).map(normalize).filter(Boolean),
  );

  // 후보: 3자 이상, 기능어 아님
  const candidates = rawWords.filter((w) => {
    const n = normalize(w);
    return n.length >= 3 && !STOPWORDS.has(n);
  });
  if (candidates.length === 0) return null;

  // card.en 표현과 겹치는 단어 우선, 없으면 가장 긴 단어
  const overlap = candidates.filter((w) => enWords.has(normalize(w)));
  const pool = overlap.length > 0 ? overlap : candidates;
  const answerRaw = pool.reduce((a, b) =>
    normalize(b).length > normalize(a).length ? b : a,
  );

  // 정답 단어에서 구두점 분리 (예: "student." → "student" + ".")
  const match = answerRaw.match(/^([^\w]*)([\w']+)([^\w]*)$/);
  const answer = match ? match[2] : answerRaw;

  // 예문에서 첫 등장만 빈칸으로
  const masked = sentence.replace(answer, BLANK);
  if (masked === sentence) return null; // 치환 실패 방어

  return { masked, answer };
}

/** 전체 카드에서 보기(distractor)용 단어 풀을 만든다 */
export function buildWordPool(cards: VocabCard[]): string[] {
  const set = new Set<string>();
  for (const card of cards) {
    for (const w of card.exampleEn.split(/\s+/)) {
      const match = w.match(/^[^\w]*([\w']+)[^\w]*$/);
      const word = match ? match[1] : w;
      const n = normalize(word);
      if (n.length >= 3 && !STOPWORDS.has(n)) set.add(word);
    }
  }
  return [...set];
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/**
 * 정답 + 오답 3개로 4지선다 보기를 만든다.
 * 오답은 정답과 길이가 비슷한 단어를 우선 고른다.
 */
export function makeOptions(answer: string, pool: string[]): string[] {
  const ans = normalize(answer);
  const seen = new Set([ans]);
  const distractors: string[] = [];

  // 길이 근접 순으로 정렬된 후보
  const sorted = shuffle(pool)
    .filter((w) => {
      const n = normalize(w);
      if (seen.has(n)) return false;
      seen.add(n);
      return true;
    })
    .sort(
      (a, b) =>
        Math.abs(a.length - answer.length) -
        Math.abs(b.length - answer.length),
    );

  for (const w of sorted) {
    distractors.push(w);
    if (distractors.length >= 3) break;
  }

  return shuffle([answer, ...distractors]);
}
