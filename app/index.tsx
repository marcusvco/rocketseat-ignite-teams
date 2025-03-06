import { Loading } from "@/components/loading"
import theme from "@/theme"
import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto"
import { Groups } from "@screens/groups"
import { ThemeProvider } from "styled-components/native"
import { NewGroup } from "./screens/new-group"
import { Players } from "./screens/players"

export default function Index() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold })

  return (
    <ThemeProvider theme={theme}>
      {fontsLoaded ? <Players /> : <Loading />}
    </ThemeProvider>
  )
}
