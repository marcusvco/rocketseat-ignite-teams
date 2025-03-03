import { CaretLeft } from "phosphor-react-native"
import styled from "styled-components/native"
import { DefaultTheme } from "styled-components/native"

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const Logo = styled.Image`
  width: 46px;
  height: 55px;
`

export const BackIcon = styled(CaretLeft).attrs(({ theme }: DefaultTheme) => ({
  size: 32,
  color: theme.COLORS.WHITE,
}))``
