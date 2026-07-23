import { Button, Icon, Text } from "@/components/ui";
import { Separator } from "@/components/ui/separator";
import { SUS_VACINA_URL } from "@sua-saude/data";
import { router, usePathname } from "expo-router";
import { Drawer, DrawerContentScrollView, DrawerItem,  } from "expo-router/drawer";
import { BookOpenText, Layout } from "lucide-react-native";
import { Linking, LogBox, View } from "react-native";

LogBox.ignoreLogs(['InteractionManager has been deprecated']);

export default function HomeLayout() {
    return (
        <Drawer>
            <Drawer.Screen
                options={{
                    title: "",
                    drawerLabel: "Home"
                }}
                name="index"
            />
            <Drawer.Screen
                options={{
                    title: "Calendario Vacinal",
                    headerRight: ()=> (
                    <Button
                        className="rounded-full"
                        variant="outline"
                        size="icon"
                        onPress={()=>Linking.openURL(SUS_VACINA_URL)}
                    >
                        <Icon size={20} as={BookOpenText} />
                    </Button>
                    ),
                }}
                name="vacina"
            />
            <Drawer.Screen
                options={{
                    title: "Emergência",
                }}
                name="emergencia"
            />
        </Drawer>
    )
}