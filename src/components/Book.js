import React from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { Ionicons } from '@expo/vector-icons';


export const Book = ({ title, author, status, booked, onPressHandler, id }) => {
    return (
        <TouchableOpacity onPress={()=>onPressHandler(id)}>
            <View style={styles.wrapper}>
                <View style={styles.box}>
                    {status==="done"&&<Ionicons name="checkmark" size={24} color="black" />}
                </View>
                <View style={styles.texts}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.author}>{author}</Text>
                </View>
                {booked ? <Ionicons name="star-sharp" size={24} color="black" /> : <Ionicons name="star-outline" size={24} color="black" />}
            </View>
        </TouchableOpacity>
        
    )
}
const styles = StyleSheet.create({
    wrapper: {
        flexDirection: "row",
        justifyContent: "space-around",
        margin: 5,
        alignItems: "center",
        paddingHorizontal: 5,
        borderWidth: 1,
        borderColor: "#000000",
        paddingVertical:10
    },
    texts: {
        
    },
    title: {
        fontFamily: "bold",
        fontSize: 18,
        marginBottom:5
    },
    author: {
        fontSize: 16,
        fontFamily:"regular"
    },
    box: {
        width: 30,
        height: 30,
        borderWidth: 2,
        borderColor: "#000000",
        justifyContent: "center",
        alignItems:"center"
        
    }
})