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
    <section className="py-20 md:py-28 bg-forest/[0.03]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Portrait placeholder */}
          <FadeUp>
            <div className="aspect-[3/4] bg-forest/10 rounded-2xl overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-t from-ink/20 to-transparent" />
            </div>
          </FadeUp>

          {/* Story content */}
          <FadeUp delay={0.15}>
            <div>
              <div className="w-12 h-1 bg-amber rounded-full mb-6" />
              <blockquote className="text-2xl md:text-3xl font-serif text-ink leading-snug italic">
                &ldquo;{story.pullQuote}&rdquo;
              </blockquote>
              <p className="mt-6 text-base text-ink-soft font-sans">
                <strong className="text-ink">{story.name}</strong>, {story.place}
              </p>
              <p className="mt-4 text-sm text-ink-soft leading-relaxed">
                {story.body.substring(0, 200)}...
              </p>
              <Link
                href={`/${locale}/historias/${story.slug}`}
                className="inline-flex items-center mt-6 text-forest font-semibold hover:text-forest-light transition-colors"
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
