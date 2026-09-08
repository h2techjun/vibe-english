"use client";

import { useEffect, useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import { useLiveQuery } from "dexie-react-hooks";
import type { VocabCard } from "@/types/card";
import type { CardProgress, ReviewGrade } from "@/types/srs";
import { Rating } from "@/types/srs";
import { Button } from "@/components/ui/button";
import { Loader2, Eye } from "lucide-react";
import {
  buildStudyQueue,
  buildPracticeQueue,
  getProgressMap,
  applyGrade,
  getWeakCards,
} from "@/features/srs/repository";
import { previewIntervalsMin, REVIEW_GRADES } from "@/features/srs/scheduler";
import { getStudyStats } from "@/features/progress/stats";
import { db } from "@/lib/db";
import { useCourse } from "@/lib/course";
import { Flashcard } from "./flashcard";
import { ClozeCard } from "./cloze-card";
import { ListenCard } from "./listen-card";
import { BuildCard } from "./build-card";
import { DialogueSession } from "./dialogue-session";
import { ScenarioSession } from "./scenario-session";
import { useTts } from "./use-tts";
import { buildWordPool } from "./cloze";
import { buildUnitPool } from "./build";
import { StudyTopbar } from "./ui/study-topbar";
import { ModePicker, type StudyMode } from "./ui/mode-picker";
import { ActionBar } from "./ui/action-bar";
import { StudyDone, StudyEmpty } from "./study-done";
import { cn } from "@/lib/utils";

type Status = "loading" | "studying" | "empty" | "done";

const GRADE_STYLES: Record<ReviewGrade, string> = {
  [Rating.Again]: "bg-rose-600 hover:bg-rose-600/90 text-white",
  [Rating.Hard]: "bg-amber-500 hover:bg-amber-500/90 text-white",
  [Rating.Good]: "bg-emerald-600 hover:bg-emerald-600/90 text-white",
  [Rating.Easy]: "bg-sky-600 hover:bg-sky-600/90 text-white",
};

const GRADE_KEY: Record<ReviewGrade, "again" | "hard" | "good" | "easy"> = {
  [Rating.Again]: "again",
  [Rating.Hard]: "hard",
  [Rating.Good]: "good",
  [Rating.Easy]: "easy",
};

/**
 * 세션 시작 모드 결정.
 * - 마지막에 고른 모드가 있으면 복원(선호 유지).
 * - 학습 이력이 전혀 없는 신규자는 가장 무거운 build 대신
 *   가벼운 flashcard 로 첫 세션을 열어 진입 마찰을 낮춘다.
 * - 단어장 세션에는 dialogue 가 없으므로 flashcard 로 대체한다.
 */
function resolveStartMode(
  last: StudyMode | undefined,
  isNewUser: boolean,
  vocab: boolean,
  ttsSupported: boolean,
): StudyMode {
  let m: StudyMode = last ?? (isNewUser ? "flashcard" : "build");
  if (vocab && m === "dialogue") m = "flashcard";
  // TTS 미지원 브라우저에서 listen 복원 시 풀이 불가 → flashcard 로 대체
  if (!ttsSupported && m === "listen") m = "flashcard";
  return m;
}

export function StudySession() {
  const t = useTranslations("study");
  const searchParams = useSearchParams();
  const { course } = useCourse();
  // TTS 미지원 브라우저(음성 없음)에선 듣기 모드가 풀이 불가라 노출을 막는다.
  const { supported: ttsSupported } = useTts();
  const deckId = searchParams.get("deck") ?? undefined;
  const weak = searchParams.get("weak") === "1";
  // 단어장 세션 — deckId 없이 vocab-* 덱만 큐로 (홈/주제 탭의 단어장 진입)
  const vocab = searchParams.get("vocab") === "1";
  // 홈/주제/완료화면에서 자유 연습 링크(/study?practice=1)로 바로 진입
  const practiceParam = searchParams.get("practice") === "1";
  const [status, setStatus] = useState<Status>("loading");
  const [queue, setQueue] = useState<VocabCard[]>([]);
  const [progressMap, setProgressMap] = useState<Map<string, CardProgress>>(
    new Map(),
  );
  const [index, setIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [studied, setStudied] = useState(0);
  const [busy, setBusy] = useState(false);
  const [mode, setMode] = useState<StudyMode>("build");
  const [dlgSub, setDlgSub] = useState<"single" | "scenario">("single");
  const [wordPool, setWordPool] = useState<string[]>([]);
  const [unitPool, setUnitPool] = useState<string[]>([]);
  const [reloadKey, setReloadKey] = useState(0);
  // 자유 연습 — due 무관하게 계속 학습 (오늘 분량 소진·한 모드 완료 후 막힘 방지)
  const [practice, setPractice] = useState(false);
  // 세션 콤보 (연속 정답) — 동기 부여용
  const [combo, setCombo] = useState(0);
  const [bestCombo, setBestCombo] = useState(0);
  // 세션 정답/오답 이력 — 완료 화면 정확도·Wordle 식 공유용
  const [results, setResults] = useState<boolean[]>([]);

  // 스트릭 — 상단바 🔥 표시. DB 변경 시 자동 갱신
  const stats = useLiveQuery(() => getStudyStats(course), [course]);

  useEffect(() => {
    let mounted = true;
    // 같은 /study 라우트에서 쿼리(deck/weak)만 바뀌면 리마운트되지 않으므로
    // 진행 상태를 직접 리셋한다 (안 하면 이전 index/mode 잔존 → 빈 화면/엉뚱한 모드).
    /* eslint-disable react-hooks/set-state-in-effect */
    setIndex(0);
    setStudied(0);
    setRevealed(false);
    setCombo(0);
    setBestCombo(0);
    setResults([]);
    setStatus("loading");
    if (weak) {
      setMode("flashcard"); // 약점 복습은 플래시카드 고정 (모드 선택 숨김)
      setDlgSub("single");
    }
    /* eslint-enable react-hooks/set-state-in-effect */
    (async () => {
      const now = new Date();
      const [q, pm, allCards, settingsRow] = await Promise.all([
        weak
          ? getWeakCards(course).then((r) => ({
              cards: r.cards,
              reviewCount: r.cards.length,
              newCount: 0,
            }))
          : practice || practiceParam
            ? buildPracticeQueue(course, deckId, vocab).then((cards) => ({
                cards,
                reviewCount: 0,
                newCount: 0,
              }))
            : buildStudyQueue(now, deckId, course, vocab),
        getProgressMap(),
        db.cards.where("course").equals(course).toArray(),
        db.settings.get("main"),
      ]);
      if (!mounted) return;
      setQueue(q.cards);
      setProgressMap(pm);
      setWordPool(buildWordPool(allCards, course));
      setUnitPool(buildUnitPool(allCards, course));
      // 약점 복습은 위에서 flashcard 로 고정했으므로 그 외 세션만 기본 모드 결정
      if (!weak) {
        setMode(
          resolveStartMode(
            settingsRow?.lastMode,
            pm.size === 0,
            vocab,
            ttsSupported,
          ),
        );
      }
      setStatus(q.cards.length === 0 ? "empty" : "studying");
    })();
    return () => {
      mounted = false;
    };
    // course 변경(언어 토글 = 코스 전환) 시에도 큐를 새 코스로 재구성한다
  }, [deckId, weak, vocab, reloadKey, course, practice, practiceParam, ttsSupported]);

  function switchMode(next: StudyMode) {
    if (next === mode) return;
    setRevealed(false);
    setMode(next);
    // 다음 세션 기본값으로 복원되도록 선택 모드를 저장한다
    void db.settings.update("main", { lastMode: next });
  }

  /** 콤보 갱신 — 정답이면 +1, 오답이면 리셋 */
  function trackCombo(correct: boolean) {
    setCombo((c) => {
      const next = correct ? c + 1 : 0;
      setBestCombo((b) => Math.max(b, next));
      return next;
    });
  }

  function advance() {
    const next = index + 1;
    setStudied((s) => s + 1);
    if (next >= queue.length) {
      setStatus("done");
    } else {
      setRevealed(false);
      setIndex(next);
    }
  }

  /**
   * 자유 연습 시작/계속 — due 무관하게 큐를 새로 셔플해 이어서 학습한다.
   * 오늘 분량을 다 끝냈거나 한 모드만 해도 막히지 않도록 하는 핵심 동선.
   */
  function startPractice() {
    setPractice(true);
    setReloadKey((k) => k + 1);
  }

  async function handleClozeAnswer(correct: boolean) {
    if (!current || busy) return;
    setBusy(true);
    try {
      await applyGrade(current.id, correct ? Rating.Good : Rating.Again);
      trackCombo(correct);
      setResults((r) => [...r, correct]);
      advance();
    } finally {
      setBusy(false);
    }
  }

  const current = queue[index];
  const isNew = current ? !progressMap.has(current.id) : false;

  // 평가 버튼에 표시할 "다음 복습까지" 간격 (분)
  const preview = useMemo(() => {
    if (!current) return null;
    return previewIntervalsMin(progressMap.get(current.id), new Date());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current?.id]);

  function formatInterval(min: number): string {
    if (min < 60) return t("interval.min", { n: min });
    if (min < 1440) return t("interval.hour", { n: Math.round(min / 60) });
    return t("interval.day", { n: Math.round(min / 1440) });
  }

  async function handleGrade(grade: ReviewGrade) {
    if (!current || busy) return;
    setBusy(true);
    try {
      await applyGrade(current.id, grade);
      const correct = grade === Rating.Good || grade === Rating.Easy;
      trackCombo(correct);
      setResults((r) => [...r, correct]);
      advance();
    } finally {
      setBusy(false);
    }
  }

  // 학습 방식 목록 (조립 / 플래시카드 / 빈칸 / 듣기 / 대화). 약점 복습 모드에선 숨김.
  // 대화(dialogue)는 코스 전역 회화 콘텐츠라 단어장 세션에선 제외한다.
  const modeOptions: StudyMode[] = [
    "build",
    "flashcard",
    "cloze",
    ...(ttsSupported ? (["listen"] as StudyMode[]) : []),
    ...(vocab ? [] : (["dialogue"] as StudyMode[])),
  ];
  const modePicker = weak ? undefined : (
    <ModePicker value={mode} options={modeOptions} onChange={switchMode} />
  );
  const streak = stats?.streak;

  // 대화 모드는 별도 큐(dialogues/scenarios)라 카드 상태(status)와 무관.
  // 안에서 한 마디(단발) / 시나리오(멀티턴) 서브 토글.
  if (mode === "dialogue") {
    return (
      <div className="flex flex-1 flex-col">
        <StudyTopbar right={modePicker} streak={streak} />
        <div
          role="tablist"
          aria-label={t("mode.dialogue")}
          className="mb-3 flex gap-1 self-center rounded-full border bg-muted/50 p-0.5 text-sm"
        >
          {(["single", "scenario"] as const).map((s) => (
            <button
              key={s}
              role="tab"
              aria-selected={dlgSub === s}
              onClick={() => setDlgSub(s)}
              className={cn(
                "min-h-10 rounded-full px-4 font-semibold transition-colors motion-reduce:transition-none",
                dlgSub === s
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {t(s === "single" ? "dialogueSingle" : "dialogueScenario")}
            </button>
          ))}
        </div>
        {dlgSub === "single" ? <DialogueSession /> : <ScenarioSession />}
      </div>
    );
  }

  if (status === "loading") {
    return (
      <div className="flex flex-1 flex-col items-center justify-center gap-3 text-muted-foreground">
        <Loader2 className="h-6 w-6 animate-spin" aria-hidden />
        <p className="text-sm">{t("loading")}</p>
      </div>
    );
  }

  if (status === "empty") {
    return (
      <div className="flex flex-1 flex-col">
        <StudyTopbar right={modePicker} streak={streak} />
        <StudyEmpty
          weak={stats?.weak ?? 0}
          isWeakSession={weak}
          onPractice={startPractice}
        />
      </div>
    );
  }

  if (status === "done") {
    return (
      <div className="flex flex-1 flex-col">
        <StudyTopbar value={100} streak={streak} />
        <StudyDone
          studied={studied}
          results={results}
          bestCombo={bestCombo}
          streak={streak ?? 0}
          todayTotal={stats?.today ?? 0}
          onContinue={startPractice}
        />
      </div>
    );
  }

  // studying
  const progressPct = ((index + (revealed ? 0.5 : 0)) / queue.length) * 100;

  return (
    <div className="flex flex-1 flex-col">
      <StudyTopbar value={progressPct} right={modePicker} streak={streak} />

      {/* 카드 위치·콤보 */}
      <div className="mb-2 flex items-center justify-between text-xs text-muted-foreground">
        <span className="tabular-nums">
          {t("progress", { current: index + 1, total: queue.length })}
        </span>
        {combo >= 2 && (
          <span
            key={combo}
            className="font-black text-orange-500 duration-300 animate-in zoom-in motion-reduce:animate-none"
            aria-live="polite"
          >
            🔥 ×{combo}
          </span>
        )}
      </div>

      {/* 카드 전환 애니메이션 — 새 카드가 오른쪽에서 슬라이드 인 */}
      {current && (
        <div
          key={current.id}
          className="flex flex-1 flex-col duration-300 animate-in fade-in slide-in-from-right-4 motion-reduce:animate-none"
        >
          {mode === "build" && (
            <BuildCard
              card={current}
              isNew={isNew}
              unitPool={unitPool}
              busy={busy}
              onAnswer={handleClozeAnswer}
            />
          )}

          {mode === "flashcard" && (
            <>
              <Flashcard
                card={current}
                revealed={revealed}
                isNew={isNew}
                onReveal={() => setRevealed(true)}
              />
              <ActionBar>
                {revealed && preview ? (
                  <div
                    className="grid grid-cols-4 gap-2 duration-200 animate-in fade-in motion-reduce:animate-none"
                    role="group"
                    aria-label={t("rateLabel")}
                  >
                    {REVIEW_GRADES.map((g) => (
                      <button
                        key={g}
                        disabled={busy}
                        onClick={() => handleGrade(g)}
                        className={`flex min-h-14 flex-col items-center justify-center gap-0.5 rounded-xl px-1 py-2 text-sm font-black transition-opacity disabled:opacity-50 ${GRADE_STYLES[g]}`}
                      >
                        {t(`rate.${GRADE_KEY[g]}`)}
                        <span className="text-[11px] font-medium opacity-90">
                          {formatInterval(preview[g])}
                        </span>
                      </button>
                    ))}
                  </div>
                ) : (
                  <Button
                    onClick={() => setRevealed(true)}
                    className="btn-arcade min-h-12 w-full gap-2 text-base font-black"
                  >
                    <Eye className="h-4 w-4" aria-hidden /> {t("showAnswer")}
                  </Button>
                )}
              </ActionBar>
            </>
          )}

          {mode === "cloze" && (
            <ClozeCard
              card={current}
              isNew={isNew}
              wordPool={wordPool}
              busy={busy}
              onAnswer={handleClozeAnswer}
            />
          )}

          {mode === "listen" && (
            <ListenCard
              card={current}
              isNew={isNew}
              busy={busy}
              onComplete={handleClozeAnswer}
            />
          )}
        </div>
      )}
    </div>
  );
}
