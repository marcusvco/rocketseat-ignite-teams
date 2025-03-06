import { TouchableOpacityProps } from "react-native"
import { ButtonTypeStyleProps, Container, Title } from "./styles"

interface Props {
  title: string
  type?: ButtonTypeStyleProps
}

export function Button({
  title,
  type = "PRIMARY",
  ...rest
}: Props & TouchableOpacityProps) {
  return (
    <Container type={type} {...rest}>
      <Title>{title}</Title>
    </Container>
  )
}
