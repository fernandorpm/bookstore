import { useSelector } from 'react-redux';
import Book from '../books/Book';
import BookNew from '../books/BookNew';

const Books = () => {
  const bookConfigureStore = useSelector((store) => store.booksReducer);
  const allBooks = bookConfigureStore.map(
    (book) => (
      <Book
        key={book.id}
        id={book.id}
        title={book.title}
        author={book.author}
        category={book.category}
      />
    ),
  );

  return (
    <div className="container has-navbar">
      { allBooks }
      <BookNew className="book-new" />
    </div>
  );
};

export default Books;
