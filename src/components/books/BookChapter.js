import React from 'react';
import PropTypes from 'prop-types';

const BookChapter = ({ chapter }) => (
  <div className="book-chapter">
    <p>CURRENT CHAPTER</p>
    <p className="book-chapter-current">{chapter}</p>
    <button type="button" className="book-chapter-update">UPDATE PROGRESS</button>
  </div>
);

BookChapter.propTypes = {
  chapter: PropTypes.string.isRequired,
};

export default BookChapter;
