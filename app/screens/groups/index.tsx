import { Header } from "@/components/header"
import { Highlight } from "@/components/highlight"
import { Container } from "./styles"
import { GroupCard } from "@/components/group-card"
import { FlatList } from "react-native"
import { useState } from "react"
import { ListEmpty } from "@/components/list-empty"
import { Button } from "@/components/button"

export function Groups() {
  const [groups, setGroups] = useState<string[]>([])

  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subtitle="jogue com a sua turma" />
      <FlatList
        data={groups}
        renderItem={({ item }) => <GroupCard title={item} />}
        keyExtractor={(item) => item}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={<ListEmpty message="Nenhuma turma cadastrada" />}
      />
      <Button title="Criar nova turma" />
    </Container>
  )
}
