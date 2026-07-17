import { pallete } from "../style/pallete";

export const statusGlicemia = {
  Hipoglicemia: {
    cor: pallete.glicemia.hiploglicemia,
    dica: "Consuma 15g de carboidrato simples (como um copo de suco ou uma colher de mel) e meça novamente após 15 minutos.",
  },
  Normal: {
    cor: pallete.glicemia.normal,
    dica: "Ótimo! Mantenha uma alimentação equilibrada e a prática regular de exercícios físicos para conservar esses níveis.",
  },
  "Pré-Diabetes": {
    cor: pallete.glicemia.prediabetes,
    dica: "Reduza o consumo de açúcares refinados e farinha branca. Consultar um nutricionista pode ajudar a reverter este quadro.",
  },
  Diabetes: {
    cor: pallete.glicemia.diabetes,
    dica: "Siga rigorosamente as orientações médicas e mantenha o registro das medições. Evite pular refeições para manter a estabilidade.",
  },
};