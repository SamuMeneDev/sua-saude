import { Text } from "@/components/ui";
import { View } from "react-native";

export default function Home() {
    return (
        <View className="px-4">
            <Text className="text-lg font-medium">Olá, Convidado(a)</Text>
            <Text className="text-stone-400 text-xs">Como está a sua saúde hoje?</Text>
        </View>
    )
}