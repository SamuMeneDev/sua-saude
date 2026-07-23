import type {TelefoneEmergencia} from "@sua-saude/types";
export const GLICEMIA_HISTORICO_KEY = "@glicemia-historico";

export const TELEFONES_EMERGENCIA: TelefoneEmergencia[] = [
  {numero: 190, nome: "Polícia Militar"},
  {numero: 197, nome: "Polícia Civil"},
  {numero: 192, nome: "Samu"},
  {numero: 193, nome: "Bombeiros"}
];

export const SUS_VACINA_URL = "https://www.gov.br/saude/pt-br/vacinacao";