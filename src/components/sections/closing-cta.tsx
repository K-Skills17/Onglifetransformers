"use client";

import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FadeUp } from "@/components/motion/fade-up";
import { Stagger } from "@/components/motion/stagger";

const conversionPaths = [
  {
    key: "donate",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
      </svg>
    ),
    hrefKey: "/apoie",
    descPt: "Cada doação, por menor que seja, financia um treino, uma refeição, um sorriso. Faça parte desta história.",
    descEn: "Every donation, however small, funds a training session, a meal, a smile. Be part of this story.",
  },
  {
    key: "volunteer",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    hrefKey: "/contato",
    descPt: "Todo talento é bem-vindo: esporte, educação, saúde, comunicação. Venha transformar junto com a gente.",
    descEn: "Every skill is welcome: sport, education, health, communication. Come transform lives with us.",
  },
  {
    key: "partner",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
      </svg>
    ),
    hrefKey: "/apoie",
    descPt: "Empresas e instituições que investem em impacto social real. Construa com a gente um legado em Itaquera.",
    descEn: "Companies and institutions investing in real social impact. Build a legacy in Itaquera with us.",
  },
];

export function ClosingCta() {
  const t = useTranslations("cta");
  const pathname = usePathname();
  const locale = pathname.split("/")[1] || "pt";

  return (
    <section
      id="apoie"
      className="relative py-24 md:py-32 bg-forest overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(135deg, rgba(31,77,58,0.97) 0%, rgba(28,26,23,0.97) 100%), url('/images/gallery-1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Decorative circle */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-amber/5 pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-cream/3 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Heading */}
        <FadeUp>
          <p className="text-xs font-semibold uppercase tracking-widest text-amber text-center mb-5">
            {locale === "pt" ? "Faca Parte" : "Get Involved"}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-cream text-center leading-snug max-w-3xl mx-auto">
            {t("closing")}
          </h2>
        </FadeUp>

        {/* 3 conversion cards */}
        <Stagger staggerDelay={0.1} className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-5">
          {conversionPaths.map((path, i) => {
            const labels = [t("support"), t("volunteer"), t("partner")];
            return (
              <Link
                key={path.key}
                href={`/${locale}${path.hrefKey}`}
                className="group flex flex-col items-center text-center p-8 rounded-2xl border border-cream/10 bg-cream/5 hover:bg-cream/10 hover:border-amber/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-amber/15 text-amber mb-5 group-hover:bg-amber/25 transition-colors">
                  {path.icon}
                </div>
                <h3 className="text-xl font-serif font-bold text-cream mb-3">
                  {labels[i]}
                </h3>
                <p className="text-sm text-cream/60 leading-relaxed flex-1">
                  {locale === "pt" ? path.descPt : path.descEn}
                </p>
                <span className="mt-6 inline-flex items-center text-sm font-semibold text-amber group-hover:gap-2 transition-all">
                  {locale === "pt" ? "Saiba mais" : "Learn more"} &rarr;
                </span>
              </Link>
            );
          })}
        </Stagger>

        {/* Contact strip */}
        <FadeUp delay={0.4}>
          <div className="mt-16 pt-10 border-t border-cream/10 flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-12">
            <p className="text-sm text-cream/50">
              {locale === "pt" ? "Fale diretamente conosco:" : "Reach us directly:"}
            </p>
            <a
              href="tel:+5511947396520"
              className="flex items-center gap-2.5 text-cream/80 hover:text-amber transition-colors font-medium"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
              </svg>
              (11) 94739-6520
            </a>
            <a
              href="mailto:lifetransformers.ong@gmail.com"
              className="flex items-center gap-2.5 text-cream/80 hover:text-amber transition-colors font-medium"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              lifetransformers.ong@gmail.com
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
