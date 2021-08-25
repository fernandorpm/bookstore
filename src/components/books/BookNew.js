import React from 'react';
import { useDispatch } from 'react-redux';

import { v4 as uuidv4 } from 'uuid';

import { addBook } from '../../redux/books/books';

const BookNew = () => {
  const dispatch = useDispatch();

  const submitBookToStore = () => {
    // set values to variable;
    const title = document.querySelector('.book-add-title').value;
    const author = document.querySelector('.book-add-author').value;
    const category = document.querySelector('.book-add-category').value;

    // clear input field
    document.querySelector('.book-add-title').value = '';
    document.querySelector('.book-add-author').value = '';
    document.querySelector('.book-add-category').value = '';

    const newBook = {
      id: uuidv4(),
      title,
      author,
      category,
    };

    // dispatch an action and pass it the newBook object (your action's payload)
    dispatch(addBook(newBook));
  };

  return (
    <>
      <h2 className="book-add-h">ADD NEW BOOK</h2>
      <div className="book-add-form">
        <input className="book-add-title" placeholder="Book Title" />
        <input className="book-add-author" placeholder="Author" />
        <select className="book-add-category" name="categories" id="categories" defaultValue="">
          <option value="">Category</option>
          <option value="action">Action</option>
          <option value="science-fiction">Science Fiction</option>
          <option value="economy">Economy</option>
        </select>
        <button onClick={submitBookToStore} className="book-add-button" type="button">ADD BOOK</button>

        {/* <input className="book-add-button" type="submit" value="ADD BOOK" /> */}
      </div>
    </>
  );
};

export default BookNew;
