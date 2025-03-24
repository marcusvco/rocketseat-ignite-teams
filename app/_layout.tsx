import theme from "@/theme"
import { Stack } from "expo-router"
import { StatusBar } from "expo-status-bar"
import { SafeAreaView } from "react-native-safe-area-context"
import { ThemeProvider } from "styled-components/native"

export default function RootLayout() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar
          style="light"
          translucent
          backgroundColor={theme.COLORS.GRAY_600}
        />
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="groups" />
          <Stack.Screen name="new-group" />
          <Stack.Screen name="players" />
        </Stack>
      </SafeAreaView>
    </ThemeProvider>
  )
}
