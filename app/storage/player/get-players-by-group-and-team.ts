import AsyncStorage from "@react-native-async-storage/async-storage"
import { getPlayersByGroup } from "./get-players-by-group"

export async function getPlayersByGroupAndTeam(group: string, team: string) {
  try {
    const storage = await getPlayersByGroup(group)
    const players = storage.filter((player) => player.team === team)
    return players
  } catch (err) {
    throw err
  }
}
