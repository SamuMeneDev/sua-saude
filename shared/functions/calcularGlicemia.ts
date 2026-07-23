import {type GlicemiaStatus} from "@sua-saude/types";

export function calcularGlicemia(valor: number, isJejum: boolean): GlicemiaStatus {
    if (isJejum) {
        // Lógica para quem está de jejum
        if (valor < 100) {
        return "Normal";
        } else if (valor <= 125) {
        return "Pré-Diabetes";
        } else {
        return "Diabetes";
        }
    } else {
        // Lógica Pós-Prandial
        if (valor < 140) {
        return "Normal";
        } else if (valor < 200) {
        return "Pré-Diabetes";
        } else {
        return "Diabetes";
        }
    }
}