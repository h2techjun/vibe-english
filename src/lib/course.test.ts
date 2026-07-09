import { describe, it, expect } from "vitest";
import {
  srcForLocale,
  courseForLocale,
  ttsLangFor,
  startLevelOf,
  startLevelPatch,
} from "./course";
import type { AppSettings } from "@/types/srs";

describe("srcForLocale (로케일 → 사용자 모국어)", () => {
  it("en/zh/vi 로케일은 그대로 매핑된다", () => {
    expect(srcForLocale("en")).toBe("en");
    expect(srcForLocale("zh")).toBe("zh");
    expect(srcForLocale("vi")).toBe("vi");
  });

  it("정의되지 않은 로케일(경계값)은 ko 로 폴백한다", () => {
    expect(srcForLocale("ko")).toBe("ko");
    expect(srcForLocale("fr")).toBe("ko");
    expect(srcForLocale("")).toBe("ko");
  });
});

describe("courseForLocale (로케일 → 학습 코스)", () => {
  it("ko 로케일은 en 코스(영어 학습)를 반환한다", () => {
    expect(courseForLocale("ko")).toBe("en");
  });

  it("ko 이외 로케일은 ko 코스(한국어 학습)를 반환한다", () => {
    expect(courseForLocale("en")).toBe("ko");
    expect(courseForLocale("zh")).toBe("ko");
    expect(courseForLocale("vi")).toBe("ko");
  });
});

describe("ttsLangFor (코스 → TTS BCP-47 언어 코드)", () => {
  it("코스에 맞는 언어 코드를 반환한다", () => {
    expect(ttsLangFor("ko")).toBe("ko-KR");
    expect(ttsLangFor("en")).toBe("en-US");
  });
});

describe("startLevelOf / startLevelPatch (코스별 시작 레벨 분기)", () => {
  const settings: AppSettings = {
    key: "main",
    dailyNewLimit: 15,
    dailyReviewLimit: 0,
    seedVersion: 0,
    ttsRate: 0.95,
    startLevel: "B1",
    startLevelKo: "A2",
  };

  it("코스별로 올바른 필드를 읽는다", () => {
    expect(startLevelOf(settings, "en")).toBe("B1");
    expect(startLevelOf(settings, "ko")).toBe("A2");
  });

  it("settings 가 없으면(경계값) undefined 를 반환한다", () => {
    expect(startLevelOf(undefined, "en")).toBeUndefined();
  });

  it("코스별로 올바른 필드에 patch 를 만든다", () => {
    expect(startLevelPatch("en", "C1")).toEqual({ startLevel: "C1" });
    expect(startLevelPatch("ko", "A1")).toEqual({ startLevelKo: "A1" });
  });
});
