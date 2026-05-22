"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { FadeUp } from "@/components/motion/fade-up";

export function MissionPreview() {
  const pathname = usePathname();
  const locale = pathname.split("/")[1] || "pt";

  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <FadeUp>
          <div className="w-16 h-1 bg-amber rounded-full mx-auto mb-8" />
          <p className="text-xl md:text-2xl lg:text-3xl font-serif text-ink leading-relaxed">
            {locale === "pt"
              ? "[Uma frase que resume o PORQUE da organizacao existir. Nao o que ela faz — mas por que o mundo precisa que ela exista. Curta, direta, impossivel de esquecer.]"
              : "[One sentence that captures WHY this organization exists. Not what it does — but why the world needs it to exist. Short, direct, impossible to forget.]"}
          </p>
          <Link
            href={`/${locale}/sobre`}
            className="inline-flex items-center mt-8 text-forest font-semibold hover:text-forest-light transition-colors"
          >
            {locale === "pt" ? "Conheca nossa historia" : "Learn our story"}{" "}
            &rarr;
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}
