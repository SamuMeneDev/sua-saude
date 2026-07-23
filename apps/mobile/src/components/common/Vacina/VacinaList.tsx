import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, Text } from "@/components/ui";
import { useLocalSearchParams } from "expo-router";
import { FlatList } from "react-native";
import { calendarioVacinal } from "@sua-saude/data";
import { ListaVacina } from "@sua-saude/types";
import { VacinaItem } from "./VacinaItem";

function aplicarFiltro(vacina: ListaVacina, tipo: string | string[]) {
    if(tipo) {
        return vacina.alvo===tipo;
    }
    return vacina;
}

export function VacinaList() {

    const { tipo } = useLocalSearchParams();
    return (
        <Accordion type="multiple">
            <FlatList
                data={calendarioVacinal.filter(v=>aplicarFiltro(v, tipo))}
                renderItem={({item})=>(
                    <AccordionItem value={item.categoria}>
                        <AccordionTrigger>
                            <Text>{item.categoria}</Text>
                        </AccordionTrigger>
                        <AccordionContent className="gap-3">
                            {item.vacinas.map((vac, index)=><VacinaItem
                            vacina={vac}
                            key={index}
                            />)}
                        </AccordionContent>
                    </AccordionItem>
                )}
            />
        </Accordion>
    )
}