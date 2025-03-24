import { Button } from "@/components/button"
import { GroupCard } from "@/components/group-card"
import { Header } from "@/components/header"
import { Highlight } from "@/components/highlight"
import { ListEmpty } from "@/components/list-empty"
import { useState } from "react"
import { FlatList } from "react-native"
import { Container } from "./styles"
import { useRouter } from "expo-router"

export default function Groups() {
  const [groups, setGroups] = useState<string[]>([])
  const router = useRouter()

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
      <Button
        title="Criar nova turma"
        onPress={() => router.navigate("/new-group")}
      />
    </Container>
  )
}
