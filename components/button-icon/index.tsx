import { TouchableOpacityProps } from "react-native"
import { ButtonIconTypeStyleProps, Container, Icon } from "./styles"
import { MaterialIcons } from "@expo/vector-icons"

interface Props {
  icon: keyof typeof MaterialIcons.glyphMap
  type?: ButtonIconTypeStyleProps
}

export function ButtonIcon({
  icon,
  type = "PRIMARY",
  ...rest
}: Props & TouchableOpacityProps) {
  return (
    <Container {...rest}>
      <Icon name={icon} type={type} />
    </Container>
  )
}
