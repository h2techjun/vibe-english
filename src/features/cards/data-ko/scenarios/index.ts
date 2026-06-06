/**
 * 한국어 학습 멀티턴 시나리오 통합 export.
 * 각 턴: 상대 한국어 말(prompt.ko) → 한국어 빈칸 조합 응답.
 */
import type { Scenario } from "@/types/scenario";
import { KO_SCN_A1 } from "./a1";
import { KO_SCN_A2 } from "./a2";
import { KO_SCN_B1 } from "./b1";
import { KO_SCN_B2 } from "./b2";
import { KO_SCN_C1 } from "./c1";
import { KO_SCN_C2 } from "./c2";

export const ALL_SCENARIOS_KO: Scenario[] = [
  ...KO_SCN_A1,
  ...KO_SCN_A2,
  ...KO_SCN_B1,
  ...KO_SCN_B2,
  ...KO_SCN_C1,
  ...KO_SCN_C2,
];
