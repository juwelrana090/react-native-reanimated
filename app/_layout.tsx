import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "@/app/login";
import SignupScreen from "@/app/signup";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  const RootStack = createNativeStackNavigator();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack
        screenOptions={{
          headerShown: false, // ✅ works here!
        }}
      >
        <NavigationContainer>
          <RootStack.Navigator
            initialRouteName="Home"
            screenOptions={{ headerShown: false }}
          >
            <RootStack.Screen name="Home" component={LoginScreen} />
            <RootStack.Screen name="Signup" component={SignupScreen} />
          </RootStack.Navigator>
        </NavigationContainer>
      </Stack>
    </ThemeProvider>
  );
}
