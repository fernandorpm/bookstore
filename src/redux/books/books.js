// // Actions
// const ADD_BOOK = 'bookStore/books/ADD_BOOK';
// const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

// // Reducer
// export default function reducer(state = [], action = {}) {

//   switch (action.type) {

//     case ADD_BOOK:
//       return [ ...state, action.payload];

//     case REMOVE_BOOK:
//       return state.filter(book => book.id !== id);

//     default:
//       return state;
//   }
// }

// // Action Creators
// export const addBook = payload => ({
//   type: ADD_BOOK,
//   payload
// })

// export const addBook = payload => ({
//   type: REMOVE_BOOK,
//   payload
// })

// // side effects, only as applicable
// // e.g. thunks, epics, etc
// export function getBook () {
//   return dispatch => get('/book').then(book => dispatch(updateBook(book)))
// }
