import { Button } from "@/components/button"
import { GroupCard } from "@/components/group-card"
import { Header } from "@/components/header"
import { Highlight } from "@/components/highlight"
import { ListEmpty } from "@/components/list-empty"
import { useCallback, useEffect, useState } from "react"
import { FlatList } from "react-native"
import { Container } from "./styles"
import { useFocusEffect, useRouter } from "expo-router"
import { getAllGroups } from "../storage/group/geat-all-groups"

export default function Groups() {
  const [groups, setGroups] = useState<string[]>([])
  const router = useRouter()

  async function fetchGroups() {
    try {
      const groups = await getAllGroups()
      setGroups(groups)
    } catch (err) {
      console.log(err)
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchGroups()
    }, [])
  )

  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subtitle="jogue com a sua turma" />
      <FlatList
        data={groups}
        renderItem={({ item }) => (
          <GroupCard
            title={item}
            onPress={() =>
              router.navigate({ pathname: "/players", params: { group: item } })
            }
          />
        )}
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
