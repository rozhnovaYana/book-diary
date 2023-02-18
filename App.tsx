import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import AddBook from './components/add-book';
import BookList from './components/books-list';
import { IBook } from './components/interfaces/IBook';

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
    <View style={styles.container}>
      <Button color='#06070D'title='Add New Book' onPress={() => setModalVisibility(true)}/>
      <AddBook modalVisibility={modalVisibility} createNewBook={createNewBook} closeModal={() => setModalVisibility(false)}/>
      <BookList booksList={booksList} removeBook={removeBook}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 50,
    paddingHorizontal: 15
  },
});

export default App;
