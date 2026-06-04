/**
 * 멀티턴 시나리오 통합 (A1~C2).
 */
import type { Scenario } from "@/types/scenario";
import { A1_SCENARIOS } from "./a1";
import { A2_SCENARIOS } from "./a2";
import { B1_SCENARIOS } from "./b1";
import { B2_SCENARIOS } from "./b2";
import { C1_SCENARIOS } from "./c1";
import { C2_SCENARIOS } from "./c2";

export const ALL_SCENARIOS: Scenario[] = [
  ...A1_SCENARIOS,
  ...A2_SCENARIOS,
  ...B1_SCENARIOS,
  ...B2_SCENARIOS,
  ...C1_SCENARIOS,
  ...C2_SCENARIOS,
];
