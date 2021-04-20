import React from "react"
import { View, Text } from "react-native"
export const BookScreen = ({ route }) => {
    const{itemId}=route.params
    return <View>
        <Text>
            {itemId}
        </Text>
    </View>
}