/**
 * 대화 응답 카드 타입.
 * "상대방이 이렇게 말하면 나는 이렇게 답한다"를 빈칸에 단어 카드를 끼워넣어 구성.
 *
 * - 모든 텍스트는 한/영 병기 (한국어 뜻은 UI에서 가렸다 탭하면 표시 — 능동 회상).
 * - 빈칸마다 여러 자연스러운 선택지 → 사용자가 "생각하는 대로" 조합.
 * - 레벨이 높을수록 빈칸 수가 늘어난다 (A1: 1~2 … C2: 4~5).
 */
import type { CefrLevel } from "./card";

/** 한/영 한 쌍 */
export interface Bilingual {
  en: string;
  ko: string;
}

/** 빈칸 하나에 들어갈 수 있는 선택지 (어느 것을 골라도 자연스러움) */
export type DialogueBlank = Bilingual[];

export interface Dialogue {
  /** 안정적 고유 ID. 예: "dlg-a1-greetings-001" */
  id: string;
  level: CefrLevel;
  /** 상황 그룹 ID (회화 덱과 동일 체계, 예: "greetings", "cafe") */
  situation: string;
  /** 상황 설명 (한/영) */
  context: Bilingual;
  /** 상대방의 말 (한/영) */
  prompt: Bilingual;
  /**
   * 내 응답 템플릿. 빈칸은 `{0}`, `{1}` … 순서로 표시한다.
   * 예: "I'm {0}, thank you."  /  "I think it's {0}, but we should {1} the {2} first."
   */
  template: string;
  /** 빈칸별 선택지. blanks[0] = {0} 자리의 후보들. */
  blanks: DialogueBlank[];
  /** 완성 예시 응답 (한/영) — 한 가지 자연스러운 조합 */
  example: Bilingual;
  /** 같은 상황에서 쓸 수 있는 다른 표현 2~3개 (한/영) */
  alternatives: Bilingual[];
}
