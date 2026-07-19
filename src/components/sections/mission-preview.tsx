"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { FadeUp } from "@/components/motion/fade-up";

const activities = [
  "Esporte",
  "Assistência Social",
  "Lazer",
  "Cultura",
  "Educação",
  "Saúde",
];

const values = [
  "Amor", "Fé", "Caráter", "Família", "Ética",
  "Respeito", "Disciplina", "Responsabilidade", "Equilíbrio", "Transformação",
];

export function MissionPreview() {
  const pathname = usePathname();
  const locale = pathname.split("/")[1] || "pt";

  return (
    <section className="py-24 md:py-32 bg-cream overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        {/* Label */}
        <FadeUp>
          <p className="text-xs font-semibold uppercase tracking-widest text-forest/50 text-center mb-6">
            {locale === "pt" ? "Nossa Missão" : "Our Mission"}
          </p>
        </FadeUp>

        {/* Mission quote */}
        <FadeUp delay={0.1}>
          <div className="relative text-center">
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-9xl font-serif text-forest/8 leading-none select-none pointer-events-none">
              &ldquo;
            </span>
            <p className="relative text-xl md:text-2xl lg:text-3xl font-serif text-ink leading-relaxed">
              {locale === "pt"
                ? "Transformar vidas de crianças, adolescentes e famílias, por meio do esporte, cultura e lazer com a união de esforços de pessoas solidárias."
                : "Transform the lives of children, youth and families through sport, culture and leisure — united by the efforts of compassionate people."}
            </p>
          </div>
        </FadeUp>

        {/* Divider */}
        <FadeUp delay={0.2}>
          <div className="flex items-center gap-4 my-10">
            <div className="flex-1 h-px bg-line" />
            <div className="w-2 h-2 rounded-full bg-amber" />
            <div className="flex-1 h-px bg-line" />
          </div>
        </FadeUp>

        {/* Activities */}
        <FadeUp delay={0.25}>
          <p className="text-xs font-semibold uppercase tracking-widest text-ink/40 text-center mb-4">
            {locale === "pt" ? "O que desenvolvemos" : "What we do"}
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {activities.map((a) => (
              <span
                key={a}
                className="px-4 py-1.5 rounded-full bg-forest/8 text-forest text-sm font-semibold border border-forest/15"
              >
                {a}
              </span>
            ))}
          </div>
        </FadeUp>

        {/* Vision */}
        <FadeUp delay={0.3}>
          <p className="text-center text-base text-ink-soft leading-relaxed max-w-2xl mx-auto">
            {locale === "pt"
              ? "Ser referência por transformar vidas, através da geração de oportunidades sociais na Cidade de São Paulo."
              : "To be a reference for transforming lives through the generation of social opportunities in the City of São Paulo."}
          </p>
        </FadeUp>

        {/* Values */}
        <FadeUp delay={0.35}>
          <div className="mt-8 flex flex-wrap justify-center gap-1.5">
            {values.map((v) => (
              <span
                key={v}
                className="px-3 py-1 rounded-full bg-amber/10 text-amber-900 text-xs font-medium border border-amber/20"
              >
                {v}
              </span>
            ))}
          </div>
        </FadeUp>

        {/* CTA link */}
        <FadeUp delay={0.4}>
          <div className="text-center mt-10">
            <Link
              href={`/${locale}/sobre`}
              className="inline-flex items-center text-forest font-semibold hover:text-forest-light transition-colors"
            >
              {locale === "pt" ? "Conheça nossa história" : "Learn our story"}{" "}
              &rarr;
            </Link>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
