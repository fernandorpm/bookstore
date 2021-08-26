const GET_BOOKS = 'books/booksslice/GET_BOOKS';
const GET_BOOKS_SUCCESS = 'books/booksslice/GET_BOOKS_SUCCESS';
const GET_BOOKS_ERROR = 'books/booksslice/GET_BOOKS_ERROR';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/iTR1hZSWYUZ0eWk8ev5I/books/';

const getBooks = () => async (dispatch) => {
  dispatch({ type: GET_BOOKS });
  const response = await fetch(url);
  const books = await response.json();
  return dispatch({ type: GET_BOOKS_SUCCESS, books });
};

export {
  getBooks as default,
  GET_BOOKS,
  GET_BOOKS_SUCCESS,
  GET_BOOKS_ERROR,
};
