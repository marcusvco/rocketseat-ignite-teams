import { MaterialIcons } from "@expo/vector-icons"
import styled from "styled-components/native"
import { css } from "styled-components/native"
import { DefaultTheme } from "styled-components/native"

export const Container = styled.View`
  width: 100%;
  height: 56px;
  background-color: ${({ theme }: DefaultTheme) => theme.COLORS.GRAY_500};
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
  border-radius: 6px;
`

export const Name = styled.Text`
  flex: 1;
  ${({ theme }: DefaultTheme) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`

export const Icon = styled(MaterialIcons).attrs(({ theme }: DefaultTheme) => ({
  size: 24,
  color: theme.COLORS.GRAY_200,
}))`
  margin-left: 16px;
  margin-right: 4px;
`
