/**
 * 멀티턴 대화 시나리오.
 * 한 상황에서 상대와 여러 번 주고받는 연속 대화 (3~5턴).
 * 각 턴은 대화 응답과 동일 구조 (상대 말 → 빈칸에 단어 카드로 응답).
 */
import type { CefrLevel } from "./card";
import type { Bilingual, DialogueBlank } from "./dialogue";

export interface ScenarioTurn {
  /** 상대방의 말 (한/영) */
  prompt: Bilingual;
  /** 내 응답 템플릿 — 빈칸 {0},{1}… */
  template: string;
  /** 빈칸별 선택지 (어느 조합이든 자연스러움) */
  blanks: DialogueBlank[];
  /** 완성 예시 응답 (한/영) */
  example: Bilingual;
}

export interface Scenario {
  /** 안정적 고유 ID. 예: "scn-a1-cafe-001" */
  id: string;
  level: CefrLevel;
  /** 상황 그룹 ID */
  situation: string;
  /** 시나리오 제목 (한/영) */
  title: Bilingual;
  /** 상황 설명 (한/영) */
  context: Bilingual;
  /** 연속 턴 (3~5개) */
  turns: ScenarioTurn[];
}
