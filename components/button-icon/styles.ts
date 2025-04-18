import { MaterialIcons } from "@expo/vector-icons"
import { TouchableOpacity } from "react-native"
import styled from "styled-components/native"
import { DefaultTheme } from "styled-components/native"

export type ButtonIconTypeStyleProps = "PRIMARY" | "SECONDARY"

interface Props {
  type: ButtonIconTypeStyleProps
}

export const Container = styled(TouchableOpacity)<Props>`
  width: 56px;
  height: 56px;
  justify-content: center;
  align-items: center;
  margin-left: 12px;
`

export const Icon = styled(MaterialIcons).attrs(
  ({ theme, type }: DefaultTheme & Props) => ({
    size: 24,
    color: type === "PRIMARY" ? theme.COLORS.GREEN_700 : theme.COLORS.RED,
  })
)``
