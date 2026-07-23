import { FlatList } from "react-native";
import {listaCategoria} from "@sua-saude/types";
import { Text, ToggleGroup, ToggleGroupItem } from "@/components/ui";
import { useState } from "react";
import { router, useLocalSearchParams } from "expo-router";

/**
 * Renderiza lista de categorias de vacinas.
 */
export function VacinaFilterList() {
    const { tipo } = useLocalSearchParams();
  
    return (
        <FlatList 
            data={listaCategoria}
            horizontal
            renderItem={({item, index})=>(
                <ToggleGroup
                onValueChange={v=>router.setParams({tipo: v})}
                value={tipo as undefined | string}
                type="single"
                variant="outline">
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