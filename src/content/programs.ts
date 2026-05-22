import type { Program } from "./schema";

export const programs: Program[] = [
  {
    slug: "educacao-integral",
    title: "Educacao Integral",
    oneLine: "Cada crianca que volta para a escola e uma decisao de nao desistir dela.",
    problem: "No [bairro], [X]% das criancas abandonam a escola antes dos 14 anos.",
    approach: "Reforco escolar, acompanhamento familiar e atividades culturais no contraturno.",
    outcomes: [
      "[92]% de permanencia escolar entre os participantes",
      "[340] criancas atendidas por ano",
    ],
    reach: { metric: "criancas atendidas", value: 340, unit: "por ano" },
    hero: "/images/programs/educacao-hero.jpg",
    gallery: [
      "/images/programs/educacao-1.jpg",
      "/images/programs/educacao-2.jpg",
    ],
    status: "ongoing",
  },
  {
    slug: "geracao-de-renda",
    title: "Geracao de Renda",
    oneLine: "Dona Cleusa agora vende 40 marmitas por dia de uma cozinha que e dela.",
    problem: "Desemprego estrutural e falta de qualificacao profissional na periferia.",
    approach: "Capacitacao profissional, microempreendedorismo e acesso a microcredito.",
    outcomes: [
      "[180] familias com renda propria",
      "[75]% dos participantes empregados apos 6 meses",
    ],
    reach: { metric: "familias beneficiadas", value: 180, unit: "total" },
    hero: "/images/programs/renda-hero.jpg",
    gallery: [
      "/images/programs/renda-1.jpg",
      "/images/programs/renda-2.jpg",
    ],
    status: "ongoing",
  },
  {
    slug: "saude-comunitaria",
    title: "Saude Comunitaria",
    oneLine: "A saude chega antes da ambulancia — com prevencao e escuta.",
    problem: "Acesso precario a saude basica e falta de informacao sobre prevencao.",
    approach: "Agentes comunitarios, rodas de conversa e encaminhamento para a rede publica.",
    outcomes: [
      "[720] familias acompanhadas",
      "Reducao de [40]% em internacoes evitaveis",
    ],
    reach: { metric: "familias acompanhadas", value: 720, unit: "total" },
    hero: "/images/programs/saude-hero.jpg",
    gallery: [
      "/images/programs/saude-1.jpg",
    ],
    status: "ongoing",
  },
];
