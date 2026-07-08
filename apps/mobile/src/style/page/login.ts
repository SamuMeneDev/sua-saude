import { StyleSheet } from "react-native";
import { MD3Theme } from "react-native-paper";

export const getStyle = (theme: MD3Theme) => StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
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
    controles: {
        gap: 20
    },
    checkboxContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    rowControles: {
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        gap: 10
    },
    actionContainer: {
        gap: 10,
        justifyContent: "space-between",
        marginBottom: 25
    },
    criarContaPressable: {
        alignItems: "center",
    }
});