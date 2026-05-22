"use client";

import { usePathname } from "next/navigation";
import { FadeUp } from "@/components/motion/fade-up";
import { ContactForm } from "@/components/sections/contact-form";

export function ContactPage() {
  const pathname = usePathname();
  const locale = pathname.split("/")[1] || "pt";
  const isPt = locale === "pt";

  return (
    <article>
      <section className="py-16 md:py-24 bg-forest/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeUp>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-ink">
              {isPt ? "Contato" : "Contact"}
            </h1>
          </FadeUp>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact info */}
          <FadeUp>
            <div className="space-y-8">
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-wider text-forest mb-3">
                  {isPt ? "Endereco" : "Address"}
                </h2>
                <p className="text-ink-soft">
                  [Rua, Numero]<br />
                  [Bairro] — [Cidade/UF]<br />
                  [CEP]
                </p>
              </div>

              <div>
                <h2 className="text-sm font-semibold uppercase tracking-wider text-forest mb-3">
                  E-mail
                </h2>
                <p className="text-ink-soft">
                  <a
                    href="mailto:contato@lifetransformers.com.br"
                    className="text-forest hover:text-forest-light transition-colors"
                  >
                    contato@lifetransformers.com.br
                  </a>
                </p>
              </div>
            </div>
          </FadeUp>

          {/* Form */}
          <FadeUp delay={0.1}>
            <ContactForm type="general" />
          </FadeUp>
        </div>
      </div>
    </article>
  );
}
