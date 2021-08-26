import React from 'react';
import PropTypes from 'prop-types';

const BookProgress = ({ percentage }) => (
  <div className="book-progress">
    <i />
    <div className="book-progress-rectangle">
      <div className="book-progress-circle" />
    </div>

    <div className="book-progress-text">
      <p className="book-progress-percentage">{percentage}</p>
      <p>Completed</p>
    </div>
  </div>
);

BookProgress.propTypes = {
  percentage: PropTypes.string.isRequired,
};

export default BookProgress;
