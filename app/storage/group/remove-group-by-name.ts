import { AppError } from "@/app/utils/AppErrors"
import { getAllGroups } from "./geat-all-groups"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { GROUP_COLLECTION, PLAYER_COLLECTION } from "../storage-config"

export async function removeGroupByName(name: string) {
  try {
    const storedGroups = await getAllGroups()
    const groupAlreadyExists = storedGroups.includes(name)

    if (!groupAlreadyExists) {
      throw new AppError("Grupo não encontrado.")
    }

    const filtered = storedGroups.filter((group) => group !== name)
    const groups = JSON.stringify(filtered)
    await AsyncStorage.setItem(GROUP_COLLECTION, groups)
    await AsyncStorage.removeItem(`${PLAYER_COLLECTION}-${name}`)
  } catch (err) {
    throw err
  }
}
