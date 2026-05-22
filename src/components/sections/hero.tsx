"use client";

import { useTranslations } from "next-intl";
import { FadeUp } from "@/components/motion/fade-up";
import { Parallax } from "@/components/motion/parallax";

export function Hero() {
  const t = useTranslations("hero");

  return (
    <Parallax offset={80} className="relative min-h-[92vh] flex items-center">
      {/* Background — replace with real photo */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(28,26,23,0.65), rgba(28,26,23,0.35)), url('/images/hero-placeholder.jpg')",
          backgroundColor: "var(--color-forest)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-24 pb-16 text-center">
        <FadeUp>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-cream leading-[1.08] tracking-tight">
            {t("headline")}
          </h1>
        </FadeUp>
        <FadeUp delay={0.15}>
          <p className="mt-7 text-base sm:text-lg md:text-xl text-cream/75 max-w-2xl mx-auto font-sans leading-relaxed">
            {t("subhead")}
          </p>
        </FadeUp>
        <FadeUp delay={0.3}>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#apoie"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-xl bg-amber text-ink hover:bg-amber/90 transition-colors shadow-lg shadow-amber/20"
            >
              {t("cta")}
            </a>
            <a
              href="#impacto"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-xl border-2 border-cream/30 text-cream hover:bg-cream/10 transition-colors"
            >
              {t("ctaSecondary")}
            </a>
          </div>
        </FadeUp>
      </div>
    </Parallax>
  );
}
