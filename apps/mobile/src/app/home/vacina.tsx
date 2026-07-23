import { VacinaFilterList, VacinaList } from "@/components/common/Vacina";
import { View, Linking } from "react-native";
export default function Vacina() {

    return (
        <View className="mb-32">
            <View className="items-center">
                <VacinaFilterList />
            </View>
            <VacinaList />
        </View>
    )
}