import React, { useState } from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import AddBook from './components/add-book';
import BookList from './components/books-list';
import { IBook } from './components/interfaces/IBook';
import Button from './components/common/Button';


const App: React.FC = () => {
  const [ modalVisibility, setModalVisibility ] = useState<boolean>(false);
  const [ booksList, setBooksList ] = useState<IBook[]>([]);

  const createNewBook = (book: IBook) => {
    if (!book.book || !book.author) return
    setBooksList(books => [ ...books, book]);
    setModalVisibility(false);
  };
  
  const removeBook = (id: string) => {
    setBooksList(books => books.filter(item => item.id !== id));
  };

  return (
    <>
      <StatusBar style='light'/>
      <View style={styles.container}>
        <View style={styles.imageWrapper} >
          <Image style={styles.image} source={require("./assets/images/title.png")}/>
        </View>
        <Button title='Add New Book' onPress={() => setModalVisibility(true)}/>
        <AddBook modalVisibility={modalVisibility} createNewBook={createNewBook} closeModal={() => setModalVisibility(false)}/>
        <BookList booksList={booksList} removeBook={removeBook}/>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 50,
    paddingHorizontal: 15,
    width: '100%'
  },
  imageWrapper: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: 100,
    height: 100,
  }
});

export default App;
