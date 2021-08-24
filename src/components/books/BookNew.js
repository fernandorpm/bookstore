import React from 'react';

const BookNew = () => (
  <>
    <h2 className="book-add-title">ADD NEW BOOK</h2>
    <div className="book-add-form">
      <input className="book-add-input" placeholder="Book Title" />
      <select className="book-add-category" name="categories" id="categories">
        <option value="" selected>Category</option>
        <option value="action">Action</option>
        <option value="science-fiction">Science Fiction</option>
        <option value="economy">Economy</option>
      </select>
      <input className="book-add-button" type="submit" value="ADD BOOK" />
    </div>
  </>
);

export default BookNew;
