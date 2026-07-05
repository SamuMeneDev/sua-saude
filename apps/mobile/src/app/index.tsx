import { Slot } from "expo-router";
import { View } from "react-native";
import { Button, DefaultTheme, PaperProvider, Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text variant="bodyLarge">Olá Mundo!</Text>

      <Button mode="outlined">OK</Button>
    </SafeAreaView>
  );
}
