import { Badge, Icon, Text } from "@/components/ui";
import { Vacina } from "@sua-saude/types"
import { Syringe } from "lucide-react-native";
import { View } from "react-native";

type VacinaItemProps = {
    vacina: Vacina;
}

export function VacinaItem({ vacina }: VacinaItemProps) {
    return (
        <View>
            <View className="flex flex-row gap-3 items-center">
                <Icon size={20} as={Syringe} />
                <View>
                    <View className="flex flex-row items-center gap-2">
                        <Text className="font-semibold">{vacina.nome}</Text>
                        {vacina.dose && (
                            <Badge  variant="secondary">
                                <Text className="text-xs">{vacina.dose}</Text>
                            </Badge>
                        )}
                    </View>
                    <Text className="text-xs">{vacina.descricao}</Text>
                    
                </View>
            </View>
            
        </View>
    )
}