import React from 'react';
import PropTypes from 'prop-types';

const BookInfo = ({ category, title, author }) => (
  <div>
    <p className="book-category">{category}</p>
    <p className="book-title">{title}</p>
    <p className="book-author">{author}</p>
  </div>
);

BookInfo.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default BookInfo;
