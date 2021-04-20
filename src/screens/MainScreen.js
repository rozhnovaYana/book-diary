import React, {useLayoutEffect} from "react"
import { View, Text, StyleSheet } from "react-native"
import { AppHeaderIcon } from "../components/AppHeaderIcon"
import {
  HeaderButtons,
  Item
} from 'react-navigation-header-buttons';
import { BooksList } from "../components/BooksList";
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
        <View >
          <BooksList onPressHandler={(itemId)=>navigation.navigate("Book", {itemId})}/>
        </View>
    )
}
const styles = StyleSheet.create({

})