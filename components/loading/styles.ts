import styled from "styled-components/native"
import { DefaultTheme } from "styled-components/native"

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }: DefaultTheme) => theme.COLORS.GRAY_600};
`
export const LoadingIndicator = styled.ActivityIndicator.attrs(
  ({ theme }: DefaultTheme) => ({
    size: "large",
    color: theme.COLORS.GREEN_700,
  })
)``
