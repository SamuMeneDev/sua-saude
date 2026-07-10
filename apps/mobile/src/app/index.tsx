import { Text } from "@/components/ui";
import { router } from "expo-router";
import { useEffect } from "react";
import { ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Root() {

    useEffect(()=>{
        setTimeout(()=>{
            router.dismissTo("/login");
        }, 2000)
    },[])

    return (
        <SafeAreaView className="flex-1 items-center justify-center gap-7">
            <Text>Sua Saude</Text>
            <ActivityIndicator />
        </SafeAreaView>
    )
}