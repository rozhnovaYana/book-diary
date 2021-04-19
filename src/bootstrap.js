import * as Fonts from "expo-font"
export async function bootstrap() {
  await Fonts.loadAsync(
    {
        "regular": require("../assets/fonts/RobotoSlab-Regular.ttf"),
        "bold": require('../assets/fonts/RobotoSlab-SemiBold.ttf'),
        "light": require("../assets/fonts/RobotoSlab-Light.ttf")
    }
  )
}