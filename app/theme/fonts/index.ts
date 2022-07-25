import * as Font from "expo-font"
import { Ionicons } from "@expo/vector-icons";

export const initFonts = async () => {
  await Font.loadAsync(Ionicons.font)
}
