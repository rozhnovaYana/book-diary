import { useState } from "react";
import { TextInput, View, StyleSheet, Modal } from "react-native";
import { IBook } from "../interfaces/IBook";
import Button from "../common/Button";

interface IAddBookProps {
    modalVisibility: boolean,
    createNewBook: (book: IBook) => void,
    closeModal: () => void
};

const AddBook: React.FC<IAddBookProps> = ( { modalVisibility, createNewBook, closeModal }) => {
    const [ book, setNewBook ] = useState<IBook>({ id: Math.random().toString()});

    const updateBook = (text: string, option: string) : void => {
        setNewBook((item: IBook) => ({ ...item, [option]: text }))
    };
    const createBook = (book: IBook) => {
        setNewBook({id: Math.random().toString()})
        createNewBook(book)
    };

    return (
        <Modal visible={modalVisibility} animationType="fade">
            <View style={styles.centered}>
                <View style={styles.wrapper}>
                    <TextInput style={styles.textInput} placeholder="author" onChangeText={(text: string): void => updateBook(text, 'author')} value={book.author}/>
                    <TextInput style={styles.textInput}placeholder="book" onChangeText={(text: string): void => updateBook(text, 'book')}  value={book.book}/>
                    <View style={styles.buttonWrapper}>
                        <Button style={styles.button} title="Create" onPress={() => createBook(book)}/>
                        <Button style={styles.button} title="Close" onPress={closeModal}/>
                    </View>
                </View>
            </View>
        </Modal>
    )
};
const styles = StyleSheet.create({
    wrapper: {
        width: '80%',
        borderWidth: 2,
        borderRadius: 5,
        borderColor: '#D8605B',
        padding: 10
    },
    centered: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgba(244, 194, 127, 0.67)'
    },
    textInput: {
        borderWidth: 1,
        padding: 10,
        borderColor: '#9C9EA8',
        marginBottom: 5,
        backgroundColor: '#FFFFFF',
        borderRadius: 22,
        color: '#000000',
    },
    buttonWrapper: {
        flexDirection: 'row',
        justifyContent: "center",
        marginTop: 15
    },
    button: {
        marginHorizontal: 5,
        paddingVertical: 5,
        paddingHorizontal: 15,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
    }
})

export default AddBook;