"use client";

import { usePathname } from "next/navigation";
import { FadeUp } from "@/components/motion/fade-up";
import { Stagger } from "@/components/motion/stagger";

const teamMembers = [
  { name: "[Fundador(a)]", role: "Fundador(a) e Diretor(a) Executivo(a)", photo: "" },
  { name: "[Coordenador(a)]", role: "Coordenacao de Programas", photo: "" },
  { name: "[Educador(a)]", role: "Educacao Integral", photo: "" },
  { name: "[Assistente Social]", role: "Saude Comunitaria", photo: "" },
];

const values = [
  { title: "Dignidade", desc: "Cada pessoa que atendemos e protagonista da propria historia." },
  { title: "Transparencia", desc: "Prestamos contas de cada recurso recebido." },
  { title: "Territorio", desc: "Nascemos aqui. Conhecemos cada rua, cada historia." },
  { title: "Colaboracao", desc: "Ninguem transforma sozinho. Trabalhamos em rede." },
];

export function AboutPage() {
  const pathname = usePathname();
  const locale = pathname.split("/")[1] || "pt";

  return (
    <article>
      {/* Origin */}
      <section className="py-16 md:py-24 bg-forest/5">
        <div className="max-w-4xl mx-auto px-6">
          <FadeUp>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-ink">
              {locale === "pt" ? "Quem Somos" : "About Us"}
            </h1>
            <p className="mt-6 text-lg text-ink-soft leading-relaxed max-w-2xl">
              {locale === "pt"
                ? "[A historia de origem — por que a organizacao foi fundada, por quem, e o momento que fez tudo comecar. Escrita com emocao e concretude, nao com jargao institucional.]"
                : "[The origin story — why the organization was founded, by whom, and the moment that started it all. Written with emotion and specificity, not institutional jargon.]"}
            </p>
          </FadeUp>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-16 md:py-24 space-y-20">
        {/* Theory of Change */}
        <FadeUp>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-forest mb-6">
              {locale === "pt" ? "Teoria da Mudanca" : "Theory of Change"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {[
                { step: locale === "pt" ? "Problema" : "Problem", desc: "[Descricao do problema central]" },
                { step: locale === "pt" ? "Atividades" : "Activities", desc: "[O que a ONG faz]" },
                { step: locale === "pt" ? "Produtos" : "Outputs", desc: "[O que e entregue]" },
                { step: locale === "pt" ? "Resultados" : "Outcomes", desc: "[O que muda nas vidas]" },
                { step: locale === "pt" ? "Impacto" : "Impact", desc: "[A mudanca de longo prazo]" },
              ].map((item, i) => (
                <div key={item.step} className="relative">
                  <div className="p-4 bg-card rounded-xl border border-line text-center h-full">
                    <p className="text-xs font-semibold text-forest uppercase tracking-wider">
                      {item.step}
                    </p>
                    <p className="mt-2 text-sm text-ink-soft">{item.desc}</p>
                  </div>
                  {i < 4 && (
                    <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-forest">
                      &rarr;
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </FadeUp>

        {/* Values */}
        <FadeUp>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-forest mb-6">
              {locale === "pt" ? "Nossos Valores" : "Our Values"}
            </h2>
            <Stagger staggerDelay={0.1} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((v) => (
                <div key={v.title} className="p-6 bg-card rounded-xl border border-line">
                  <h3 className="text-lg font-serif font-bold text-ink">{v.title}</h3>
                  <p className="mt-2 text-sm text-ink-soft">{v.desc}</p>
                </div>
              ))}
            </Stagger>
          </div>
        </FadeUp>

        {/* Team */}
        <FadeUp>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-forest mb-6">
              {locale === "pt" ? "Nossa Equipe" : "Our Team"}
            </h2>
            <Stagger staggerDelay={0.08} className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {teamMembers.map((member) => (
                <div key={member.name} className="text-center">
                  <div className="w-24 h-24 bg-forest/10 rounded-full mx-auto mb-3" />
                  <p className="font-semibold text-ink text-sm">{member.name}</p>
                  <p className="text-xs text-ink-soft mt-1">{member.role}</p>
                </div>
              ))}
            </Stagger>
          </div>
        </FadeUp>
      </div>
    </article>
  );
}
