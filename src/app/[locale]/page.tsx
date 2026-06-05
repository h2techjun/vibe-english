import { setRequestLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LanguageToggle } from "@/components/language-toggle";
import { Brain, Mic2, GraduationCap, PencilLine, ArrowRight } from "lucide-react";
import { BRAND } from "@/lib/brand";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function LandingPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("landing");
  const tApp = await getTranslations("app");
  const tNav = await getTranslations("nav");

  const features = [
    { icon: Brain, key: "srs" as const },
    { icon: Mic2, key: "pronunciation" as const },
    { icon: GraduationCap, key: "levels" as const },
    { icon: PencilLine, key: "ai" as const },
  ];

  const steps = ["step1", "step2", "step3", "step4"] as const;

  return (
    <div className="flex flex-col flex-1">
      <header className="sticky top-0 z-10 border-b border-border/40 bg-background/80 backdrop-blur">
        <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between px-4">
          <Link href="/" prefetch={false} className="flex items-center gap-2 font-semibold">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-slate-900 to-blue-900 text-sm font-bold text-white">
              {BRAND.logoMark}
            </span>
            {BRAND.name}
          </Link>
          <div className="flex items-center gap-2">
            <LanguageToggle />
            <Button variant="ghost" size="sm">
              {tNav("signIn")}
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="mx-auto w-full max-w-6xl px-4 py-20 sm:py-28">
          <div className="flex flex-col items-center text-center">
            <Badge variant="secondary" className="mb-6">
              {tApp("tagline")}
            </Badge>
            <h1 className="max-w-3xl text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              {t("hero.title")}
            </h1>
            <p className="mt-6 max-w-2xl text-balance text-lg text-muted-foreground">
              {t("hero.subtitle")}
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button
                size="lg"
                className="gap-2"
                nativeButton={false}
                render={<Link href="/study" prefetch={false} />}
              >
                {t("hero.ctaPrimary")} <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                nativeButton={false}
                render={<Link href="/decks" prefetch={false} />}
              >
                {t("hero.ctaSecondary")}
              </Button>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-4 py-16">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {features.map(({ icon: Icon, key }) => (
              <Card key={key} className="border-border/60">
                <CardContent className="flex flex-col gap-3 p-6">
                  <Icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  <h3 className="font-semibold">{t(`features.${key}.title`)}</h3>
                  <p className="text-sm text-muted-foreground">
                    {t(`features.${key}.desc`)}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-4xl px-4 py-20">
          <h2 className="text-center text-3xl font-bold tracking-tight">
            {t("howItWorks.title")}
          </h2>
          <ol className="mt-12 space-y-4">
            {steps.map((s, idx) => (
              <li
                key={s}
                className="flex gap-4 rounded-lg border border-border/60 bg-card p-5"
              >
                <span className="grid h-8 w-8 flex-shrink-0 place-items-center rounded-full bg-blue-600 text-sm font-semibold text-white">
                  {idx + 1}
                </span>
                <p className="pt-1 text-base">{t(`howItWorks.${s}`)}</p>
              </li>
            ))}
          </ol>
        </section>
      </main>

      <footer className="border-t border-border/40 py-8">
        <div className="mx-auto max-w-6xl px-4 text-center text-sm text-muted-foreground">
          © 2026 {BRAND.name} · Vibe Coding by Minerva
        </div>
      </footer>
    </div>
  );
}
