import React, {useLayoutEffect} from "react"
import { View, Text, StyleSheet } from "react-native"
import { AppHeaderIcon } from "../components/AppHeaderIcon"
import {
  HeaderButtons,
  Item
} from 'react-navigation-header-buttons';
export const MainScreen = ({navigation}) => {
    useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
          <Item title="menu" iconName="menu" onPress={() => alert('search')} />
        </HeaderButtons>
      ),
    });
  }, [navigation]);

    return (
        <View style={styles.center}>
            <Text>
                Main screen
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    center: {
        justifyContent: "center",
        alignItems: "center",
        flex:1
    }
})