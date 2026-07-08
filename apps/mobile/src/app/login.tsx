import { getStyle } from "@/style/page/login";
import { Redirect, router } from "expo-router";
import { Pressable, View } from "react-native";
import { Button, Checkbox, Text, TextInput, useTheme } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Login() {
    const style = getStyle(useTheme())
    return (
       <SafeAreaView style={style.container}>
            <View style={style.titleContainer}>
                <Text style={style.title} variant="headlineSmall">Login</Text>
                <Text style={style.label} variant="bodyMedium">Faça login para entrar em sua conta</Text>
            </View>
            <View style={style.controles}>
                <TextInput label="Email" mode="outlined" />
                <TextInput label="Senha" mode="outlined" />
                <View style={style.rowControles}>
                    <View style={style.checkboxContainer}>
                        <Checkbox status="checked" />
                        <Text style={style.label} variant="labelMedium">Mantenha-me logado</Text>
                    </View>
                    <Pressable>
                        <Text style={style.label} variant="labelMedium">Esqueci a senha</Text>
                    </Pressable>
                </View>
            </View>
            <View>
                <View style={style.actionContainer}>
                    <Button mode="contained">Login</Button>
                    <Button mode="outlined">Entrar como convidado</Button>
                </View>
                <Pressable onPress={()=>router.navigate("/criar-conta")} style={style.criarContaPressable}>
                    <Text style={style.label} variant="labelSmall">Não tem uma conta? Crie uam conta</Text>
                </Pressable>
            </View>
       </SafeAreaView> 
    )
}