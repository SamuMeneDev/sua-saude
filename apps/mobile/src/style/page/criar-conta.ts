import { StyleSheet } from "react-native";
import { MD3Theme } from "react-native-paper";

export const getStyle = (theme: MD3Theme) => StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    
    titleContainer: {
        alignItems: "center"
    },
    subtitle: {
        color: theme.colors.backdrop
    },
    title: {
        color: theme.colors.onPrimaryContainer,
        fontWeight: "800",
    },
    label: {
        color: theme.colors.primary
    },
});

