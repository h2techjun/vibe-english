"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { LEARN_TTS_LANG } from "@/lib/card-view";

/**
 * Web Speech API (window.speechSynthesis) 기반 TTS.
 * 외부 네트워크 호출 없이 브라우저 내장 음성으로 학습 대상 언어를 읽는다.
 * 언어는 빌드 타깃에 따라 결정된다 (영어 빌드=en-US / 한국어 빌드=ko-KR).
 */
const LEARN_LANG_PREFIX = LEARN_TTS_LANG.split("-")[0];

export function useTts() {
  const [supported, setSupported] = useState(true);
  const [speaking, setSpeaking] = useState(false);
  const voicesRef = useRef<SpeechSynthesisVoice[]>([]);

  useEffect(() => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
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
      voices.find((v) => v.lang === LEARN_TTS_LANG && v.localService) ??
      voices.find((v) => v.lang === LEARN_TTS_LANG) ??
      voices.find((v) => v.lang.startsWith(LEARN_LANG_PREFIX))
    );
  }, []);

  const speak = useCallback(
    (text: string, opts?: { rate?: number }) => {
      if (typeof window === "undefined" || !("speechSynthesis" in window))
        return;
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = LEARN_TTS_LANG;
      u.rate = opts?.rate ?? 0.95;
      const voice = pickLearnVoice();
      if (voice) u.voice = voice;
      u.onstart = () => setSpeaking(true);
      u.onend = () => setSpeaking(false);
      u.onerror = () => setSpeaking(false);
      window.speechSynthesis.speak(u);
    },
    [pickLearnVoice],
  );

  const stop = useCallback(() => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      setSpeaking(false);
    }
  }, []);

  return { speak, stop, supported, speaking };
}
