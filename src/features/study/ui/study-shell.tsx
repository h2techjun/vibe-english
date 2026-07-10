"use client";

import { cn } from "@/lib/utils";

interface Props {
  /** 상단 슬롯 — 스트릭·오늘 목표 헤더 등 (기존 todayHeader) */
  header?: React.ReactNode;
  /** 좌 패널 — 모바일 상단 / 데스크톱 좌측 (예: ChallengePanel) */
  left: React.ReactNode;
  /** 우 패널 — 모바일 하단 / 데스크톱 우측 (예: AnswerCard). 없으면 1열 유지. */
  right?: React.ReactNode;
}

/**
 * 학습 화면 공통 셸 — 헤더 슬롯 + 반응형 2패널(챌린지|정답) 레이아웃.
 * 모바일: 세로 1열(left → right). 데스크톱(md+): right 있으면 2열, 없으면 1열.
 * 순수 레이아웃 컴포넌트 — 카드 톤(rounded-2xl/border/bg-card)은 각 패널
 * (ChallengePanel/AnswerCard)이 자체적으로 적용한다.
 */
export function StudyShell({ header, left, right }: Props) {
  return (
    <div className="flex flex-1 flex-col">
      {header}
      <div
        className={cn(
          "grid flex-1 grid-cols-1 gap-4",
          right && "md:grid-cols-2 md:gap-5",
        )}
      >
        {left}
        {right}
      </div>
    </div>
  );
}
