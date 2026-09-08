"use client";

import { cn } from "@/lib/utils";

interface Props {
  /** 상단 슬롯 — 세션 상단바 등 */
  header?: React.ReactNode;
  /** 좌 패널 — 모바일 본문 / 데스크톱 좌측 (예: ChallengePanel) */
  left: React.ReactNode;
  /** 우 패널 — 모바일 바텀시트 / 데스크톱 우측 (예: AnswerCard). 없으면 1열 유지. */
  right?: React.ReactNode;
}

/**
 * 학습 화면 공통 셸 — 반응형 2패널(챌린지|정답).
 * 모바일: 정답 패널이 화면 아래(폴드 밖)에 쌓여 "정답을 보려면 스크롤" 이 필요했다
 * (2026-09-08 실측). Duolingo 식 바텀시트로 띄워 스크롤 없이 정답·다음 버튼이 보이게 한다.
 * 데스크톱(md+): 좌우 2열.
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
        {right && (
          <>
            {/* 모바일 스크림 */}
            <div
              className="fixed inset-0 z-30 bg-black/50 duration-200 animate-in fade-in motion-reduce:animate-none md:hidden"
              aria-hidden
            />
            <div
              role="dialog"
              aria-modal="true"
              className="fixed inset-x-0 bottom-0 z-40 mx-auto flex max-h-[80dvh] w-full max-w-lg flex-col overflow-y-auto rounded-t-3xl border-t-2 border-border bg-background shadow-2xl duration-300 animate-in slide-in-from-bottom-8 motion-reduce:animate-none md:static md:z-auto md:max-h-none md:max-w-none md:overflow-visible md:rounded-none md:border-0 md:bg-transparent md:shadow-none md:animate-none"
            >
              {right}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
