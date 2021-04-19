import * as Fonts from "expo-font"
export async function bootstrap() {
  await Fonts.loadAsync(
    {
        "regular": require("../assets/fonts/NotoSerifJP-Regular.otf"),
        "bold": require('../assets/fonts/NotoSerifJP-Bold.otf'),
        "light": require("../assets/fonts/NotoSerifJP-Light.otf"),
        "titleFont":require("../assets/fonts/Prata-Regular.ttf")
    }
  )
}