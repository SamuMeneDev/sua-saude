import { Button, Icon, Text } from "@/components/ui";
import { TelefoneEmergencia } from "@sua-saude/types";
import { Phone } from "lucide-react-native";
import { Linking, View } from "react-native";

type ContatoProps = {
    contato: TelefoneEmergencia
}

export function Contato({ contato }: ContatoProps) {

    function ligar(numero: number | string) {
        Linking.openURL(`tel:${numero}`);
    }

    return (
        <Button
        onPress={()=>ligar(contato.numero)}
        variant="ghost"
        size="lg"
        className="flex-row items-center justify-between">
            <Text className="text-sm font-normal">{contato.nome}</Text>
            <Icon className="text-stone-800 dark:text-white" size={20} as={Phone} />
        </Button>
    )
}