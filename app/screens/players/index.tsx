import { Header } from "@/components/header"
import { Container, Form, HeaderList, NumberOfPlayers } from "./styles"
import { Highlight } from "@/components/highlight"
import { ButtonIcon } from "@/components/button-icon"
import { Input } from "@/components/input"
import { Filter } from "@/components/filter"
import { FlatList } from "react-native"
import { useState } from "react"

export function Players() {
  const [players, setPlayers] = useState<string[]>([])
  const [team, setTeam] = useState<string>("Time A")

  return (
    <Container>
      <Header showBackButton />

      <Highlight
        title="Nome da turma"
        subtitle="adicione a galera e separe os times"
      />

      <Form>
        <Input placeholder="Nome da pessoa" autoCorrect={false} />
        <ButtonIcon icon="add" />
      </Form>

      <HeaderList>
        <FlatList
          data={["Time A", "Time B"]}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item == team}
              onPress={() => setTeam(item)}
            />
          )}
          keyExtractor={(item) => item}
          horizontal
        />
        <NumberOfPlayers>{players.length}</NumberOfPlayers>
      </HeaderList>
    </Container>
  )
}
