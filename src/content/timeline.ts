import type { TimelineEvent } from "./schema";

export const timeline: TimelineEvent[] = [
  {
    date: "2012",
    title: "Fundacao",
    description: "A Lifetransformers nasce no [bairro], com [X] voluntarios e uma sala emprestada.",
    type: "milestone",
  },
  {
    date: "2015",
    title: "Primeiro programa de educacao",
    description: "Inicio do programa Educacao Integral, atendendo [X] criancas no contraturno.",
    type: "program",
  },
  {
    date: "2018",
    title: "Parceria com [Universidade/Orgao]",
    description: "Firmamos parceria para avaliacao de impacto e capacitacao da equipe.",
    type: "partnership",
  },
  {
    date: "2020",
    title: "Resposta a pandemia",
    description: "Distribuicao de [X] cestas basicas e atendimento remoto a [X] familias.",
    type: "milestone",
  },
  {
    date: "2023",
    title: "Reconhecimento [Premio/Certificacao]",
    description: "A organizacao recebe [reconhecimento], validando [X] anos de trabalho.",
    type: "recognition",
  },
];
