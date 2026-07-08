import { StyleSheet } from "react-native";
import { MD3Theme } from "react-native-paper";

export const getStyle = (theme: MD3Theme) => StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 20
    },
    titleContainer: {
        alignItems: "center"
    },
    subtitle: {
        color: theme.colors.backdrop
    }
});