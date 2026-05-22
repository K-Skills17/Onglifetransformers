"use client";

import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FadeUp } from "@/components/motion/fade-up";
import { Stagger } from "@/components/motion/stagger";
import { stories } from "@/content/stories";
import type { Program } from "@/content/schema";

export function ProgramDetail({ program }: { program: Program }) {
  const t = useTranslations("programs");
  const pathname = usePathname();
  const locale = pathname.split("/")[1] || "pt";

  const relatedStories = stories.filter((s) => s.program === program.slug);

  return (
    <article>
      {/* Hero */}
      <section className="relative bg-forest/5 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <FadeUp>
            <span
              className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4 ${
                program.status === "ongoing"
                  ? "bg-forest text-cream"
                  : program.status === "completed"
                    ? "bg-ink-soft text-cream"
                    : "bg-amber text-ink"
              }`}
            >
              {t(program.status)}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-ink">
              {program.title}
            </h1>
            <p className="mt-4 text-xl text-ink-soft font-serif italic">
              {program.oneLine}
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Image placeholder */}
      <div className="max-w-5xl mx-auto px-6 -mt-2">
        <FadeUp>
          <div className="aspect-[16/7] bg-forest/10 rounded-2xl overflow-hidden" />
        </FadeUp>
      </div>

      {/* Content grid */}
      <section className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <FadeUp>
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-forest mb-3">
                {locale === "pt" ? "O Problema" : "The Problem"}
              </h2>
              <p className="text-lg text-ink leading-relaxed">
                {program.problem}
              </p>
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-forest mb-3">
                {locale === "pt" ? "Nossa Abordagem" : "Our Approach"}
              </h2>
              <p className="text-lg text-ink leading-relaxed">
                {program.approach}
              </p>
            </div>
          </FadeUp>
        </div>

        {/* Outcomes */}
        <FadeUp>
          <div className="mt-16">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-forest mb-6">
              {locale === "pt" ? "Resultados" : "Outcomes"}
            </h2>
            <Stagger staggerDelay={0.08} className="space-y-4">
              {program.outcomes.map((outcome, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-5 bg-forest/5 rounded-xl"
                >
                  <div className="w-2 h-2 mt-2 rounded-full bg-amber shrink-0" />
                  <p className="text-base text-ink">{outcome}</p>
                </div>
              ))}
            </Stagger>
          </div>
        </FadeUp>

        {/* Reach */}
        <FadeUp>
          <div className="mt-16 p-8 bg-forest text-cream rounded-2xl text-center">
            <p className="text-5xl font-serif font-bold">
              {program.reach.value.toLocaleString("pt-BR")}
            </p>
            <p className="mt-2 text-cream/70">
              {program.reach.metric} · {program.reach.unit}
            </p>
          </div>
        </FadeUp>

        {/* Related stories */}
        {relatedStories.length > 0 && (
          <div className="mt-16">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-forest mb-6">
              {locale === "pt" ? "Historias deste programa" : "Stories from this program"}
            </h2>
            <Stagger staggerDelay={0.1} className="space-y-6">
              {relatedStories.map((story) => (
                <Link
                  key={story.slug}
                  href={`/${locale}/historias/${story.slug}`}
                  className="block p-6 bg-card rounded-xl border border-line hover:border-forest/30 transition-colors"
                >
                  <blockquote className="text-lg font-serif italic text-ink">
                    &ldquo;{story.pullQuote}&rdquo;
                  </blockquote>
                  <p className="mt-3 text-sm text-ink-soft">
                    <strong>{story.name}</strong>, {story.place}
                  </p>
                </Link>
              ))}
            </Stagger>
          </div>
        )}
      </section>
    </article>
  );
}
