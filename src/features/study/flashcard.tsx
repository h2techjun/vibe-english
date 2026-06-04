"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import type { VocabCard } from "@/types/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useTts } from "./use-tts";
import { Volume2, Turtle, Eye, Mic } from "lucide-react";

interface Props {
  card: VocabCard;
  revealed: boolean;
  isNew: boolean;
  onReveal: () => void;
}

export function Flashcard({ card, revealed, isNew, onReveal }: Props) {
  const t = useTranslations("study");
  const { speak, supported } = useTts();
  const [shadowing, setShadowing] = useState(false);

  // 앞면이 새로 보일 때 표현을 한 번 자동 재생
  useEffect(() => {
    setShadowing(false);
    if (supported) speak(card.en);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [card.id]);

  return (
    <div className="flex flex-1 flex-col">
      {/* 메타 뱃지 */}
      <div className="mb-3 flex items-center gap-2">
        <Badge variant="secondary">{card.level}</Badge>
        <Badge
          variant="outline"
          className={
            isNew
              ? "border-blue-300 text-blue-600 dark:border-blue-700 dark:text-blue-400"
              : "border-amber-300 text-amber-600 dark:border-amber-700 dark:text-amber-400"
          }
        >
          {isNew ? t("new") : t("review")}
        </Badge>
      </div>

      {/* 카드 본체 */}
      <div className="flex flex-1 flex-col rounded-2xl border border-border/60 bg-card p-6 shadow-sm">
        {/* 앞면: 영어 + 발음 */}
        <div className="flex flex-col items-center gap-2 text-center">
          <p className="text-2xl font-bold leading-snug sm:text-3xl">
            {card.en}
          </p>
          <p className="font-mono text-base text-muted-foreground">{card.ipa}</p>
          <p className="text-sm text-muted-foreground">[{card.koPron}]</p>
        </div>

        {/* 듣기 버튼 */}
        <div className="mt-4 flex justify-center gap-2">
          <Button
            variant="outline"
            size="sm"
            className="gap-1.5"
            disabled={!supported}
            onClick={() => speak(card.en)}
          >
            <Volume2 className="h-4 w-4" /> {t("listen")}
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="gap-1.5"
            disabled={!supported}
            onClick={() => speak(card.en, { rate: 0.6 })}
          >
            <Turtle className="h-4 w-4" /> {t("slow")}
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="gap-1.5"
            disabled={!supported}
            onClick={() => {
              speak(card.en, { rate: 0.7 });
              setShadowing(true);
            }}
          >
            <Mic className="h-4 w-4" /> {t("shadow")}
          </Button>
        </div>
        {shadowing && (
          <p className="mt-2 text-center text-xs font-medium text-blue-500">
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
          <div className="mt-5 flex flex-col gap-4">
            <Separator />
            <p className="text-center text-xl font-semibold text-blue-700 dark:text-blue-300">
              {card.ko}
            </p>

            <div className="rounded-xl bg-muted/50 p-4">
              <div className="flex items-start justify-between gap-2">
                <p className="text-sm font-medium leading-relaxed">
                  {card.exampleEn}
                </p>
                <Button
                  variant="ghost"
                  size="icon-sm"
                  className="shrink-0"
                  disabled={!supported}
                  onClick={() => speak(card.exampleEn)}
                  aria-label={t("listen")}
                >
                  <Volume2 className="h-4 w-4" />
                </Button>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">
                {card.exampleKo}
              </p>
            </div>

            {card.note && (
              <p className="text-center text-xs text-muted-foreground">
                💡 {card.note}
              </p>
            )}
          </div>
        ) : (
          <div className="mt-auto flex flex-col items-center gap-3 pt-6">
            <p className="text-xs text-muted-foreground">{t("tapToFlip")}</p>
            <Button onClick={onReveal} className="gap-2">
              <Eye className="h-4 w-4" /> {t("showAnswer")}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
