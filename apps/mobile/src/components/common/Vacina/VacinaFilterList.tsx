import { FlatList } from "react-native";
import {listaCategoria} from "@sua-saude/types";
import { Text } from "@/components/ui";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useState } from "react";

/**
 * Renderiza lista de categorias de vacinas.
 */
export function VacinaFilterList() {
    const [filtroVacina, setFiltroVacina] = useState<string>();
    return (
        <FlatList 
            data={listaCategoria}
            horizontal
            renderItem={({item, index})=>(
                <ToggleGroup onValueChange={(value)=>setFiltroVacina(value)} value={filtroVacina} type="single">
                    <ToggleGroupItem 
                        isFirst={index===0}
                        isLast={index===listaCategoria.length-1}
                        value={item}
                    >
                    <Text>{item}</Text>
                    </ToggleGroupItem>
                </ToggleGroup>
            )}
        />
    )
}