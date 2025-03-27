import AsyncStorage from "@react-native-async-storage/async-storage"
import { getPlayersByGroup } from "./get-players-by-group"
import { PLAYER_COLLECTION } from "../storage-config"

export async function removePlayerByGroup(name: string, group: string) {
  try {
    const storage = await getPlayersByGroup(group)
    const filtered = storage.filter((player) => player.name !== name)
    const players = JSON.stringify(filtered)
    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, players)
  } catch (err) {
    throw err
  }
}
