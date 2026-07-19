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

const communityPhotos = [
  { src: "/images/gallery-2.jpg", alt: "Evento comunitario" },
  { src: "/images/gallery-3.jpg", alt: "Jovens no programa" },
  { src: "/images/gallery-6.jpg", alt: "Equipe Lifetransformers" },
];

export function AboutPage() {
  const pathname = usePathname();
  const locale = pathname.split("/")[1] || "pt";

  return (
    <article>
      {/* Header with photo */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Background photo */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(28,26,23,0.88) 40%, rgba(28,26,23,0.4) 100%), url('/images/gallery-5.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <FadeUp>
            <p className="text-xs font-semibold uppercase tracking-widest text-amber mb-4">
              {locale === "pt" ? "Itaquera, São Paulo" : "Itaquera, São Paulo"}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-cream">
              {locale === "pt" ? "Quem Somos" : "About Us"}
            </h1>
            <p className="mt-6 text-lg text-cream/75 leading-relaxed max-w-2xl">
              {locale === "pt"
                ? "A Lifetransformers nasceu do desejo de transformar vidas em Itaquera, Sao Paulo, por meio do esporte, cultura e lazer. Com amor, fe e uniao de pessoas solidarias, construimos futuros junto com criancas, adolescentes e familias."
                : "Lifetransformers was born from a desire to transform lives in Itaquera, São Paulo, through sport, culture and leisure. With love, faith and the unity of compassionate people, we build futures alongside children, youth and families."}
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Community photos strip */}
      <section className="py-12 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-3 gap-3 md:gap-4">
            {communityPhotos.map((photo) => (
              <div
                key={photo.src}
                className="rounded-xl overflow-hidden"
                style={{ height: "200px" }}
              >
                <div
                  className="w-full h-full"
                  style={{
                    backgroundImage: `url('${photo.src}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  role="img"
                  aria-label={photo.alt}
                />
              </div>
            ))}
          </div>
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
                { step: locale === "pt" ? "Problema" : "Problem", desc: locale === "pt" ? "Criancas e familias vulneraveis sem acesso a esporte, cultura e lazer" : "Vulnerable children and families without access to sport, culture and leisure" },
                { step: locale === "pt" ? "Atividades" : "Activities", desc: locale === "pt" ? "Futebol, assistencia social, eventos culturais e de lazer" : "Football, social assistance, cultural and leisure events" },
                { step: locale === "pt" ? "Produtos" : "Outputs", desc: locale === "pt" ? "Jovens treinando, familias assistidas, eventos realizados" : "Youth training, families assisted, events held" },
                { step: locale === "pt" ? "Resultados" : "Outcomes", desc: locale === "pt" ? "Desenvolvimento de carater, disciplina, autoestima e lacos comunitarios" : "Development of character, discipline, self-esteem and community bonds" },
                { step: locale === "pt" ? "Impacto" : "Impact", desc: locale === "pt" ? "Comunidade mais forte, jovens com futuro, familias transformadas" : "Stronger community, youth with a future, transformed families" },
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

        {/* Full-width community image */}
        <FadeUp>
          <div
            className="rounded-2xl overflow-hidden"
            style={{ height: "320px" }}
          >
            <div
              className="w-full h-full"
              style={{
                backgroundImage: "linear-gradient(to right, rgba(28,26,23,0.3), rgba(28,26,23,0.1)), url('/images/gallery-1.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
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
