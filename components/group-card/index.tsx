import { TouchableOpacityProps } from "react-native"
import { Container, Icon, Title } from "./styles"

interface Props {
  title: string
}

export function GroupCard({ title, ...rest }: Props & TouchableOpacityProps) {
  return (
    <Container {...rest}>
      <Icon />
      <Title>{title}</Title>
    </Container>
  )
}
