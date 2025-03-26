import AsyncStorage from "@react-native-async-storage/async-storage"
import { PlayerStorageDTO } from "./player-storage-dto"
import { PLAYER_COLLECTION } from "../storage-config"
import { getPlayersByGroup } from "./get-players-by-group"

export async function addPlayerByGroup(
  player: PlayerStorageDTO,
  group: string
) {
  try {
    const storedPlayers = await getPlayersByGroup(group)
    const playerAlreadyExists = storedPlayers.filter(
      (p) => p.name === player.name
    )

    if (playerAlreadyExists.length) {
      throw new Error("Já existe um jogador cadastrado com esse nome.")
    }

    const storage = JSON.stringify([...storedPlayers, player])
    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, storage)
  } catch (err) {
    throw err
  }
}
