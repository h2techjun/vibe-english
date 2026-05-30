"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Web Speech API (window.speechSynthesis) 기반 TTS.
 * 외부 네트워크 호출 없이 브라우저 내장 음성으로 영어 예문을 읽는다.
 */
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

  const pickEnglishVoice = useCallback((): SpeechSynthesisVoice | undefined => {
    const voices = voicesRef.current;
    // 미국식 영어 우선, 로컬(오프라인) 음성 선호
    return (
      voices.find((v) => v.lang === "en-US" && v.localService) ??
      voices.find((v) => v.lang === "en-US") ??
      voices.find((v) => v.lang.startsWith("en"))
    );
  }, []);

  const speak = useCallback(
    (text: string, opts?: { rate?: number }) => {
      if (typeof window === "undefined" || !("speechSynthesis" in window))
        return;
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = "en-US";
      u.rate = opts?.rate ?? 0.95;
      const voice = pickEnglishVoice();
      if (voice) u.voice = voice;
      u.onstart = () => setSpeaking(true);
      u.onend = () => setSpeaking(false);
      u.onerror = () => setSpeaking(false);
      window.speechSynthesis.speak(u);
    },
    [pickEnglishVoice],
  );

  const stop = useCallback(() => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      setSpeaking(false);
    }
  }, []);

  return { speak, stop, supported, speaking };
}
