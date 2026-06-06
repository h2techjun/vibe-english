/**
 * 빈칸 채우기(cloze) 유틸 — 순수 함수.
 * 예문에서 핵심 어휘 1개를 빈칸으로 만들고 4지선다 보기를 생성한다.
 * 스펠링/타이핑 없이 "고르기"만으로 학습.
 *
 * 학습 대상 언어에 따라 토크나이즈가 다르다 (lib/card-view 의 LEARN_IS_LATIN 분기):
 *  - 라틴(영어): 단어 단위, 기능어(STOPWORDS) 제외, 3자 이상
 *  - 한국어: 어절(띄어쓰기) 단위로 조사까지 통째, 기능어 어절 제외, 2자 이상
 */
import type { VocabCard } from "@/types/card";
import { getCardFace, LEARN_IS_LATIN } from "@/lib/card-view";

const BLANK = "_____";

/** 정규식 메타문자 이스케이프 */
function escapeRegExp(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ───────────────────────── 영어(라틴) ─────────────────────────

/** 빈칸 대상에서 제외할 기능어 */
const EN_STOPWORDS = new Set([
  "i", "im", "a", "an", "the", "is", "are", "am", "was", "were", "to", "you",
  "your", "me", "my", "we", "it", "this", "that", "these", "those", "of", "do",
  "does", "did", "can", "could", "would", "will", "shall", "should", "may",
  "might", "must", "please", "and", "or", "but", "so", "at", "in", "on", "for",
  "be", "have", "has", "had", "get", "got", "with", "from", "by", "as", "if",
  "not", "no", "yes", "he", "she", "they", "his", "her", "our", "their",
  "there", "here", "what", "who", "how", "when", "where", "why", "too", "very",
  "just", "now", "then", "out", "up", "down", "off",
]);

function normalizeEn(word: string): string {
  return word.toLowerCase().replace(/[^a-z']/g, "");
}

/** 어절에서 라틴 단어 본체만 추출 (앞뒤 구두점 제거) */
function pickLatinWord(raw: string): string {
  const match = raw.match(/^[^\w]*([\w']+)[^\w]*$/);
  return match ? match[1] : raw;
}

function buildClozeLatin(
  sentence: string,
  term: string,
): ClozeQuestion | null {
  const rawWords = sentence.split(/\s+/);
  const termWords = new Set(term.split(/\s+/).map(normalizeEn).filter(Boolean));

  // 후보: 3자 이상, 기능어 아님
  const candidates = rawWords.filter((w) => {
    const n = normalizeEn(w);
    return n.length >= 3 && !EN_STOPWORDS.has(n);
  });
  if (candidates.length === 0) return null;

  // term 표현과 겹치는 단어 우선, 없으면 가장 긴 단어
  const overlap = candidates.filter((w) => termWords.has(normalizeEn(w)));
  const pool = overlap.length > 0 ? overlap : candidates;
  const answerRaw = pool.reduce((a, b) =>
    normalizeEn(b).length > normalizeEn(a).length ? b : a,
  );

  // 정답 단어에서 구두점 분리 (예: "student." → "student")
  const match = answerRaw.match(/^([^\w]*)([\w']+)([^\w]*)$/);
  const answer = match ? match[2] : answerRaw;

  // 예문에서 첫 등장만 빈칸으로 (단어 경계)
  const masked = sentence.replace(
    new RegExp(`\\b${escapeRegExp(answer)}\\b`),
    BLANK,
  );
  if (masked === sentence) return null;

  return { masked, answer };
}

// ───────────────────────── 한국어 ─────────────────────────

/**
 * 단독 어절로 자주 등장하는 기능어(대명사·부사·접속·의존명사 등).
 * 2자 이상만 의미 있다 (1자는 길이 필터에서 이미 제외).
 */
const KO_STOPWORDS = new Set([
  "그것", "이것", "저것", "그래서", "그리고", "그런데", "하지만", "그러면",
  "그럼", "그래도", "그러나", "여기", "거기", "저기", "어디", "무엇", "누구",
  "언제", "정말", "진짜", "아주", "조금", "많이", "그냥", "역시", "마치",
  "이거", "그거", "저거", "이런", "그런", "저런", "어떤", "무슨", "제가",
  "내가", "네가", "우리", "당신", "그분", "이분", "저분",
]);

function normalizeKo(word: string): string {
  return word.replace(/[^가-힣0-9]/g, "");
}

/** 어절에서 한글/숫자/라틴 본체만 추출 (앞뒤 구두점 제거) */
function pickKoWord(raw: string): string {
  const match = raw.match(
    /^[^가-힣0-9a-zA-Z]*([가-힣0-9a-zA-Z]+)[^가-힣0-9a-zA-Z]*$/,
  );
  return match ? match[1] : raw;
}

function buildClozeKo(sentence: string, term: string): ClozeQuestion | null {
  const rawWords = sentence.split(/\s+/);
  const termWords = new Set(
    term.split(/\s+/).map(normalizeKo).filter(Boolean),
  );

  // 후보: 한글 본체 2자 이상, 기능어 어절 아님
  const candidates = rawWords.filter((w) => {
    const n = normalizeKo(w);
    return n.length >= 2 && !KO_STOPWORDS.has(n);
  });
  if (candidates.length === 0) return null;

  // term 표현과 겹치는 어절 우선 (조사 차이를 흡수: 한쪽이 다른 쪽으로 시작)
  const overlap = candidates.filter((w) => {
    const n = normalizeKo(w);
    return [...termWords].some(
      (tw) => tw.length >= 2 && (n.startsWith(tw) || tw.startsWith(n)),
    );
  });
  const pool = overlap.length > 0 ? overlap : candidates;
  const answerRaw = pool.reduce((a, b) =>
    normalizeKo(b).length > normalizeKo(a).length ? b : a,
  );

  // 어절 본체(조사 포함, 앞뒤 구두점만 제거)를 정답으로
  const answer = pickKoWord(answerRaw);

  // 첫 등장만 빈칸으로 (한글은 \b 가 무의미 → 문자열 치환)
  const masked = sentence.replace(answer, BLANK);
  if (masked === sentence) return null;

  return { masked, answer };
}

// ───────────────────────── 공개 API ─────────────────────────

export interface ClozeQuestion {
  /** 빈칸이 들어간 예문 */
  masked: string;
  /** 정답 토큰 (원형, 대소문자·조사 유지) */
  answer: string;
}

/**
 * 카드의 예문에서 빈칸 문제를 만든다.
 * 학습 대상 표현과 겹치는 토큰을 우선 빈칸 처리한다.
 * 적절한 후보가 없으면 null (호출부에서 플래시카드로 폴백).
 */
export function buildCloze(card: VocabCard): ClozeQuestion | null {
  const face = getCardFace(card);
  if (!face.example) return null;
  return LEARN_IS_LATIN
    ? buildClozeLatin(face.example, face.term)
    : buildClozeKo(face.example, face.term);
}

/** 전체 카드에서 보기(distractor)용 토큰 풀을 만든다 */
export function buildWordPool(cards: VocabCard[]): string[] {
  const set = new Set<string>();
  for (const card of cards) {
    const example = getCardFace(card).example;
    if (!example) continue;
    for (const raw of example.split(/\s+/)) {
      if (LEARN_IS_LATIN) {
        const word = pickLatinWord(raw);
        const n = normalizeEn(word);
        if (n.length >= 3 && !EN_STOPWORDS.has(n)) set.add(word);
      } else {
        const word = pickKoWord(raw);
        const n = normalizeKo(word);
        if (n.length >= 2 && !KO_STOPWORDS.has(n)) set.add(word);
      }
    }
  }
  return [...set];
}

/**
 * 정답 + 오답 3개로 4지선다 보기를 만든다.
 * 오답은 정답과 길이가 비슷한 토큰을 우선 고른다.
 */
export function makeOptions(answer: string, pool: string[]): string[] {
  const normalize = LEARN_IS_LATIN ? normalizeEn : normalizeKo;
  const ans = normalize(answer);
  const seen = new Set([ans]);
  const distractors: string[] = [];

  const sorted = shuffle(pool)
    .filter((w) => {
      const n = normalize(w);
      if (!n || seen.has(n)) return false;
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
