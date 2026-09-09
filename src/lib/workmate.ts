/**
 * Workmate(workmate.tools) 바깥 링크 — Loopla 는 Workmate 에 정적 임베드(/loopla)돼
 * Workmate 헤더가 없으므로, 앱 안에서 다른 도구로 나가는 진입점을 직접 둔다.
 * (2026-09-09 마스터: "학습하다가 홈이나 타자연습으로 갈 방법이 없다")
 * 절대 URL 이라 GitHub Pages 빌드에서도 동일하게 동작한다.
 */
const ORIGIN = "https://workmate.tools";

export type WorkmateDest = "hub" | "learn" | "typing" | "games";

const PATH: Record<WorkmateDest, string> = {
  hub: "",
  learn: "/learn",
  typing: "/korean-typing",
  games: "/games",
};

/** 로케일(ko/en/zh/vi — Workmate 도 같은 4개)별 Workmate URL */
export function workmateUrl(locale: string, dest: WorkmateDest): string {
  return `${ORIGIN}/${locale}${PATH[dest]}`;
}
