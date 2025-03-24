import { TouchableOpacity } from "react-native"
import { BackIcon, Container, Logo } from "./styles"
import { useRouter } from "expo-router"

interface Props {
  showBackButton?: boolean
}

export function Header({ showBackButton = false }: Props) {
  const router = useRouter()
  return (
    <Container
      style={[showBackButton ? { justifyContent: "space-between" } : {}]}
    >
      {showBackButton && (
        <TouchableOpacity onPress={router.dismissAll}>
          <BackIcon />
        </TouchableOpacity>
      )}
      <Logo source={require("@/assets/images/logo.png")} />
    </Container>
  )
}
