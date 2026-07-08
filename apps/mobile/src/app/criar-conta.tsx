import { getStyle } from "@/style/page/criar-conta";
import { View } from "react-native";
import { Text, useTheme } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CriarConta() {
        const style = getStyle(useTheme())
    return (
        <SafeAreaView>
            <View style={style.titleContainer}>
                <Text style={style.title} variant="headlineSmall">Criar Conta</Text>
                <Text style={style.label} variant="bodyMedium">Criar uma conta no Sua Saude</Text>
            </View>
        </SafeAreaView>
    )
}