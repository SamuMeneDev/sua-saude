import { TELEFONES_EMERGENCIA } from "@sua-saude/data";
import { FlatList, View } from "react-native";
import { Contato } from "./Contato";
import { Separator } from "@/components/ui";

export function ListaContatos() {
    return (
        <FlatList
            data={TELEFONES_EMERGENCIA}
            renderItem={({item})=>(
                <View>
                    <Contato contato={item} />
                    <Separator />
                </View>
            )}
        />
    )
}