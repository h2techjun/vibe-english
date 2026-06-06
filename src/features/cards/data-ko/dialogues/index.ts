/**
 * 한국어 학습 대화 응답 카드 통합 export.
 * 상대가 한국어로 말하면(prompt.ko), 한국어 빈칸 조합으로 응답한다.
 */
import type { Dialogue } from "@/types/dialogue";
import { KO_DLG_A1 } from "./a1";
import { KO_DLG_A2 } from "./a2";
import { KO_DLG_B1 } from "./b1";
import { KO_DLG_B2 } from "./b2";
import { KO_DLG_C1 } from "./c1";
import { KO_DLG_C2 } from "./c2";

export const ALL_DIALOGUES_KO: Dialogue[] = [
  ...KO_DLG_A1,
  ...KO_DLG_A2,
  ...KO_DLG_B1,
  ...KO_DLG_B2,
  ...KO_DLG_C1,
  ...KO_DLG_C2,
];
