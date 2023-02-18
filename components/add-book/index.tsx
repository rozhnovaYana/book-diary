import { useState } from "react";
import { TextInput, View, StyleSheet, Modal, Button } from "react-native";
import { IBook } from "../interfaces/IBook";

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
                        <Button color='#06070D' title="Create" onPress={() => createBook(book)}/>
                        <Button color='#06070D' title="Close" onPress={closeModal}/>
                    </View>
                </View>
            </View>
        </Modal>
    )
};
const styles = StyleSheet.create({
    wrapper: {
        width: '80%',
        borderWidth: 3,
        borderRadius: 5,
        borderColor: '#9C9EA8',
        padding: 10
    },
    centered: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
    textInput: {
        borderWidth: 1,
        padding: 5,
        borderColor: '#9C9EA8',
        marginBottom: 5
    },
    buttonWrapper: {
        flexDirection: 'row',
        justifyContent: 'center'
    }
})

export default AddBook;