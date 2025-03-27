import { Button } from "@/components/button"
import { Header } from "@/components/header"
import { Highlight } from "@/components/highlight"
import { Input } from "@/components/input"
import { Container, Content, Icon } from "./styles"
import { useState } from "react"
import { createGroup } from "../storage/group/create-group"
import { useRouter } from "expo-router"
import { AppError } from "../utils/AppErrors"
import { Alert } from "react-native"

export default function NewGroup() {
  const router = useRouter()
  const [group, setGroup] = useState("")

  async function handleNewGroup() {
    if (group.trim().length === 0) {
      return Alert.alert("Nova Turma", "Informe o nome da turma.")
    }
    try {
      await createGroup(group)
      router.navigate({
        pathname: "/players",
        params: { group },
      })
    } catch (err) {
      if (err instanceof AppError) {
        return Alert.alert("Nova Turma", err.message)
      }
      Alert.alert("Nova Turma", "Não foi possível criar uma nova turma.")
      console.log(err)
    }
  }

  return (
    <Container>
      <Header showBackButton />
      <Content>
        <Icon />
        <Highlight
          title="Nova turma"
          subtitle="crie a turma para adicionar as pessoas"
        />
        <Input placeholder="Nome da turma" onChangeText={setGroup} />
        <Button
          title="Criar"
          style={{ marginTop: 20 }}
          onPress={handleNewGroup}
        />
      </Content>
    </Container>
  )
}
