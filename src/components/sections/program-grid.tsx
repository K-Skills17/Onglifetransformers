"use client";

import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Stagger } from "@/components/motion/stagger";
import { FadeUp } from "@/components/motion/fade-up";
import { programs } from "@/content/programs";

export function ProgramGrid() {
  const t = useTranslations("programs");
  const pathname = usePathname();
  const locale = pathname.split("/")[1] || "pt";

  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <FadeUp>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-ink text-center">
            {t("title")}
          </h2>
        </FadeUp>

        <Stagger
          staggerDelay={0.12}
          className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {programs.map((program) => (
            <Link
              key={program.slug}
              href={`/${locale}/programas/${program.slug}`}
              className="group relative bg-card rounded-2xl overflow-hidden border border-line hover:border-forest/30 transition-all hover:shadow-lg"
            >
              {/* Image placeholder */}
              <div className="aspect-[4/3] bg-forest/10 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
                {/* Status tag */}
                <span
                  className={`absolute top-4 right-4 text-xs font-semibold px-3 py-1 rounded-full ${
                    program.status === "ongoing"
                      ? "bg-forest text-cream"
                      : program.status === "completed"
                        ? "bg-ink-soft text-cream"
                        : "bg-amber text-ink"
                  }`}
                >
                  {t(program.status)}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold text-ink group-hover:text-forest transition-colors">
                  {program.title}
                </h3>
                <p className="mt-2 text-sm text-ink-soft leading-relaxed">
                  {program.oneLine}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs text-ink-soft/70">
                    {program.reach.value.toLocaleString("pt-BR")}{" "}
                    {program.reach.metric}
                  </span>
                  <span className="text-sm font-semibold text-forest group-hover:translate-x-1 transition-transform">
                    {t("learnMore")} &rarr;
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
