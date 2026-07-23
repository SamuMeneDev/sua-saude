import { VacinaFilterList, VacinaList } from "@/components/common/Vacina";
import { Button, Icon } from "@/components/ui";
import { BookOpenText } from "lucide-react-native";
import { View, Linking } from "react-native";
import { SUS_VACINA_URL } from "@sua-saude/data";
export default function Vacina() {

    return (
        <>
            <View className="flex flex-row">
                <VacinaFilterList />
                <Button
                className="rounded-full"
                variant="outline"
                onPress={()=>Linking.openURL(SUS_VACINA_URL)}
                >
                    <Icon size={20} as={BookOpenText} />
                    </Button>
            </View>
            <View>
                <VacinaList />
            </View>
        </>
    )
}