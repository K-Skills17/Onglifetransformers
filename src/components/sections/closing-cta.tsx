"use client";

import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FadeUp } from "@/components/motion/fade-up";

export function ClosingCta() {
  const t = useTranslations("cta");
  const pathname = usePathname();
  const locale = pathname.split("/")[1] || "pt";

  return (
    <section id="apoie" className="py-20 md:py-28 bg-amber/10">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <FadeUp>
          <p className="text-2xl md:text-3xl lg:text-4xl font-serif text-ink leading-snug">
            {t("closing")}
          </p>
        </FadeUp>
        <FadeUp delay={0.15}>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/${locale}/apoie`}
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-xl bg-amber text-ink hover:bg-amber/90 transition-colors shadow-lg shadow-amber/20"
            >
              {t("support")}
            </Link>
            <Link
              href={`/${locale}/contato`}
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-xl bg-forest text-cream hover:bg-forest-light transition-colors"
            >
              {t("partner")}
            </Link>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
