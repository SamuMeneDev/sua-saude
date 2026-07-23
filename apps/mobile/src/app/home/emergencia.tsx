import { ListaContatos } from "@/components/common/Emergencia";
import { Text } from "@/components/ui";
import { View } from "react-native";

export default function Emergencia() {
    return (
        <View className="p-1">
            <View className="mb-2">
                <Text className="font-medium">Contatos de emergência</Text>
                <ListaContatos />
            </View>
            <View>
                <Text className="font-medium">Seus Contatos</Text>
                <View className="items-center">
                    <Text className="w-[70%] text-stone-500 text-center text-xs">Cadastre-se ou entre na sua conta para adicionar seus contatos</Text>
                </View>
            </View>
        </View>
    )
}