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
      return Alert.alert("Novo Grupo", "Informe o nome da turma.")
    }
    try {
      await createGroup(group)
      router.navigate("/players")
    } catch (err) {
      if (err instanceof AppError) {
        return Alert.alert("Novo Grupo", err.message)
      }
      Alert.alert("Novo Grupo", "Não foi possível criar um novo grupo.")
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
