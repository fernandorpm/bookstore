import { GET_BOOKS, GET_BOOKS_SUCCESS, GET_BOOKS_ERROR } from './bookSlice';
// Actions
const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/iTR1hZSWYUZ0eWk8ev5I/books/';

const initialState = {
  books: [],
  pending: false,
  error: null,
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case GET_BOOKS:
      return { ...state, pending: true };
    case GET_BOOKS_SUCCESS:
      return { ...state, pending: false, books: action.books };
    case GET_BOOKS_ERROR:
      return { ...state, pending: false, error: action.error };

    case ADD_BOOK: {
      fetch(url, {
        method: 'POST',
        body: JSON.stringify({
          item_id: action.book.id,
          title: action.book.title,
          category: action.book.category,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      return state;
    }

    case REMOVE_BOOK: {
      fetch(`${url}${action.id}`, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      const entries = Object.fromEntries(
        Object.entries(state.books).filter(([id]) => id !== action.id),
      );
      return { ...state, pending: false, books: entries };
    }

    default:
      return state;
  }
}

// Action Creators
export const addBook = (book) => ({
  type: ADD_BOOK,
  book,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});
