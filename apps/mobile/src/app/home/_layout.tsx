import { Text } from "@/components/ui";
import { Separator } from "@/components/ui/separator";
import { router, usePathname } from "expo-router";
import { Drawer, DrawerContentScrollView, DrawerItem,  } from "expo-router/drawer";
import { Layout } from "lucide-react-native";
import { LogBox, View } from "react-native";

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