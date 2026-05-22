"use client";

import { usePathname } from "next/navigation";
import { FadeUp } from "@/components/motion/fade-up";
import { Stagger } from "@/components/motion/stagger";
import { partners } from "@/content/partners";

const financials = [
  { label: "Programas", pct: 78, color: "bg-forest" },
  { label: "Administrativo", pct: 14, color: "bg-ink-soft" },
  { label: "Captacao", pct: 8, color: "bg-amber" },
];

const boardMembers = [
  { name: "[Nome Presidente]", role: "Presidente do Conselho" },
  { name: "[Nome Vice]", role: "Vice-Presidente" },
  { name: "[Nome Diretor]", role: "Diretor(a) Executivo(a)" },
  { name: "[Nome Conselheiro]", role: "Conselheiro(a) Fiscal" },
];

export function TransparencyPage() {
  const pathname = usePathname();
  const locale = pathname.split("/")[1] || "pt";

  return (
    <article>
      {/* Header */}
      <section className="py-16 md:py-24 bg-forest/5">
        <div className="max-w-4xl mx-auto px-6">
          <FadeUp>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-ink text-center">
              {locale === "pt" ? "Transparencia" : "Transparency"}
            </h1>
            <p className="mt-4 text-center text-ink-soft max-w-2xl mx-auto">
              {locale === "pt"
                ? "Acreditamos que a confianca se constroi com dados abertos, governanca clara e prestacao de contas publica."
                : "We believe trust is built with open data, clear governance, and public accountability."}
            </p>
          </FadeUp>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-16 md:py-24 space-y-20">
        {/* Legal Status */}
        <FadeUp>
          <div className="p-8 bg-card rounded-2xl border border-line">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-forest mb-4">
              {locale === "pt" ? "Status Juridico" : "Legal Status"}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <p className="text-xs text-ink-soft">CNPJ</p>
                <p className="text-lg font-mono text-ink">[XX.XXX.XXX/XXXX-XX]</p>
              </div>
              <div>
                <p className="text-xs text-ink-soft">
                  {locale === "pt" ? "Qualificacao" : "Qualification"}
                </p>
                <p className="text-lg text-ink">[OSCIP / CEBAS / Associacao]</p>
              </div>
              <div>
                <p className="text-xs text-ink-soft">
                  {locale === "pt" ? "Fundada em" : "Founded"}
                </p>
                <p className="text-lg text-ink">[Ano]</p>
              </div>
              <div>
                <p className="text-xs text-ink-soft">
                  {locale === "pt" ? "Sede" : "Location"}
                </p>
                <p className="text-lg text-ink">[Cidade, Estado]</p>
              </div>
            </div>
          </div>
        </FadeUp>

        {/* Governance */}
        <FadeUp>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-forest mb-6">
              {locale === "pt" ? "Governanca" : "Governance"}
            </h2>
            <Stagger staggerDelay={0.08} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {boardMembers.map((member) => (
                <div
                  key={member.name}
                  className="p-5 bg-card rounded-xl border border-line"
                >
                  <p className="font-semibold text-ink">{member.name}</p>
                  <p className="text-sm text-ink-soft">{member.role}</p>
                </div>
              ))}
            </Stagger>
          </div>
        </FadeUp>

        {/* Financial breakdown */}
        <FadeUp>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-forest mb-6">
              {locale === "pt"
                ? "Distribuicao de Recursos"
                : "Resource Allocation"}
            </h2>
            <div className="p-8 bg-card rounded-2xl border border-line">
              {/* Simple bar chart */}
              <div className="space-y-6">
                {financials.map((item) => (
                  <div key={item.label}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-ink font-medium">{item.label}</span>
                      <span className="text-ink-soft">{item.pct}%</span>
                    </div>
                    <div className="h-3 bg-line rounded-full overflow-hidden">
                      <div
                        className={`h-full ${item.color} rounded-full transition-all duration-1000`}
                        style={{ width: `${item.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-xs text-ink-soft/60">
                {locale === "pt"
                  ? "Dados referentes ao exercicio de [2024]. Fonte: [auditoria independente / prestacao de contas interna]."
                  : "Data for fiscal year [2024]. Source: [independent audit / internal reporting]."}
              </p>
            </div>
          </div>
        </FadeUp>

        {/* Reports download */}
        <FadeUp>
          <div className="p-8 bg-forest text-cream rounded-2xl text-center">
            <h2 className="text-2xl font-serif font-bold">
              {locale === "pt" ? "Relatorios e Documentos" : "Reports & Documents"}
            </h2>
            <p className="mt-3 text-cream/70">
              {locale === "pt"
                ? "Baixe nossos relatorios anuais e documentos de prestacao de contas."
                : "Download our annual reports and accountability documents."}
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/relatorio-anual-2024.pdf"
                className="inline-flex items-center justify-center px-6 py-3 bg-amber text-ink font-semibold rounded-xl hover:bg-amber/90 transition-colors"
              >
                {locale === "pt"
                  ? "Relatorio Anual 2024"
                  : "Annual Report 2024"}
              </a>
              <a
                href="/capability-statement.pdf"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-cream/30 text-cream font-semibold rounded-xl hover:bg-cream/10 transition-colors"
              >
                {locale === "pt"
                  ? "Carta de Apresentacao"
                  : "Capability Statement"}
              </a>
            </div>
          </div>
        </FadeUp>

        {/* Partners list */}
        <FadeUp>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-forest mb-6">
              {locale === "pt"
                ? "Financiadores e Parceiros"
                : "Funders & Partners"}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {partners.map((partner) => (
                <div
                  key={partner.name}
                  className="p-4 bg-card rounded-xl border border-line text-center"
                >
                  <p className="text-sm font-medium text-ink">{partner.name}</p>
                  <p className="text-xs text-ink-soft mt-1 capitalize">
                    {partner.type}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>

        {/* Due diligence contact */}
        <FadeUp>
          <div className="text-center p-8 bg-forest/5 rounded-2xl">
            <p className="text-ink-soft">
              {locale === "pt"
                ? "Para solicitar documentos adicionais para due diligence, entre em contato:"
                : "For additional due diligence documents, please contact:"}
            </p>
            <a
              href="mailto:contato@lifetransformers.com.br"
              className="inline-block mt-3 text-forest font-semibold hover:text-forest-light transition-colors"
            >
              contato@lifetransformers.com.br
            </a>
          </div>
        </FadeUp>
      </div>
    </article>
  );
}
