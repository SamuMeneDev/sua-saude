import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import { Text, Input, Checkbox } from '@/components/ui/';
import { MoonStarIcon, SunIcon } from 'lucide-react-native';
import { useColorScheme } from 'nativewind';
import { Pressable, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';


export default function Login() {
  return (
    <SafeAreaView className="flex-1 p-3">
      <View className="items-center py-7">
        <Text className="text-x text-sky-800 dark:text-white font-semibold">Login</Text>
        <Text className="text-xs text-sky-600 dark:text-white">Faça login para entrar em sua conta</Text>
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
        <View className="flex-row justify-between">
          <View className="flex-row gap-2 items-center">
            <Checkbox
              checkedClassName="border-sky-700"
              indicatorClassName="bg-sky-700"
              onCheckedChange={()=>{}}
              checked 
            />
            <Text className="text-xs">Matenha-me logado</Text>
          </View>
          <View>
              <Pressable>
                <Text className="text-xs">Esqueci a senha</Text>
              </Pressable>
          </View>
        </View>
      </View>
      <View className="px-5 gap-6">
        <Button className="bg-sky-600 active:bg-sky-700">
          <Text className="text-xs text-white">Login</Text>
        </Button>

        <Button variant="link" onPress={()=> router.navigate("/criar-conta")}>
          <Text className="text-stone-500 font-normal">Não tem uma conta? Crie uma conta</Text>
        </Button>
      </View>
      <ThemeToggle />
    </SafeAreaView>
  )
}

const THEME_ICONS = {
  light: SunIcon,
  dark: MoonStarIcon,
};

function ThemeToggle() {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <Button
      onPressIn={toggleColorScheme}
      size="icon"
      variant="ghost"
      className="ios:size-9 rounded-full web:mx-4">
      <Icon as={THEME_ICONS[colorScheme ?? 'light']} className="size-5" />
    </Button>
  );
}
