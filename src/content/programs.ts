import type { Program } from "./schema";

export const programs: Program[] = [
  {
    slug: "escola-de-futebol",
    title: "Escolinha de Futebol",
    oneLine: "Futebol que ensina mais do que gols — forma caráter, disciplina e amizades para a vida.",
    problem: "Criancas e adolescentes sem acesso a esporte de qualidade ficam expostos a riscos sociais e perdem oportunidades de desenvolvimento.",
    approach: "Treinos regulares, formacao de times, campeonatos e acompanhamento pedagogico para jovens de Itaquera.",
    outcomes: [
      "Centenas de jovens treinando regularmente",
      "Desenvolvimento de disciplina, trabalho em equipe e autoestima",
    ],
    reach: { metric: "jovens no programa", value: 200, unit: "por ano" },
    hero: "/images/programs/esporte.jpg",
    gallery: [
      "/images/gallery-1.jpg",
      "/images/gallery-6.jpg",
    ],
    status: "ongoing",
  },
  {
    slug: "assistencia-social",
    title: "Assistência Social",
    oneLine: "Nenhuma familia sozinha — apoio, escuta e cuidado para quem mais precisa em Itaquera.",
    problem: "Familias em vulnerabilidade social precisam de suporte concreto: alimentacao, orientacao e acesso a servicos publicos.",
    approach: "Distribuicao de alimentos, acompanhamento familiar, encaminhamentos e eventos comunitarios que fortalecem os lacos.",
    outcomes: [
      "Familias atendidas com apoio alimentar e social",
      "Comunidade mais coesa e articulada",
    ],
    reach: { metric: "familias atendidas", value: 300, unit: "total" },
    hero: "/images/programs/assistencia.jpg",
    gallery: [
      "/images/gallery-2.jpg",
      "/images/gallery-3.jpg",
    ],
    status: "ongoing",
  },
  {
    slug: "lazer-e-cultura",
    title: "Lazer & Cultura",
    oneLine: "A alegria tambem e um direito — eventos, atividades e momentos que constroem memorias para toda a familia.",
    problem: "Criancas e familias de periferia tem pouquissimo acesso a lazer de qualidade, cultura e momentos de celebracao.",
    approach: "Eventos esportivos, festas comunitarias, atividades recreativas e culturais que unem geracoes e fortalecem a identidade local.",
    outcomes: [
      "Eventos com centenas de participantes",
      "Familias inteiras envolvidas na comunidade",
    ],
    reach: { metric: "pessoas nos eventos", value: 500, unit: "por evento" },
    hero: "/images/programs/lazer.jpg",
    gallery: [
      "/images/gallery-4.jpg",
      "/images/gallery-5.jpg",
    ],
    status: "ongoing",
  },
];
