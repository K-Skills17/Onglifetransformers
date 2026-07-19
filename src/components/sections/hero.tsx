"use client";

import { useTranslations } from "next-intl";
import { FadeUp } from "@/components/motion/fade-up";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { useRef } from "react";

export function Hero() {
  const t = useTranslations("hero");
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 80]);

  return (
    <section ref={ref} className="relative min-h-[96vh] flex items-center overflow-hidden bg-forest">
      {/* Background — parallax */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          y: bgY,
          height: "120%",
          top: "-10%",
          backgroundImage:
            "linear-gradient(180deg, rgba(28,26,23,0.55) 0%, rgba(28,26,23,0.3) 50%, rgba(28,26,23,0.65) 100%), url('/images/hero.jpg')",
          backgroundColor: "var(--color-forest)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-28 pb-20 text-center">
        {/* Location badge */}
        <FadeUp>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cream/25 bg-cream/10 backdrop-blur-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-amber animate-pulse" />
            <span className="text-xs font-semibold text-cream/80 uppercase tracking-widest">
              Itaquera, São Paulo
            </span>
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-cream leading-[1.08] tracking-tight">
            {t("headline")}
          </h1>
        </FadeUp>
        <FadeUp delay={0.2}>
          <p className="mt-7 text-base sm:text-lg md:text-xl text-cream/80 max-w-2xl mx-auto font-sans leading-relaxed">
            {t("subhead")}
          </p>
        </FadeUp>
        <FadeUp delay={0.35}>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#apoie"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-xl bg-amber text-ink hover:bg-amber/90 transition-colors shadow-lg shadow-amber/30"
            >
              {t("cta")}
            </a>
            <a
              href="#impacto"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-xl border-2 border-cream/35 text-cream hover:bg-cream/10 transition-colors backdrop-blur-sm"
            >
              {t("ctaSecondary")}
            </a>
          </div>
        </FadeUp>

        {/* Contact strip */}
        <FadeUp delay={0.5}>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-cream/55 text-sm">
            <a href="tel:+5511947396520" className="flex items-center gap-2 hover:text-amber transition-colors">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
              </svg>
              (11) 94739-6520
            </a>
            <span className="hidden sm:block text-cream/25">|</span>
            <a href="mailto:lifetransformers.ong@gmail.com" className="flex items-center gap-2 hover:text-amber transition-colors">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              lifetransformers.ong@gmail.com
            </a>
          </div>
        </FadeUp>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(251,247,240,0.4)" strokeWidth="2">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </motion.div>
    </section>
  );
}
