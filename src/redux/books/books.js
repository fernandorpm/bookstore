// Actions
const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

// Reducer
export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.book];

    case REMOVE_BOOK:
      return state.filter((b) => b.id !== action.id);

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

// side effects, only as applicable
// e.g. thunks, epics, etc
// export function getBook() {
//   return (dispatch) => get('/book').then((book) => dispatch(updateBook(book)));
// }
