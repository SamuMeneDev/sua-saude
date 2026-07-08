import { SuaSaudeThemeLight } from "@/style/theme/SuaSaudeTheme";
import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import { PaperProvider } from "react-native-paper";


export default function RootLayout() {
  return (
    <>
    <StatusBar barStyle="default" />
      <PaperProvider theme={SuaSaudeThemeLight}>
        <Stack screenOptions={{headerShown: false, animation: "fade"}} />
      </PaperProvider>
    </>
  );
}
