import { Vacina } from "./Vacina";


export interface ListaVacina {
  id: string;
  alvo: "Criança" | "Adulto" | "Específico";
  categoria: string;
  mostrar: boolean;
  vacinas: Vacina[];
}