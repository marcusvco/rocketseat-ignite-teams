import { TouchableOpacity } from "react-native"
import { Filter } from "react-native-svg"
import styled from "styled-components/native"
import { DefaultTheme } from "styled-components/native"
import { css } from "styled-components/native"

export interface FilterStyleProps {
  isActive?: boolean
}

export const Container = styled(TouchableOpacity)`
  ${({ theme, isActive }: DefaultTheme & FilterStyleProps) =>
    isActive &&
    css`
      border: 1px solid ${theme.COLORS.GREEN_700};
    `};

  border-radius: 4px;
  margin-right: 12px;
  height: 38px;
  width: 70px;
  align-items: center;
  justify-content: center;
`

export const Title = styled.Text`
  text-transform: uppercase;
  ${({ theme }: DefaultTheme) =>
    css`
      font-family: ${theme.FONT_FAMILY.BOLD};
      font-size: ${theme.FONT_SIZE.SM}px;
      color: ${theme.COLORS.WHITE};
    `};
`
