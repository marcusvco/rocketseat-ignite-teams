import { Header } from "@/components/header"
import { Container, Form, HeaderList, NumberOfPlayers } from "./styles"
import { Highlight } from "@/components/highlight"
import { ButtonIcon } from "@/components/button-icon"
import { Input } from "@/components/input"
import { Filter } from "@/components/filter"
import { FlatList } from "react-native"
import { useState } from "react"
import { PlayerCard } from "@/components/player-card"
import { ListEmpty } from "@/components/list-empty"
import { Button } from "@/components/button"

export function Players() {
  const [team, setTeam] = useState<string>("Time A")
  const [players, setPlayers] = useState<string[]>([])

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
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item}
          horizontal
        />
        <NumberOfPlayers>{players.length}</NumberOfPlayers>
      </HeaderList>

      <FlatList
        data={players}
        renderItem={({ item }) => (
          <PlayerCard name={item} onRemove={() => {}} />
        )}
        keyExtractor={(item) => item}
        ListEmptyComponent={() => (
          <ListEmpty message="Não há pessoas nesse time." />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          { paddingBottom: 100 },
          !players.length && { flex: 1 },
        ]}
      />

      <Button title="Remover turma" type="SECONDARY" />
    </Container>
  )
}
