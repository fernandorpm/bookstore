import React from 'react';
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import BookInfo from './BookInfo';
import BookProgress from './BookProgress';
import BookChapter from './BookChapter';

import { removeBook } from '../../redux/books/books';

const Book = ({
  id, title, category, percentage, chapter,
}) => {
  const dispatch = useDispatch();

  return (
    <div className="book">
      <div className="book-details">
        <BookInfo category={category} title={title} />
        <div className="book-actions">
          <a href="/#">Comments</a>
          {' | '}
          <a href="/#" onClick={() => dispatch(removeBook(id))}>Remove</a>
          {' | '}
          <a href="/#">Edit</a>
        </div>
      </div>
      <div className="book-status">
        <BookProgress percentage={percentage} />
        <BookChapter chapter={chapter} />
      </div>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  percentage: PropTypes.string,
  chapter: PropTypes.string,
};

Book.defaultProps = {
  percentage: '0%',
  chapter: '1',
};

export default Book;
