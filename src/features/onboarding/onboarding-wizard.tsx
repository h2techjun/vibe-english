"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { db } from "@/lib/db";
import { startLevelPatch, useCourse } from "@/lib/course";
import type { CefrLevel } from "@/types/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight, Loader2, Rocket } from "lucide-react";
import { RECOMMENDED_LEVEL } from "./onboarding-config";
import { LanguageStep } from "./steps/language-step";
import { LevelStep } from "./steps/level-step";
import { SummaryStep } from "./steps/summary-step";

const TOTAL_STEPS = 3;

/**
 * 첫 진입 온보딩 위저드 — ① 학습 언어 → ② 시작 레벨 → ③ 요약·시작.
 *
 * 선택은 전부 draft(useState)로 들고 있다가 마지막 "학습 시작하기" 에서 단 1회
 * 커밋한다(startLevelPatch). 중간 커밋을 피해 LevelGate 조건이 도중에 바뀌어
 * 위저드가 자멸하는 레이스를 원천 차단한다. 언어는 로케일에서 파생되므로
 * 스텝 ① 에서 즉시 로케일을 바꾸며(별도 draft 불필요), 커밋 시점엔 코스가 확정돼 있다.
 */
export function OnboardingWizard() {
  const t = useTranslations("onboarding");
  const { course } = useCourse();
  const [step, setStep] = useState(1);
  const [level, setLevel] = useState<CefrLevel>(RECOMMENDED_LEVEL);
  const [committing, setCommitting] = useState(false);

  const isLast = step === TOTAL_STEPS;

  const titles: Record<number, { title: string; subtitle?: string }> = {
    1: { title: t("lang.title"), subtitle: t("lang.subtitle") },
    2: { title: t("title"), subtitle: t("subtitle") },
    3: { title: t("summary.title") },
  };

  async function next() {
    if (!isLast) {
      setStep((s) => s + 1);
      return;
    }
    if (committing) return;
    setCommitting(true);
    await db.settings.update("main", startLevelPatch(course, level));
    // useLiveQuery(LevelGate) 가 갱신을 감지해 자동으로 앱으로 진입한다.
  }

  return (
    <div className="flex flex-1 flex-col py-2">
      {/* 진행 헤더 */}
      <div className="mb-5 flex flex-col gap-3">
        <div
          className="flex items-center gap-1.5"
          role="progressbar"
          aria-valuenow={step}
          aria-valuemin={1}
          aria-valuemax={TOTAL_STEPS}
          aria-label={t("wizard.step", { current: step, total: TOTAL_STEPS })}
        >
          {Array.from({ length: TOTAL_STEPS }, (_, i) => (
            <span
              key={i}
              className={cn(
                "h-1.5 flex-1 rounded-full transition-colors",
                i < step ? "bg-blue-500" : "bg-muted",
              )}
            />
          ))}
        </div>
        <div className="flex flex-col gap-1 text-center">
          <h1 className="text-2xl font-bold">{titles[step].title}</h1>
          {titles[step].subtitle && (
            <p className="mx-auto max-w-sm text-sm text-muted-foreground">
              {titles[step].subtitle}
            </p>
          )}
        </div>
      </div>

      {/* 스텝 콘텐츠 */}
      <div
        key={step}
        className="flex-1 duration-300 animate-in fade-in slide-in-from-right-4 motion-reduce:animate-none"
      >
        {step === 1 && <LanguageStep />}
        {step === 2 && <LevelStep value={level} onChange={setLevel} />}
        {step === 3 && <SummaryStep level={level} />}
      </div>

      {/* 스티키 푸터 */}
      <div className="sticky bottom-0 mt-4 flex items-center gap-2 bg-background/95 py-3 backdrop-blur">
        {step > 1 && (
          <Button
            variant="ghost"
            className="gap-1.5"
            disabled={committing}
            onClick={() => setStep((s) => s - 1)}
          >
            <ArrowLeft className="h-4 w-4" />
            {t("wizard.back")}
          </Button>
        )}
        <Button
          className="flex-1 gap-1.5 font-bold"
          size="lg"
          disabled={committing}
          onClick={next}
        >
          {committing ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : isLast ? (
            <>
              <Rocket className="h-4 w-4" />
              {t("wizard.start")}
            </>
          ) : (
            <>
              {t("wizard.next")}
              <ArrowRight className="h-4 w-4" />
            </>
          )}
        </Button>
      </div>
    </div>
  );
}
