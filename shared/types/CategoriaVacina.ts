export const listaCategoria = [
  "Criança",
  "Adulto",
  "Específico",
] as const;
export type CategoriaVacina = (typeof listaCategoria)[number];