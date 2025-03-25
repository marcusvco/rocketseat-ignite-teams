import { Button } from "@/components/button"
import { Header } from "@/components/header"
import { Highlight } from "@/components/highlight"
import { Input } from "@/components/input"
import { Container, Content, Icon } from "./styles"
import { useState } from "react"
import { createGroup } from "../storage/create-group"
import { useRouter } from "expo-router"

export default function NewGroup() {
  const router = useRouter()
  const [group, setGroup] = useState("")

  async function handleNewGroup() {
    await createGroup(group)
    router.navigate("/players")
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
