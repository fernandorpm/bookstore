import React from 'react';
import PropTypes from 'prop-types';

const BookInfo = ({ category, title }) => (
  <div>
    <p className="book-category">{category}</p>
    <p className="book-title">{title}</p>
  </div>
);

BookInfo.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default BookInfo;
