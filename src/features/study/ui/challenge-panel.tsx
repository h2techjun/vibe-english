"use client";

import { Sparkles } from "lucide-react";

interface Props {
  /** 패널 제목 — 예: "오늘의 챌린지" */
  title: string;
  /** 중앙 프롬프트 — 단어 뜻 + 이모지 등 (호출부에서 구성) */
  prompt: React.ReactNode;
  /** 초성/첫글자 힌트 등 보조 힌트 (선택) */
  hint?: React.ReactNode;
  /** 조립 슬롯 · 음절 뱅크 등 모드별 인터랙션 영역 */
  children: React.ReactNode;
}

/**
 * 학습 화면 좌측 '오늘의 챌린지' 카드.
 * 프롬프트+힌트 헤더와 모드별 인터랙션 영역(조립 슬롯·음절 뱅크·선택지 등)을
 * 감싸는 공통 프레임. 인터랙션 로직은 갖지 않는 순수 프레젠테이션 컴포넌트.
 */
export function ChallengePanel({ title, prompt, hint, children }: Props) {
  return (
    <div className="flex flex-1 flex-col rounded-2xl border border-border/60 bg-card p-6 shadow-sm">
      <p className="flex items-center gap-1.5 text-sm font-semibold text-violet-600 dark:text-violet-400">
        <Sparkles className="h-4 w-4" />
        {title}
      </p>

      <div className="mt-4 flex flex-col items-center gap-3 text-center">
        <div className="text-xl font-bold leading-relaxed sm:text-2xl">
          {prompt}
        </div>
        {hint && (
          <span className="rounded-full border border-violet-300 bg-violet-50 px-3 py-1 text-sm font-medium text-violet-700 dark:border-violet-800 dark:bg-violet-950 dark:text-violet-300">
            {hint}
          </span>
        )}
      </div>

      <div className="mt-6 flex flex-1 flex-col gap-4">{children}</div>
    </div>
  );
}
