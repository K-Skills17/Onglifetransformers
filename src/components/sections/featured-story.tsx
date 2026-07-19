"use client";

import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FadeUp } from "@/components/motion/fade-up";
import { stories } from "@/content/stories";

export function FeaturedStory() {
  const t = useTranslations("stories");
  const pathname = usePathname();
  const locale = pathname.split("/")[1] || "pt";
  const story = stories[0];

  if (!story) return null;

  return (
    <section className="py-20 md:py-28 bg-ink overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Portrait */}
          <FadeUp>
            <div
              className="aspect-[3/4] rounded-2xl overflow-hidden relative"
              style={{
                backgroundImage: `linear-gradient(to top, rgba(28,26,23,0.5) 0%, rgba(28,26,23,0.05) 50%), url('${story.portrait}')`,
                backgroundSize: "cover",
                backgroundPosition: "center top",
              }}
            />
          </FadeUp>

          {/* Story content */}
          <FadeUp delay={0.15}>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-amber mb-6">
                {locale === "pt" ? "Histórias reais" : "Real stories"}
              </p>
              <div className="w-12 h-1 bg-amber rounded-full mb-6" />
              <blockquote className="text-2xl md:text-3xl font-serif text-cream leading-snug italic">
                &ldquo;{story.pullQuote}&rdquo;
              </blockquote>
              <p className="mt-6 text-base text-cream/60 font-sans">
                <strong className="text-cream">{story.name}</strong>, {story.place}
              </p>
              <p className="mt-4 text-sm text-cream/50 leading-relaxed">
                {story.body.startsWith("[")
                  ? locale === "pt"
                    ? "Cada historia aqui e real. Cada nome, um caminho transformado. Conheca mais."
                    : "Every story here is real. Every name, a path transformed. Learn more."
                  : story.body.substring(0, 200) + "..."}
              </p>
              <Link
                href={`/${locale}/historias/${story.slug}`}
                className="inline-flex items-center mt-6 text-amber font-semibold hover:text-amber/80 transition-colors"
              >
                {t("readStory", { name: story.name })} &rarr;
              </Link>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
