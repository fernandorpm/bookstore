import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { v4 as uuidv4 } from 'uuid';

import { addBook } from '../../redux/books/books';
import getBooks from '../../redux/books/bookSlice';

const BookNew = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  const submitBookToStore = async () => {
    const newBook = {
      id: uuidv4(),
      title,
      category,
    };

    // dispatch an action and pass it the newBook object (your action's payload)
    await dispatch(addBook(newBook));

    setTitle('');
    setCategory('');

    await dispatch(getBooks());
    document.location.reload(true);
  };

  return (
    <>
      <h2 className="book-add-h">ADD NEW BOOK</h2>
      <div className="book-add-form">
        <input className="book-add-title" placeholder="Book Title" onChange={handleTitle} value={title} />
        <select className="book-add-category" name="categories" id="categories" onChange={handleCategory} value={category}>
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
