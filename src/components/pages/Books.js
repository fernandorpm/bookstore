import Book from '../books/Book';
import BookNew from '../books/BookNew';

import bookList from '../../lists/bookList';

const allBooks = bookList.map((book) => <Book key={book.id} info={book} />);

const Books = () => (
  <div className="container has-navbar">
    { allBooks }
    <BookNew className="book-new" />
  </div>
);

export default Books;
