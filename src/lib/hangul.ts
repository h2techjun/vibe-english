/**
 * 한글 음절/자모 유틸 — 유니코드 순수 계산, 외부 의존 없음.
 *
 * 조립형 학습(build)에서 한국어 단어를 음절 뱅크로 나누고 초성 힌트를 만드는 데 쓴다.
 * 한글 완성형은 음절 1개 = 코드포인트 1개라 Array.from 으로 음절 분해가 자연스럽다.
 */

/** 초성 19자 (유니코드 완성형 배열 순서) */
const CHOSEONG = [
  "ㄱ", "ㄲ", "ㄴ", "ㄷ", "ㄸ", "ㄹ", "ㅁ", "ㅂ", "ㅃ", "ㅅ",
  "ㅆ", "ㅇ", "ㅈ", "ㅉ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ",
] as const;

const HANGUL_BASE = 0xac00; // '가'
const HANGUL_END = 0xd7a3; // '힣'

/** 완성형 한글 음절(가~힣)인지 */
export function isHangulSyllable(ch: string): boolean {
  const code = ch.codePointAt(0);
  return code !== undefined && code >= HANGUL_BASE && code <= HANGUL_END;
}

/**
 * 문자열을 음절 배열로. 한글 완성형은 음절 1문자 = 1요소.
 * (공백·구두점도 개별 요소로 들어오므로 호출부에서 필요 시 필터.)
 */
export function toSyllables(s: string): string[] {
  return Array.from(s);
}

/** 한글 음절의 초성. 완성형이 아니면 그 문자를 그대로 반환. */
export function choseongOf(ch: string): string {
  const code = ch.codePointAt(0);
  if (code === undefined || code < HANGUL_BASE || code > HANGUL_END) return ch;
  const index = Math.floor((code - HANGUL_BASE) / 588);
  return CHOSEONG[index] ?? ch;
}

/**
 * 단어의 초성 힌트 문자열. 예: "사과" → "ㅅㄱ", "안녕하세요" → "ㅇㄴㅎㅅㅇ".
 * 공백은 그대로 유지(어절 구분), 비한글은 원문자 유지.
 */
export function choseongHint(word: string): string {
  return Array.from(word)
    .map((ch) => (ch === " " ? " " : choseongOf(ch)))
    .join("");
}

/** 한글 음절이 하나라도 포함됐는지 (코스 판별 보조) */
export function hasHangul(s: string): boolean {
  return Array.from(s).some(isHangulSyllable);
}
