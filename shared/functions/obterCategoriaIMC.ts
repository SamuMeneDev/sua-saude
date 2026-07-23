import { listaCategoriaIMC } from "@sua-saude/data";
import { CategoriaIMC } from "@sua-saude/types";

export function obterStatusIMC(imc: number): CategoriaIMC {
  const resultado = listaCategoriaIMC.find((item) => imc >= item.de && imc <= item.ate);

  // Retorna o resultado encontrado ou um padrão de segurança caso o valor seja inválido
  return resultado
    ? {
        status: resultado.status,
        dica: resultado.dica,
        corHex: resultado.corHex,
      }
    : {
        status: "Desconhecido",
        dica: "Valor de IMC inválido.",
        corHex: "#7f8c8d",
      };
}