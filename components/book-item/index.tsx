import { View, Text, StyleSheet, Pressable } from "react-native";
import { IBook } from "../interfaces/IBook";

interface IBookItemProps {
    book: IBook,
    removeBook: (id: string) => void
};

const BookItem: React.FC<IBookItemProps> = ({ book, removeBook }) => {
    return( 
        <Pressable 
        onPress={removeBook.bind(this, book.id)} 
        android_ripple={{ color: '#8a6501'}}
        style={({pressed}) => pressed && styles.pressed}
        >
            <View style={styles.wrapper}> 
                <View>
                    <Text>
                        {book.book}
                    </Text>
                </View>
                <View>
                    <Text>
                        {book.author}
                    </Text>
                </View>
            </View>
        </Pressable>
    )
};

const styles = StyleSheet.create({
    wrapper:{
        width: '100%',
        backgroundColor: '#FFC41F',
        padding: 5,
        borderRadius: 5,
        marginTop: 10
    },
    pressed: {
        opacity: 0.1
    }
})
export default BookItem;