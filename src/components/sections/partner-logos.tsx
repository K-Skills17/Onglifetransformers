"use client";

import { FadeUp } from "@/components/motion/fade-up";
import { partners } from "@/content/partners";

export function PartnerLogos() {
  return (
    <section className="py-16 md:py-20 bg-card border-t border-line">
      <div className="max-w-5xl mx-auto px-6">
        <FadeUp>
          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-14">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="flex items-center justify-center h-10 opacity-40 hover:opacity-70 transition-opacity grayscale hover:grayscale-0"
                title={partner.name}
              >
                {/* Replace with actual logos */}
                <div className="px-4 py-2 border border-line rounded-lg text-xs font-semibold text-ink-soft">
                  {partner.name}
                </div>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
