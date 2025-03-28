import { TouchableOpacity } from "react-native"
import styled from "styled-components/native"
import { css } from "styled-components/native"
import { DefaultTheme } from "styled-components/native"

export type ButtonTypeStyleProps = "PRIMARY" | "SECONDARY"

interface Props {
  type: ButtonTypeStyleProps
}

export const Container = styled(TouchableOpacity)<Props>`
  flex: 1;
  min-height: 56px;
  max-height: 56px;
  background-color: ${({ theme, type }: DefaultTheme & Props) =>
    type === "PRIMARY" ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK};
  border-radius: 6px;
  justify-content: center;
  align-items: center;
`

export const Title = styled.Text`
  ${({ theme }: DefaultTheme) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`
