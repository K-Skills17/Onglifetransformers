"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { FadeUp } from "@/components/motion/fade-up";
import { timeline } from "@/content/timeline";

export function TimelinePreview() {
  const pathname = usePathname();
  const locale = pathname.split("/")[1] || "pt";
  const recentEvents = timeline.slice(-4);

  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="max-w-4xl mx-auto px-6">
        <FadeUp>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-ink text-center mb-14">
            {locale === "pt" ? "Nossa Jornada" : "Our Journey"}
          </h2>
        </FadeUp>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-line -translate-x-1/2" />

          <div className="space-y-12">
            {recentEvents.map((event, i) => (
              <FadeUp key={event.date} delay={i * 0.1}>
                <div
                  className={`relative flex items-start gap-6 md:gap-12 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-forest border-4 border-cream z-10" />

                  {/* Content */}
                  <div
                    className={`ml-14 md:ml-0 md:w-[calc(50%-3rem)] ${
                      i % 2 === 0 ? "md:text-right md:pr-8" : "md:text-left md:pl-8"
                    }`}
                  >
                    <span className="text-sm font-semibold text-amber">
                      {event.date}
                    </span>
                    <h3 className="text-lg font-serif font-bold text-ink mt-1">
                      {event.title}
                    </h3>
                    <p className="text-sm text-ink-soft mt-1 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>

        <FadeUp delay={0.4}>
          <div className="text-center mt-14">
            <Link
              href={`/${locale}/impacto`}
              className="inline-flex items-center text-forest font-semibold hover:text-forest-light transition-colors"
            >
              {locale === "pt"
                ? "Veja nossa jornada completa"
                : "See our full journey"}{" "}
              &rarr;
            </Link>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
