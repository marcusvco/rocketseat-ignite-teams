import AsyncStorage from "@react-native-async-storage/async-storage"
import { getAllGroups } from "./geat-all-groups"
import { GROUP_COLLECTION } from "./storage-config"

export async function createGroup(name: string) {
  try {
    const storedGroups = await getAllGroups()
    const storage = JSON.stringify([...storedGroups, name])
    await AsyncStorage.setItem(GROUP_COLLECTION, storage)
  } catch (err) {
    throw err
  }
}
