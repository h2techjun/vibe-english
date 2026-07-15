"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "@/lib/db";
import { ttsLangFor, useCourse } from "@/lib/course";

// 마지막으로 읽은 발음 속도 캐시(모듈 스코프) — 카드가 바뀔 때마다 Flashcard/
// ListenCard 가 리마운트되어 useLiveQuery 가 매번 새로 비동기 조회를 하는데,
// 그 조회가 끝나기 전에 마운트 직후 자동 재생(useEffect)이 먼저 실행되면
// 기본값(0.95)으로 읽혀버린다(설정 변경이 첫 재생에 반영 안 되는 버그).
// 세션 중 한 번이라도 읽힌 값을 캐시해 다음 마운트의 첫 렌더부터 즉시 쓴다.
let cachedTtsRate: number | undefined;

/**
 * Web Speech API (window.speechSynthesis) 기반 TTS.
 * 외부 네트워크 호출 없이 브라우저 내장 음성으로 학습 대상 언어를 읽는다.
 * 언어는 현재 코스에서 결정된다 (en 코스=en-US / ko 코스=ko-KR).
 */
export function useTts() {
  const { course } = useCourse();
  const lang = ttsLangFor(course);
  const langPrefix = lang.split("-")[0];
  // 설정의 발음 속도를 실제로 반영한다 (기존엔 어디서도 안 읽혀 무효 설정이었음).
  const settings = useLiveQuery(() => db.settings.get("main"));
  if (settings?.ttsRate !== undefined) cachedTtsRate = settings.ttsRate;
  const baseRate = settings?.ttsRate ?? cachedTtsRate ?? 0.95;

  const [supported, setSupported] = useState(true);
  const [speaking, setSpeaking] = useState(false);
  const voicesRef = useRef<SpeechSynthesisVoice[]>([]);

  useEffect(() => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      // SSR/미지원 브라우저 판별은 마운트 후에만 가능 (window 접근 필요).
      // 초기값 true 로 SSR과 일치시키고, 여기서만 false 로 갱신한다.
      /* eslint-disable-next-line react-hooks/set-state-in-effect */
      setSupported(false);
      return;
    }
    const load = () => {
      voicesRef.current = window.speechSynthesis.getVoices();
    };
    load();
    window.speechSynthesis.addEventListener("voiceschanged", load);
    return () => {
      window.speechSynthesis.removeEventListener("voiceschanged", load);
      window.speechSynthesis.cancel();
    };
  }, []);

  const pickLearnVoice = useCallback((): SpeechSynthesisVoice | undefined => {
    const voices = voicesRef.current;
    // 학습 대상 언어 우선, 로컬(오프라인) 음성 선호
    return (
      voices.find((v) => v.lang === lang && v.localService) ??
      voices.find((v) => v.lang === lang) ??
      voices.find((v) => v.lang.startsWith(langPrefix))
    );
  }, [lang, langPrefix]);

  const speak = useCallback(
    (text: string, opts?: { rate?: number }) => {
      if (typeof window === "undefined" || !("speechSynthesis" in window))
        return;
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = lang;
      // opts.rate(느리게 재생 등)가 있으면 우선, 없으면 사용자 설정 속도.
      u.rate = opts?.rate ?? baseRate;
      const voice = pickLearnVoice();
      if (voice) u.voice = voice;
      u.onstart = () => setSpeaking(true);
      u.onend = () => setSpeaking(false);
      u.onerror = () => setSpeaking(false);
      window.speechSynthesis.speak(u);
    },
    [pickLearnVoice, lang, baseRate],
  );

  const stop = useCallback(() => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      setSpeaking(false);
    }
  }, []);

  return { speak, stop, supported, speaking };
}
