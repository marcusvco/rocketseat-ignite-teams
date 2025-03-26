import { Button } from "@/components/button"
import { ButtonIcon } from "@/components/button-icon"
import { Filter } from "@/components/filter"
import { Header } from "@/components/header"
import { Highlight } from "@/components/highlight"
import { Input } from "@/components/input"
import { ListEmpty } from "@/components/list-empty"
import { PlayerCard } from "@/components/player-card"
import { useLocalSearchParams } from "expo-router"
import { useEffect, useRef, useState } from "react"
import { Alert, FlatList, TextInput } from "react-native"
import { addPlayerByGroup } from "../storage/player/add-player-by-group"
import { getPlayersByGroupAndTeam } from "../storage/player/get-players-by-group-and-team"
import { PlayerStorageDTO } from "../storage/player/player-storage-dto"
import { AppError } from "../utils/AppErrors"
import { Container, Form, HeaderList, NumberOfPlayers } from "./styles"

export default function Players() {
  const [team, setTeam] = useState<string>("Time A")
  const [player, setPlayer] = useState<string>("")
  const [players, setPlayers] = useState<PlayerStorageDTO[]>([])

  const { group } = useLocalSearchParams()

  const inputPlayerRef = useRef<TextInput>(null)

  async function handleAddPlayer() {
    if (player.trim().length === 0) {
      return Alert.alert("Nova Pessoa", "Digite o nome da pessoa.")
    }

    const newPlayer = {
      name: player,
      team,
    }

    const groupString: string = Array.isArray(group) ? group.join(", ") : group

    try {
      await addPlayerByGroup(newPlayer, groupString)
      inputPlayerRef.current?.blur()
      setPlayer("")
    } catch (err) {
      if (err instanceof AppError) {
        return Alert.alert("Nova Pessoa", err.message)
      }
    }
  }

  async function fetchPlayersByGroupAndTeam() {
    try {
      const groupString: string = Array.isArray(group)
        ? group.join(", ")
        : group
      const players = await getPlayersByGroupAndTeam(groupString, team)
      setPlayers(players)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchPlayersByGroupAndTeam()
  }, [players])

  return (
    <Container>
      <Header showBackButton />

      <Highlight
        title={typeof group === "string" ? group : group?.join(", ") || ""}
        subtitle="adicione a galera e separe os times"
      />

      <Form>
        <Input
          value={player}
          inputRef={inputPlayerRef}
          placeholder="Nome da pessoa"
          autoCorrect={false}
          onChangeText={setPlayer}
          onSubmitEditing={handleAddPlayer}
          returnKeyType="done"
        />
        <ButtonIcon icon="add" onPress={handleAddPlayer} />
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
          <PlayerCard name={item.name} onRemove={() => {}} />
        )}
        keyExtractor={(item) => item.name}
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
