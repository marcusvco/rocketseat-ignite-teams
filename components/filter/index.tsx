import { TouchableOpacityProps } from "react-native"
import { Container, FilterStyleProps, Title } from "./styles"

interface Props {
  title: string
}

export function Filter({
  title,
  isActive = false,
  ...rest
}: Props & FilterStyleProps & TouchableOpacityProps) {
  return (
    <Container isActive={isActive} {...rest}>
      <Title>{title}</Title>
    </Container>
  )
}
