"use client";

import { usePathname } from "next/navigation";
import { FadeUp } from "@/components/motion/fade-up";
import { Stagger } from "@/components/motion/stagger";
import { ContactForm } from "@/components/sections/contact-form";

const funderPaths = [
  {
    key: "institutional",
    icon: "🏛",
    titlePt: "Parceiros Institucionais e Fundacoes",
    titleEn: "Institutional Partners & Foundations",
    descPt:
      "Trabalhamos com agencias internacionais, fundacoes e organismos multilaterais. Oferecemos teoria da mudanca documentada, relatorios de impacto e total transparencia financeira.",
    descEn:
      "We work with international agencies, foundations, and multilateral organizations. We provide documented theory of change, impact reports, and full financial transparency.",
    ctaPt: "Solicitar carta de apresentacao",
    ctaEn: "Request capability statement",
  },
  {
    key: "corporate",
    icon: "🏢",
    titlePt: "Empresas e Responsabilidade Social",
    titleEn: "Corporate & CSR",
    descPt:
      "Parcerias de investimento social privado, matched-giving e programas de voluntariado corporativo alinhados aos ODS.",
    descEn:
      "Private social investment partnerships, matched-giving, and corporate volunteer programs aligned with the SDGs.",
    ctaPt: "Fale com nossa equipe",
    ctaEn: "Talk to our team",
  },
  {
    key: "individual",
    icon: "❤",
    titlePt: "Pessoas Fisicas",
    titleEn: "Individual Donors",
    descPt:
      "Sua contribuicao vai diretamente para quem precisa. Doe via Pix ou cartao — qualquer valor faz diferenca.",
    descEn:
      "Your contribution goes directly to those who need it. Donate via Pix or card — every amount makes a difference.",
    ctaPt: "Doar agora",
    ctaEn: "Donate now",
  },
  {
    key: "volunteer",
    icon: "🤝",
    titlePt: "Voluntarios",
    titleEn: "Volunteers",
    descPt:
      "Temos vagas para educadores, mentores, profissionais de saude e comunicacao. Venha colocar seu talento a servico.",
    descEn:
      "We have openings for educators, mentors, health professionals, and communicators. Put your talent to service.",
    ctaPt: "Quero ser voluntario",
    ctaEn: "I want to volunteer",
  },
];

export function GetInvolvedPage() {
  const pathname = usePathname();
  const locale = pathname.split("/")[1] || "pt";
  const isPt = locale === "pt";

  return (
    <article>
      <section className="py-16 md:py-24 bg-amber/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeUp>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-ink">
              {isPt ? "Faca Parte" : "Get Involved"}
            </h1>
            <p className="mt-4 text-lg text-ink-soft max-w-2xl mx-auto">
              {isPt
                ? "Cada tipo de apoio importa. Escolha o caminho que faz sentido para voce."
                : "Every type of support matters. Choose the path that makes sense for you."}
            </p>
          </FadeUp>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">
        <Stagger staggerDelay={0.12} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {funderPaths.map((path) => (
            <div
              key={path.key}
              className="p-8 bg-card rounded-2xl border border-line hover:border-forest/30 transition-colors"
            >
              <span className="text-3xl">{path.icon}</span>
              <h2 className="mt-4 text-xl font-serif font-bold text-ink">
                {isPt ? path.titlePt : path.titleEn}
              </h2>
              <p className="mt-3 text-sm text-ink-soft leading-relaxed">
                {isPt ? path.descPt : path.descEn}
              </p>
              <button className="mt-6 inline-flex items-center px-6 py-3 bg-forest text-cream font-semibold text-sm rounded-xl hover:bg-forest-light transition-colors">
                {isPt ? path.ctaPt : path.ctaEn}
              </button>
            </div>
          ))}
        </Stagger>

        {/* Partner inquiry form */}
        <FadeUp>
          <div className="mt-20">
            <h2 className="text-2xl font-serif font-bold text-ink text-center mb-8">
              {isPt
                ? "Entre em contato sobre parcerias"
                : "Contact us about partnerships"}
            </h2>
            <ContactForm type="partnership" />
          </div>
        </FadeUp>
      </div>
    </article>
  );
}
