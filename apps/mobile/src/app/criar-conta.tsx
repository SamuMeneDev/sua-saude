import { Button, Checkbox, Input, Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue, Text } from "@/components/ui";
import { router } from "expo-router";
import { Pressable, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CriarConta() {
    return (
        <SafeAreaView className="flex-1 p-3">
            <View className="items-center py-7">
                <Text className="text-x text-sky-800 dark:text-white font-semibold">Criar Conta</Text>
                <Text className="text-xs text-sky-600 dark:text-white">Crie uma conta no Sua Saude</Text>
            </View>
            <View className="gap-5 mb-5">
                <View>
                <Text className="text-xs text-sky-600 dark:text-white">Email</Text>
                <Input
                    keyboardType="email-address"
                    textContentType="emailAddress"
                    autoComplete="email"
                    placeholder="Email"
                />
                </View>
                <View>
                    <Text className="text-xs text-sky-600 dark:text-white">Senha</Text>
                    <Input
                        secureTextEntry
                        textContentType="password"
                        autoComplete="password"
                        placeholder="Sua senha"
                    />
                </View>
                <View className="flex-row gap-2">
                    <View className="w-[60%]">
                        <Text className="text-xs text-sky-700 dark:text-white">Data de nascimento</Text>
                        <Input placeholder="Data de Nascimento" />
                    </View>
                    <View className="w-[37%]">
                        <Text className="text-xs text-sky-700 dark:text-white">Sexo</Text>
                        <Select>
                            <SelectTrigger>
                                <SelectValue placeholder="Sexo" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Sexo</SelectLabel>
                                    <SelectItem label="Feminino" value="f" />
                                    <SelectItem label="Masculino" value="m" />
                                    <SelectItem label="Outro" value="o" />
                                    <SelectItem label="Prefiro não dizer" value="" />
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </View>
                </View>
            </View>
            <View className=" gap-4">
                <Button className="active:bg-sky-700 bg-sky-600">
                    <Text className="text-xs text-white">Login</Text>
                </Button>
                <Pressable onPress={router.back}>
                    <Text className="text-center text-sm font-normal text-stone-500">Já tem uma conta? Faça login</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}