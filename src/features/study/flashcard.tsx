"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import type { VocabCard } from "@/types/card";
import { getCardFace } from "@/lib/card-view";
import { useCourse } from "@/lib/course";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useTts } from "./use-tts";
import { CardMeta } from "./ui/card-meta";
import { Volume2, Turtle, Mic } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  card: VocabCard;
  revealed: boolean;
  isNew: boolean;
  onReveal: () => void;
}

/**
 * 플래시카드 — 카드 전체가 탭 영역이다(뒤집기). "정답 보기" 주 버튼과 평가 버튼은
 * study-session 의 하단 고정 ActionBar 에 있다. 듣기 버튼은 탭 전파를 막는다.
 */
export function Flashcard({ card, revealed, isNew, onReveal }: Props) {
  const t = useTranslations("study");
  const { speak, supported } = useTts();
  const { course, src } = useCourse();
  const [shadowing, setShadowing] = useState(false);
  const face = getCardFace(card, course, src);

  // card.id 가 바뀌면 부모(study-session)의 key={current.id} 로 컴포넌트가
  // 리마운트돼 useState 가 자동 초기화되므로 여기서 shadowing 을 리셋하지 않는다.
  // 앞면이 새로 보일 때 표현을 한 번 자동 재생만 한다.
  useEffect(() => {
    if (supported) speak(face.term);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [card.id]);

  function stop(e: React.MouseEvent) {
    e.stopPropagation();
  }

  return (
    <div className="flex flex-1 flex-col">
      <CardMeta level={card.level} isNew={isNew} />

      {/* 카드 본체 — 공개 전엔 어디를 눌러도 뒤집힌다 */}
      <div
        role={revealed ? undefined : "button"}
        tabIndex={revealed ? undefined : 0}
        aria-label={revealed ? undefined : t("tapToFlip")}
        onClick={revealed ? undefined : onReveal}
        onKeyDown={
          revealed
            ? undefined
            : (e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  onReveal();
                }
              }
        }
        className={cn(
          "flex flex-1 flex-col rounded-3xl border-2 border-border/60 bg-card p-6 shadow-sm",
          !revealed &&
            "cursor-pointer transition-colors hover:border-primary/50 focus-visible:border-primary focus-visible:outline-none motion-reduce:transition-none",
        )}
      >
        {/* 앞면: 학습 대상 표현 + 발음 */}
        <div className="flex flex-col items-center gap-2 pt-4 text-center">
          <p className="text-3xl font-black leading-snug tracking-tight sm:text-4xl">
            {face.term}
          </p>
          {face.pronPrimary && (
            <p className="font-mono text-base text-muted-foreground">
              {face.pronPrimary}
            </p>
          )}
          {face.pronSecondary && (
            <p className="text-sm text-muted-foreground">
              [{face.pronSecondary}]
            </p>
          )}
        </div>

        {/* 듣기 버튼 */}
        <div className="mt-5 flex justify-center gap-2">
          <Button
            variant="outline"
            className="min-h-11 gap-1.5"
            disabled={!supported}
            onClick={(e) => {
              stop(e);
              speak(face.term);
            }}
          >
            <Volume2 className="h-4 w-4" aria-hidden /> {t("listen")}
          </Button>
          <Button
            variant="outline"
            className="min-h-11 gap-1.5"
            disabled={!supported}
            onClick={(e) => {
              stop(e);
              speak(face.term, { rate: 0.6 });
            }}
          >
            <Turtle className="h-4 w-4" aria-hidden /> {t("slow")}
          </Button>
          <Button
            variant="outline"
            className="min-h-11 gap-1.5"
            disabled={!supported}
            onClick={(e) => {
              stop(e);
              speak(face.term, { rate: 0.7 });
              setShadowing(true);
            }}
          >
            <Mic className="h-4 w-4" aria-hidden /> {t("shadow")}
          </Button>
        </div>
        {shadowing && (
          <p className="mt-2 text-center text-xs font-medium text-primary">
            🗣️ {t("shadowHint")}
          </p>
        )}
        {!supported && (
          <p className="mt-2 text-center text-xs text-muted-foreground">
            {t("ttsUnsupported")}
          </p>
        )}

        {/* 뒷면: 뜻 + 예문 (공개 시) */}
        {revealed ? (
          <div className="mt-5 flex flex-col gap-4 duration-300 animate-in fade-in slide-in-from-bottom-2 motion-reduce:animate-none">
            <Separator />
            <p className="text-center text-2xl font-black text-primary">
              {face.meaning}
            </p>

            <div className="rounded-2xl bg-muted/50 p-4">
              <div className="flex items-start justify-between gap-2">
                <p className="text-sm font-medium leading-relaxed">
                  {face.example}
                </p>
                <Button
                  variant="ghost"
                  size="icon"
                  className="min-h-11 min-w-11 shrink-0"
                  disabled={!supported}
                  onClick={() => speak(face.example)}
                  aria-label={t("listen")}
                >
                  <Volume2 className="h-4 w-4" />
                </Button>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">
                {face.exampleTrans}
              </p>
            </div>

            {face.note && (
              <p className="text-center text-xs text-muted-foreground">
                💡 {face.note}
              </p>
            )}
          </div>
        ) : (
          <p className="mt-auto pt-6 text-center text-xs text-muted-foreground">
            {t("tapToFlip")}
          </p>
        )}
      </div>
    </div>
  );
}
