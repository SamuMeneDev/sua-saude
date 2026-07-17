export const listaCategoria = [
  "Todos",
  "Criança",
  "Adulto",
  "Específico",
] as const;
export type CategoriaVacina = (typeof listaCategoria)[number];