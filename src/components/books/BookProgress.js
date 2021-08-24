import React from 'react';
import PropTypes from 'prop-types';

const BookProgress = ({ percentage }) => (
  <div className="book-progress">
    <i />
    <div className="book-progress-fill" />
    <div className="book-progress-background" />

    <p className="book-progress-percentage">{percentage}</p>
    <p>Completed</p>
  </div>
);

BookProgress.propTypes = {
  percentage: PropTypes.string.isRequired,
};

export default BookProgress;
