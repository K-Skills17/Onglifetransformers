"use client";

import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FadeUp } from "@/components/motion/fade-up";
import { Stagger } from "@/components/motion/stagger";
import { stories } from "@/content/stories";

export function StoriesGrid() {
  const t = useTranslations("stories");
  const pathname = usePathname();
  const locale = pathname.split("/")[1] || "pt";

  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="max-w-5xl mx-auto px-6">
        <FadeUp>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-ink text-center">
            {t("title")}
          </h1>
          <p className="mt-4 text-center text-ink-soft max-w-xl mx-auto">
            {locale === "pt"
              ? "Cada historia e de alguem real, com nome e rosto. Porque uma pessoa e mais forte que uma estatistica."
              : "Every story belongs to a real person, with a name and a face. Because one person is more powerful than a statistic."}
          </p>
        </FadeUp>

        <Stagger
          staggerDelay={0.12}
          className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {stories.map((story) => (
            <Link
              key={story.slug}
              href={`/${locale}/historias/${story.slug}`}
              className="group flex gap-6 p-6 bg-card rounded-2xl border border-line hover:border-forest/30 transition-all hover:shadow-lg"
            >
              {/* Portrait placeholder */}
              <div className="w-24 h-24 bg-forest/10 rounded-xl shrink-0 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-b from-forest/5 to-forest/15" />
              </div>
              <div className="flex-1 min-w-0">
                <blockquote className="text-base font-serif italic text-ink leading-snug">
                  &ldquo;{story.pullQuote}&rdquo;
                </blockquote>
                <p className="mt-3 text-sm text-ink-soft">
                  <strong className="text-ink">{story.name}</strong>,{" "}
                  {story.place}
                </p>
                <span className="inline-flex items-center mt-3 text-sm font-semibold text-forest group-hover:translate-x-1 transition-transform">
                  {t("readStory", { name: story.name })} &rarr;
                </span>
              </div>
            </Link>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
