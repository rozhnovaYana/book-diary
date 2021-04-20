import React from "react"
import { FlatList, StyleSheet, View } from "react-native"
import { Book } from "./Book"
import {DATA} from "./data"

export const BooksList = ({onPressHandler}) => {
    const data = DATA
    const renderItem = ({item}) => {
        return <Book booked={item.booked} title={item.title} author={item.author} status={item.status} id={item.id} onPressHandler={onPressHandler}/>
    }
    return (
        <View style={styles.wrapper}>
            <FlatList data={data} renderItem={renderItem} keyExtractor={item => item.id} />
        </View>
    )
   
}
const styles = StyleSheet.create({
    wrapper: {
        
    }
})