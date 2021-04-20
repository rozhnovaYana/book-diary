import React, {useLayoutEffect} from "react"
import { View, Text, StyleSheet } from "react-native"
import { AppHeaderIcon } from "../components/AppHeaderIcon"
import {
  HeaderButtons,
  Item
} from 'react-navigation-header-buttons';
import { BooksList } from "../components/BooksList";
import Ionicons from 'react-native-vector-icons/Ionicons';

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
        <View style={styles.wrapper}>
          <BooksList onPressHandler={(itemId) => navigation.navigate("Book", { itemId })} />
          <View style={styles.plus}>
            <Ionicons name="add-circle-outline" size={58} color="black" />
          </View>
        </View>
    )
}
const styles = StyleSheet.create({
  wrapper: {
    height:"100%"
  },
  plus: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: "white",
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: "center",
    alignItems:"center"
  }
})