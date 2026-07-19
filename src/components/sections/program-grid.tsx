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
          <p className="text-xs font-semibold uppercase tracking-widest text-forest/50 text-center mb-4">
            {t("title")}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-ink text-center">
            {locale === "pt"
              ? "Transformação que você pode ver"
              : "Transformation you can see"}
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
              className="group relative bg-card rounded-2xl overflow-hidden border border-line hover:border-forest/30 transition-all hover:shadow-xl hover:-translate-y-1 duration-300"
            >
              {/* Image */}
              <div
                className="aspect-[4/3] relative overflow-hidden"
                style={{
                  backgroundImage: `linear-gradient(to top, rgba(28,26,23,0.75) 0%, rgba(28,26,23,0.15) 60%), url('${program.hero}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* Status tag */}
                <span
                  className={`absolute top-4 right-4 text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm ${
                    program.status === "ongoing"
                      ? "bg-forest/80 text-cream"
                      : program.status === "completed"
                        ? "bg-ink-soft/80 text-cream"
                        : "bg-amber/80 text-ink"
                  }`}
                >
                  {t(program.status)}
                </span>

                {/* Title overlay on image */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-xl font-serif font-bold text-cream">
                    {program.title}
                  </h3>
                </div>
              </div>

              <div className="p-6">
                <p className="text-sm text-ink-soft leading-relaxed">
                  {program.oneLine}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs font-semibold text-forest/60 bg-forest/8 px-2.5 py-1 rounded-full">
                    {program.reach.value.toLocaleString("pt-BR")}{" "}
                    {program.reach.metric}
                  </span>
                  <span className="text-sm font-semibold text-forest group-hover:translate-x-1 transition-transform duration-200">
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
