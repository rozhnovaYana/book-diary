import { FlatList } from "react-native";
import { IBook } from "../interfaces/IBook";
import BookItem from "../book-item";
interface IBookListProps {
    booksList: IBook[],
    removeBook: (id: string) => void
};

const BookList: React.FC<IBookListProps> = ({ booksList, removeBook }) => {
    return <FlatList data={booksList} keyExtractor={(item) => item.id} renderItem={({ item }) => <BookItem book={item} removeBook={removeBook}/>}/>
};
export default BookList;