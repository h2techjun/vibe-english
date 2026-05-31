"use client";

import { useLiveQuery } from "dexie-react-hooks";
import { useTranslations } from "next-intl";
import { toast } from "sonner";
import { useState } from "react";
import { db } from "@/lib/db";
import { DEFAULT_SETTINGS, type AppSettings } from "@/types/srs";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import {
  notificationPermission,
  requestNotificationPermission,
} from "@/features/notifications/reminder";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { Minus, Plus, Trash2 } from "lucide-react";

const SPEEDS = [
  { key: "speedSlow", value: 0.6 },
  { key: "speedNormal", value: 0.95 },
  { key: "speedFast", value: 1.2 },
] as const;

export function SettingsView() {
  const t = useTranslations("settings");
  const settings = useLiveQuery(() => db.settings.get("main"));
  const s: AppSettings = settings ?? DEFAULT_SETTINGS;

  async function update(patch: Partial<AppSettings>) {
    await db.settings.update("main", patch);
    toast.success(t("saved"));
  }

  return (
    <div className="flex flex-col gap-6">
      {/* 학습량 */}
      <Section title={t("study")}>
        <Row label={t("dailyNew")} desc={t("dailyNewDesc")}>
          <Stepper
            value={s.dailyNewLimit}
            min={5}
            max={50}
            step={5}
            onChange={(v) => update({ dailyNewLimit: v })}
            format={(v) => t("cardsUnit", { n: v })}
          />
        </Row>
        <Row label={t("dailyReview")} desc={t("dailyReviewDesc")}>
          <Stepper
            value={s.dailyReviewLimit}
            min={0}
            max={200}
            step={10}
            onChange={(v) => update({ dailyReviewLimit: v })}
            format={(v) => (v === 0 ? t("unlimited") : t("cardsUnit", { n: v }))}
          />
        </Row>
      </Section>

      {/* 발음 */}
      <Section title={t("audio")}>
        <Row label={t("ttsSpeed")}>
          <div className="flex gap-1 rounded-lg bg-muted p-1">
            {SPEEDS.map(({ key, value }) => (
              <button
                key={key}
                onClick={() => update({ ttsRate: value })}
                className={cn(
                  "rounded-md px-3 py-1.5 text-sm font-medium transition-colors",
                  Math.abs(s.ttsRate - value) < 0.01
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {t(key)}
              </button>
            ))}
          </div>
        </Row>
      </Section>

      {/* 복습 알림 */}
      <Section title={t("notifications")}>
        <Row label={t("notificationsLabel")} desc={t("notificationsDesc")}>
          <NotificationToggle
            enabled={!!s.notificationsEnabled}
            onChange={(v) => update({ notificationsEnabled: v })}
            deniedMsg={t("notifDenied")}
          />
        </Row>
      </Section>

      {/* 데이터 관리 */}
      <Section title={t("data")}>
        <Row label={t("resetData")} desc={t("resetDataDesc")}>
          <ResetDialog t={t} />
        </Row>
      </Section>
    </div>
  );
}

function NotificationToggle({
  enabled,
  onChange,
  deniedMsg,
}: {
  enabled: boolean;
  onChange: (v: boolean) => void;
  deniedMsg: string;
}) {
  async function handle(checked: boolean) {
    if (checked) {
      const granted = await requestNotificationPermission();
      if (!granted) {
        if (notificationPermission() === "denied") toast.error(deniedMsg);
        return; // 권한 미허용 시 토글 유지 안 함
      }
    }
    onChange(checked);
  }

  return <Switch checked={enabled} onCheckedChange={handle} />;
}

function ResetDialog({ t }: { t: ReturnType<typeof useTranslations> }) {
  const [open, setOpen] = useState(false);

  async function reset() {
    await db.transaction("rw", db.progress, db.studyLog, async () => {
      await db.progress.clear();
      await db.studyLog.clear();
    });
    setOpen(false);
    toast.success(t("resetDone"));
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        render={
          <Button variant="destructive" size="sm" className="gap-1.5" />
        }
      >
        <Trash2 className="h-4 w-4" />
        {t("reset")}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{t("resetConfirmTitle")}</DialogTitle>
          <DialogDescription>{t("resetConfirmDesc")}</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose render={<Button variant="outline" />}>
            {t("cancel")}
          </DialogClose>
          <Button variant="destructive" onClick={reset}>
            {t("reset")}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col gap-3">
      <h2 className="text-sm font-semibold text-muted-foreground">{title}</h2>
      <Card className="border-border/60">
        <CardContent className="flex flex-col divide-y divide-border/60 p-0">
          {children}
        </CardContent>
      </Card>
    </section>
  );
}

function Row({
  label,
  desc,
  children,
}: {
  label: string;
  desc?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-between gap-4 p-4">
      <div className="min-w-0">
        <p className="font-medium">{label}</p>
        {desc && <p className="text-xs text-muted-foreground">{desc}</p>}
      </div>
      <div className="shrink-0">{children}</div>
    </div>
  );
}

function Stepper({
  value,
  min,
  max,
  step,
  onChange,
  format,
}: {
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
  format?: (v: number) => string;
}) {
  return (
    <div className="flex items-center gap-2">
      <Button
        variant="outline"
        size="icon-sm"
        disabled={value <= min}
        onClick={() => onChange(Math.max(min, value - step))}
        aria-label="decrease"
      >
        <Minus className="h-4 w-4" />
      </Button>
      <span className="w-16 text-center text-sm font-medium tabular-nums">
        {format ? format(value) : value}
      </span>
      <Button
        variant="outline"
        size="icon-sm"
        disabled={value >= max}
        onClick={() => onChange(Math.min(max, value + step))}
        aria-label="increase"
      >
        <Plus className="h-4 w-4" />
      </Button>
    </div>
  );
}
