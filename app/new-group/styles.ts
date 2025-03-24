import { UsersThree } from "phosphor-react-native"
import styled, { DefaultTheme } from "styled-components/native"

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }: DefaultTheme) => theme.COLORS.GRAY_600};
  padding: 24px;
`

export const Content = styled.View`
  flex: 1;
  justify-content: center;
`

export const Icon = styled(UsersThree).attrs(({ theme }: DefaultTheme) => ({
  size: 56,
  color: theme.COLORS.GREEN_700,
}))`
  align-self: center;
`
