"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import {
  Blocks,
  Check,
  ChevronDown,
  Ear,
  Layers,
  MessageCircle,
  PencilLine,
  type LucideIcon,
} from "lucide-react";

export type StudyMode = "build" | "flashcard" | "cloze" | "listen" | "dialogue";

export const MODE_ICON: Record<StudyMode, LucideIcon> = {
  build: Blocks,
  flashcard: Layers,
  cloze: PencilLine,
  listen: Ear,
  dialogue: MessageCircle,
};

interface Props {
  value: StudyMode;
  options: StudyMode[];
  onChange: (mode: StudyMode) => void;
}

/**
 * 학습 방식 선택 — 상단바의 작은 버튼을 누르면 설명이 달린 목록이 뜬다.
 * 세션 화면에 5칸 세그먼트를 상시 노출하던 방식은 화면을 먹고 "조립"이 뭔지
 * 설명도 못 했다(2026-09-08 실측). 기본 동선(홈→학습)은 이 버튼을 안 눌러도 된다.
 */
export function ModePicker({ value, options, onChange }: Props) {
  const t = useTranslations("study");
  const [open, setOpen] = useState(false);
  const Icon = MODE_ICON[value];

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        aria-label={t("modePick")}
        className="flex h-11 shrink-0 items-center gap-1 rounded-full border border-border bg-card px-3 text-sm font-bold transition-colors hover:bg-muted"
      >
        <Icon className="h-4 w-4 text-primary" aria-hidden />
        <span className="max-w-20 truncate">{t(`mode.${value}`)}</span>
        <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" aria-hidden />
      </DialogTrigger>
      <DialogContent className="rounded-2xl p-5">
        <DialogHeader>
          <DialogTitle className="text-lg font-black">{t("modePick")}</DialogTitle>
          <DialogDescription>{t("modePickDesc")}</DialogDescription>
        </DialogHeader>
        <div role="radiogroup" aria-label={t("modePick")} className="flex flex-col gap-2">
          {options.map((m) => {
            const MIcon = MODE_ICON[m];
            const selected = m === value;
            return (
              <button
                key={m}
                role="radio"
                aria-checked={selected}
                onClick={() => {
                  onChange(m);
                  setOpen(false);
                }}
                className={cn(
                  "flex min-h-14 items-center gap-3 rounded-xl border-2 px-3 py-2 text-left transition-colors motion-reduce:transition-none",
                  selected
                    ? "border-primary bg-primary/10"
                    : "border-border/60 hover:border-primary/50",
                )}
              >
                <span
                  className={cn(
                    "grid h-10 w-10 shrink-0 place-items-center rounded-xl",
                    selected ? "bg-primary text-primary-foreground" : "bg-muted",
                  )}
                >
                  <MIcon className="h-5 w-5" aria-hidden />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-bold">{t(`mode.${m}`)}</span>
                  <span className="block text-xs text-muted-foreground">
                    {t(`modeDesc.${m}`)}
                  </span>
                </span>
                {selected && <Check className="h-5 w-5 shrink-0 text-primary" aria-hidden />}
              </button>
            );
          })}
        </div>
      </DialogContent>
    </Dialog>
  );
}
