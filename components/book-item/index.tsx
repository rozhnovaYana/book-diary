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
                    <Text style={styles.bookName}>
                        {book.book}
                    </Text>
                </View>
                <View>
                    <Text style={styles.text}>
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
        backgroundColor: '#ffff',
        borderRadius: 22,
        marginTop: 10,
        padding: 15
    },
    pressed: {
        opacity: 0.1
    },
    text: {
        color: 'black',
        fontSize: 10
    },
    bookName: {
        fontSize: 16,
        color: 'black'
    }
})
export default BookItem;