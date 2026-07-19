"use client";

import { usePathname } from "next/navigation";
import { FadeUp } from "@/components/motion/fade-up";
import { CountUp } from "@/components/motion/count-up";
import { TimelineDraw } from "@/components/motion/timeline-draw";
import { impactMetrics } from "@/content/impact";
import { timeline } from "@/content/timeline";
import { stories } from "@/content/stories";

export function ImpactPage() {
  const pathname = usePathname();
  const locale = pathname.split("/")[1] || "pt";
  const story = stories[0];

  return (
    <article>
      {/* Hero metrics */}
      <section className="py-16 md:py-24 bg-forest">
        <div className="max-w-6xl mx-auto px-6">
          <FadeUp>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-cream text-center">
              {locale === "pt" ? "Nosso Impacto" : "Our Impact"}
            </h1>
          </FadeUp>
          <FadeUp delay={0.15}>
            <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
              {impactMetrics.map((metric) => (
                <div key={metric.label}>
                  <p className="text-4xl md:text-5xl font-serif font-bold text-amber">
                    <CountUp value={metric.value} suffix={metric.unit || ""} />
                  </p>
                  <p className="mt-2 text-sm text-cream/70">{metric.label}</p>
                  {metric.source && (
                    <p className="mt-1 text-xs text-cream/40">{metric.source}</p>
                  )}
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Photo strip */}
      <section className="py-10 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-3 gap-3">
            {["/images/programs/esporte.jpg", "/images/gallery-4.jpg", "/images/programs/lazer.jpg"].map((src) => (
              <div
                key={src}
                className="rounded-xl overflow-hidden"
                style={{ height: "180px" }}
              >
                <div
                  className="w-full h-full"
                  style={{ backgroundImage: `url('${src}')`, backgroundSize: "cover", backgroundPosition: "center" }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Timeline */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-4xl mx-auto px-6">
          <FadeUp>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-ink text-center mb-16">
              {locale === "pt" ? "Nossa Jornada Completa" : "Our Full Journey"}
            </h2>
          </FadeUp>

          <TimelineDraw>
            <div className="space-y-16">
              {timeline.map((event, i) => (
                <FadeUp key={event.date} delay={i * 0.08}>
                  <div
                    className={`relative flex items-start gap-8 md:gap-16 ${
                      i % 2 === 0
                        ? "md:flex-row"
                        : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Dot */}
                    <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-forest border-4 border-cream z-10 shadow-sm" />

                    {/* Content card */}
                    <div
                      className={`ml-16 md:ml-0 md:w-[calc(50%-2.5rem)] p-6 bg-card rounded-xl border border-line ${
                        i % 2 === 0
                          ? "md:text-right md:mr-auto"
                          : "md:text-left md:ml-auto"
                      }`}
                    >
                      <span
                        className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-2 ${
                          event.type === "milestone"
                            ? "bg-amber/20 text-amber"
                            : event.type === "program"
                              ? "bg-forest/10 text-forest"
                              : event.type === "recognition"
                                ? "bg-clay/10 text-clay"
                                : "bg-ink/5 text-ink-soft"
                        }`}
                      >
                        {event.date}
                      </span>
                      <h3 className="text-lg font-serif font-bold text-ink">
                        {event.title}
                      </h3>
                      <p className="mt-2 text-sm text-ink-soft leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </TimelineDraw>
        </div>
      </section>


      {/* Closing story */}
      {story && (
        <section className="py-20 bg-cream">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <FadeUp>
              <div className="w-12 h-1 bg-amber rounded-full mx-auto mb-6" />
              <blockquote className="text-2xl md:text-3xl font-serif italic text-ink leading-snug">
                &ldquo;{story.pullQuote}&rdquo;
              </blockquote>
              <p className="mt-4 text-ink-soft">
                <strong className="text-ink">{story.name}</strong>,{" "}
                {story.place}
              </p>
            </FadeUp>
          </div>
        </section>
      )}
    </article>
  );
}
