import { TouchableOpacity } from "react-native"
import { BackIcon, Container, Logo } from "./styles"

interface Props {
  showBackButton?: boolean
}

export function Header({ showBackButton = false }: Props) {
  return (
    <Container
      style={[showBackButton ? { justifyContent: "space-between" } : {}]}
    >
      {showBackButton && (
        <TouchableOpacity>
          <BackIcon />
        </TouchableOpacity>
      )}
      <Logo source={require("@/assets/images/logo.png")} />
    </Container>
  )
}
