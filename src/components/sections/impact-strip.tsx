"use client";

import { useTranslations } from "next-intl";
import { CountUp } from "@/components/motion/count-up";
import { FadeUp } from "@/components/motion/fade-up";
import { impactMetrics } from "@/content/impact";

export function ImpactStrip() {
  const t = useTranslations("impact");

  return (
    <section id="impacto" className="py-20 md:py-28 bg-card">
      <div className="max-w-6xl mx-auto px-6">
        <FadeUp>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 text-center">
            {impactMetrics.map((metric) => (
              <div key={metric.label} className="group">
                <p className="text-4xl sm:text-5xl md:text-[3.5rem] font-serif font-bold text-forest leading-none">
                  <CountUp
                    value={metric.value}
                    suffix={metric.unit || ""}
                  />
                </p>
                <p className="mt-3 text-sm text-ink-soft font-sans">
                  {metric.label}
                </p>
                {metric.since && (
                  <p className="mt-1 text-xs text-ink-soft/50 font-sans opacity-0 group-hover:opacity-100 transition-opacity">
                    {metric.since}
                    {metric.source && ` · ${metric.source}`}
                  </p>
                )}
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
