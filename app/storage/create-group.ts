import AsyncStorage from "@react-native-async-storage/async-storage"
import { AppError } from "../utils/AppErrors"
import { getAllGroups } from "./geat-all-groups"
import { GROUP_COLLECTION } from "./storage-config"

export async function createGroup(name: string) {
  try {
    const storedGroups = await getAllGroups()
    const groupAlreadyExists = storedGroups.includes(name)
    if (groupAlreadyExists) {
      throw new AppError("Já existe um grupo cadastrado com esse nome.")
    }

    const storage = JSON.stringify([...storedGroups, name])

    await AsyncStorage.setItem(GROUP_COLLECTION, storage)
  } catch (err) {
    throw err
  }
}
