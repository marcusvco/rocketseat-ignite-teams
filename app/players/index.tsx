import { Button } from "@/components/button"
import { ButtonIcon } from "@/components/button-icon"
import { Filter } from "@/components/filter"
import { Header } from "@/components/header"
import { Highlight } from "@/components/highlight"
import { Input } from "@/components/input"
import { ListEmpty } from "@/components/list-empty"
import { PlayerCard } from "@/components/player-card"
import { useLocalSearchParams, useRouter } from "expo-router"
import { useEffect, useRef, useState } from "react"
import { Alert, FlatList, TextInput } from "react-native"
import { removeGroupByName } from "../storage/group/remove-group-by-name"
import { addPlayerByGroup } from "../storage/player/add-player-by-group"
import { getPlayersByGroupAndTeam } from "../storage/player/get-players-by-group-and-team"
import { PlayerStorageDTO } from "../storage/player/player-storage-dto"
import { removePlayerByGroup } from "../storage/player/remove-player-by-group"
import { AppError } from "../utils/AppErrors"
import { Container, Form, HeaderList, NumberOfPlayers } from "./styles"
import { Loading } from "@/components/loading"

export default function Players() {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [team, setTeam] = useState<string>("Time A")
  const [player, setPlayer] = useState<string>("")
  const [players, setPlayers] = useState<PlayerStorageDTO[]>([])

  const router = useRouter()
  const { group } = useLocalSearchParams()
  const groupString: string = Array.isArray(group) ? group.join(", ") : group

  const inputPlayerRef = useRef<TextInput>(null)

  async function handleAddPlayer() {
    if (player.trim().length === 0) {
      return Alert.alert("Nova Pessoa", "Digite o nome da pessoa.")
    }

    const newPlayer = {
      name: player,
      team,
    }

    try {
      await addPlayerByGroup(newPlayer, groupString)
      inputPlayerRef.current?.blur()
      setPlayer("")
      await fetchPlayersByGroupAndTeam()
    } catch (err) {
      if (err instanceof AppError) {
        return Alert.alert("Nova Pessoa", err.message)
      }
      Alert.alert("Nova Pessoa", "Não foi possível adicionar a pessoa.")
      console.log(err)
    }
  }

  async function fetchPlayersByGroupAndTeam() {
    setIsLoading(true)

    try {
      const players = await getPlayersByGroupAndTeam(groupString, team)
      setPlayers(players)
    } catch (err) {
      console.log(err)
    }

    setIsLoading(false)
  }

  async function handleRemovePlayer(name: string) {
    try {
      await removePlayerByGroup(name, groupString)
      await fetchPlayersByGroupAndTeam()
    } catch (err) {
      console.log(err)
      Alert.alert("Remover Pessoa", "Não foi possível remover a pessoa.")
    }
  }

  async function removeGroup(name: string) {
    try {
      await removeGroupByName(name)
      router.dismissAll()
    } catch (err) {
      if (err instanceof AppError) {
        return Alert.alert("Remover Turma", err.message)
      }
      console.log(err)
      Alert.alert("Remover Turma", "Não foi possível remover a turma.")
    }
  }

  async function handleRemoveGroup() {
    Alert.alert("Remover Turma", "Deseja realmente remover a turma?", [
      {
        text: "Não",
        style: "cancel",
      },
      {
        text: "Sim",
        onPress: () => removeGroup(groupString),
      },
    ])
  }

  useEffect(() => {
    fetchPlayersByGroupAndTeam()
  }, [team])

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

      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          data={players}
          renderItem={({ item }) => (
            <PlayerCard
              name={item.name}
              onRemove={() => handleRemovePlayer(item.name)}
            />
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
      )}

      <Button
        title="Remover turma"
        type="SECONDARY"
        onPress={handleRemoveGroup}
      />
    </Container>
  )
}
