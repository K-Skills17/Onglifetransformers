"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { FadeUp } from "@/components/motion/fade-up";
import { programs } from "@/content/programs";
import type { Story } from "@/content/schema";

export function StoryDetail({ story }: { story: Story }) {
  const pathname = usePathname();
  const locale = pathname.split("/")[1] || "pt";
  const program = programs.find((p) => p.slug === story.program);

  return (
    <article className="max-w-3xl mx-auto px-6 py-16 md:py-24">
      <FadeUp>
        {/* Portrait */}
        <div className="w-full aspect-[3/4] max-w-md mx-auto bg-forest/10 rounded-2xl overflow-hidden mb-10">
          <div className="w-full h-full bg-gradient-to-b from-forest/5 to-forest/20" />
        </div>
      </FadeUp>

      <FadeUp delay={0.1}>
        <div className="w-12 h-1 bg-amber rounded-full mb-6" />
        <blockquote className="text-3xl md:text-4xl font-serif text-ink leading-snug italic">
          &ldquo;{story.pullQuote}&rdquo;
        </blockquote>
        <p className="mt-6 text-lg text-ink-soft">
          <strong className="text-ink">{story.name}</strong>, {story.place}
        </p>
        {program && (
          <Link
            href={`/${locale}/programas/${program.slug}`}
            className="inline-block mt-2 text-sm text-forest hover:text-forest-light transition-colors"
          >
            {locale === "pt" ? "Programa" : "Program"}: {program.title}
          </Link>
        )}
      </FadeUp>

      <FadeUp delay={0.2}>
        <div className="mt-12 prose prose-lg max-w-none">
          <p className="text-lg text-ink leading-relaxed whitespace-pre-line">
            {story.body}
          </p>
        </div>
      </FadeUp>

      <FadeUp delay={0.3}>
        <div className="mt-16 pt-8 border-t border-line">
          <Link
            href={`/${locale}/historias`}
            className="text-forest font-semibold hover:text-forest-light transition-colors"
          >
            &larr;{" "}
            {locale === "pt"
              ? "Voltar para Historias"
              : "Back to Stories"}
          </Link>
        </div>
      </FadeUp>
    </article>
  );
}
