import theme from "@/theme"
import { Groups } from "@screens/groups"
import { ThemeProvider } from "styled-components/native"

export default function Index() {
  return (
    <ThemeProvider theme={theme}>
      <Groups />
    </ThemeProvider>
  )
}
