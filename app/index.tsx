import { Loading } from "@/components/loading"
import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto"
import Groups from "./groups"

export default function Index() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold })

  if (!fontsLoaded) return <Loading />
  return fontsLoaded && <Groups />
}
