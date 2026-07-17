import { ListaVacina } from "../types/ListaVacina";

export const calendarioVacinal: ListaVacina[] = [
  {
    id: "1",
    alvo: "Criança",
    categoria: "Ao nascer",
    mostrar: false,
    vacinas: [
      {
        nome: "BCG",
        dose: "Única",
        descricao: "Previne formas graves de tuberculose",
      },
      {
        nome: "Hepatite B",
        dose: "Dose ao nascer",
        descricao: "Previne a hepatite B",
      },
    ],
  },
  {
    id: "2",
    alvo: "Criança",
    mostrar: false,
    categoria: "2 meses",
    vacinas: [
      {
        nome: "Pentavalente",
        dose: "1ª dose",
        descricao: "Difteria, Tétano, Coqueluche, Hepatite B e Hib",
      },
      {
        nome: "Poliomielite VIP",
        dose: "1ª dose",
        descricao: "Poliomielite (paralisia infantil)",
      },
      {
        nome: "Pneumocócica 10V",
        dose: "1ª dose",
        descricao: "Pneumonias, meningites e otites",
      },
      {
        nome: "Rotavírus",
        dose: "1ª dose",
        descricao: "Diarreia por rotavírus",
      },
    ],
  },
  {
    id: "3",
    alvo: "Criança",
    categoria: "3 meses",
    mostrar: false,
    vacinas: [
      {
        nome: "Meningocócica C",
        dose: "1ª dose",
        descricao: "Meningite meningocócica tipo C",
      },
    ],
  },
  {
    id: "4",
    alvo: "Criança",
    categoria: "4 meses",
    mostrar: false,
    vacinas: [
      { nome: "Pentavalente", dose: "2ª dose" },
      { nome: "Poliomielite VIP", dose: "2ª dose" },
      { nome: "Pneumocócica 10V", dose: "2ª dose" },
      { nome: "Rotavírus", dose: "2ª dose" },
    ],
  },
  {
    id: "5",
    alvo: "Criança",
    categoria: "9 meses",
    mostrar: false,
    vacinas: [
      {
        nome: "Febre Amarela",
        dose: "Dose única",
        descricao: "Previne a febre amarela",
      },
    ],
  },
  {
    id: "6",
    alvo: "Criança",
    categoria: "12 meses",
    mostrar: false,
    vacinas: [
      {
        nome: "Tríplice Viral",
        dose: "1ª dose",
        descricao: "Sarampo, Caxumba e Rubéola",
      },
      { nome: "Pneumocócica 10V", dose: "Reforço" },
      { nome: "Meningocócica C", dose: "Reforço" },
    ],
  },
  {
    id: "7",
    alvo: "Criança",
    categoria: "15 meses",
    mostrar: false,
    vacinas: [
      {
        nome: "Tetra Viral",
        dose: "Dose única",
        descricao: "Sarampo, Caxumba, Rubéola e Varicela",
      },
      {
        nome: "DTP",
        dose: "1º reforço",
        descricao: "Difteria, Tétano e Coqueluche",
      },
      { nome: "Poliomielite VOP", dose: "1º reforço", descricao: "Gotinha" },
      { nome: "Hepatite A", dose: "Dose única" },
    ],
  },
  {
    id: "8",
    alvo: "Criança",
    categoria: "4 anos",
    mostrar: false,
    vacinas: [
      { nome: "DTP", dose: "2º reforço" },
      { nome: "Poliomielite VOP", dose: "2º reforço" },
      { nome: "Varicela", dose: "Dose única" },
    ],
  },
  {
    id: "9",
    alvo: "Criança",
    categoria: "9 a 14 anos",
    mostrar: false,
    vacinas: [
      {
        nome: "HPV Quadrivalente",
        dose: "Dose única",
        descricao: "Prevenção de cânceres e verrugas genitais",
      },
    ],
  },
  {
    id: "10",
    alvo: "Criança",
    categoria: "11 a 14 anos",
    mostrar: false,
    vacinas: [
      {
        nome: "Meningocócica ACWY",
        dose: "Dose única ou reforço",
        descricao: "Meningites tipos A, C, W e Y",
      },
    ],
  },
  {
    id: "11",
    alvo: "Adulto",
    categoria: "Adulto (20 a 59 anos)",
    mostrar: false,
    vacinas: [
      {
        nome: "Dupla Adulto (dT)",
        dose: "Reforço a cada 10 anos",
        descricao: "Previne Difteria e Tétano",
      },
      {
        nome: "Febre Amarela",
        dose: "Dose única",
        descricao: "Para quem nunca tomou ou não tem comprovante",
      },
      {
        nome: "Tríplice Viral",
        dose: "Até 2 doses",
        descricao: "Sarampo, Caxumba e Rubéola (conforme histórico)",
      },
      {
        nome: "Hepatite B",
        dose: "3 doses",
        descricao: "Caso não tenha sido vacinado anteriormente",
      },
    ],
  },
  {
    id: "12",
    alvo: "Adulto",
    categoria: "Idoso (60 anos ou mais)",
    mostrar: false,
    vacinas: [
      {
        nome: "Influenza (Gripe)",
        dose: "Anual",
        descricao: "Campanha anual nacional",
      },
      {
        nome: "Pneumocócica 23V",
        dose: "Dose única / Reforço",
        descricao: "Previne pneumonia e meningites (geralmente para acamados)",
      },
      {
        nome: "Dupla Adulto (dT)",
        dose: "Reforço a cada 10 anos",
        descricao: "Difteria e Tétano",
      },
      {
        nome: "Hepatite B",
        dose: "3 doses",
        descricao: "Para quem não completou o esquema antes",
      },
    ],
  },
  {
    id: "13",
    alvo: "Específico",
    categoria: "Específicas (Gestantes)",
    mostrar: false,
    vacinas: [
      {
        nome: "dTpa (Tríplice Acelular)",
        descricao:
          "Aplicada em cada gestação para proteger o bebê contra coqueluche.",
      },
    ],
  },
];