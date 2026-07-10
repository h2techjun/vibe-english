/**
 * 학습 결과 공유 유틸.
 * Wordle 식 이모지 그리드로 결과를 요약하고(순수 함수), Web Share API 또는
 * 클립보드로 공유한다. 외부 서버 호출 없음.
 */

/** 한 줄에 표시할 결과 칸 수 */
const ROW_SIZE = 10;

/**
 * 결과 배열(정답 여부)을 이모지 그리드 텍스트로 만든다. 정답=🟩 오답=🟥,
 * 한 줄에 10개씩 줄바꿈.
 * 형식: 제목줄('Loopla 🇰🇷 <정답수>/<전체>', opts.title 있으면 대체) +
 * 빈줄 + 이모지 그리드 (+ opts.url 있으면 마지막 줄에 URL).
 */
export function buildShareGrid(
  results: boolean[],
  opts?: { title?: string; url?: string },
): string {
  const total = results.length;
  const correct = results.filter(Boolean).length;
  const title = opts?.title ?? `Loopla 🇰🇷 ${correct}/${total}`;

  const rows: string[] = [];
  for (let i = 0; i < results.length; i += ROW_SIZE) {
    rows.push(
      results
        .slice(i, i + ROW_SIZE)
        .map((ok) => (ok ? "🟩" : "🟥"))
        .join(""),
    );
  }

  const lines = [title, "", ...rows];
  if (opts?.url) lines.push(opts.url);
  return lines.join("\n");
}

/**
 * 텍스트를 공유하거나 클립보드에 복사한다. 단계별 폴백(각 단계 try/catch):
 * 1) Web Share API 지원 시(주로 모바일) navigator.share 시도 → 'shared'
 * 2) 미지원이거나 실패하면 navigator.clipboard.writeText → 'copied'
 * 3) 그마저 실패하면 임시 textarea + document.execCommand('copy') → 'copied'
 * 4) 모두 실패(또는 navigator 없는 SSR 환경)하면 'failed'
 */
export async function shareResult(
  text: string,
): Promise<"shared" | "copied" | "failed"> {
  if (typeof navigator === "undefined") return "failed";

  if (typeof navigator.share === "function") {
    try {
      await navigator.share({ text });
      return "shared";
    } catch {
      // 사용자 취소 등 — 클립보드 복사로 폴백
    }
  }

  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return "copied";
    } catch {
      // 폴백 계속
    }
  }

  try {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(textarea);
    return ok ? "copied" : "failed";
  } catch {
    return "failed";
  }
}
