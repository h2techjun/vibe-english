/**
 * 대화 응답 콘텐츠 통합 (A1~C2).
 * DIALOGUE_VERSION 을 올리면 다음 실행 시 dialogues 테이블이 재적재된다.
 */
import type { Dialogue } from "@/types/dialogue";
import { A1_DIALOGUES } from "./a1";
import { A2_DIALOGUES } from "./a2";
import { B1_DIALOGUES } from "./b1";
import { B2_DIALOGUES } from "./b2";
import { C1_DIALOGUES } from "./c1";
import { C2_DIALOGUES } from "./c2";

export const DIALOGUE_VERSION = 1;

export const ALL_DIALOGUES: Dialogue[] = [
  ...A1_DIALOGUES,
  ...A2_DIALOGUES,
  ...B1_DIALOGUES,
  ...B2_DIALOGUES,
  ...C1_DIALOGUES,
  ...C2_DIALOGUES,
];
