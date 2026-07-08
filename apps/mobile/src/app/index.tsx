import { getStyle } from "@/style/page/root";
import { router } from "expo-router";
import { useEffect } from "react";
import { View } from "react-native";
import { ActivityIndicator, Button, Text, useTheme } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";


export default function App() {
  const theme = useTheme();
  const style = getStyle(theme);

  // Simulando carregamento do aplicativo
  useEffect(()=>{
    setTimeout(()=>{
      router.dismissTo("/login");
    }, 2000)
  }, [])

  return (
    <SafeAreaView style={style.container}>
      <View style={style.titleContainer}>
        <Text variant="headlineSmall">Sua saúde</Text>
        <Text style={style.subtitle} variant="bodyMedium">Bem vindo!</Text>
      </View>
      <ActivityIndicator size="large"  />
    </SafeAreaView>
  );
}
