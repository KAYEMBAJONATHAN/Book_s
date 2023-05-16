import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book }) => {
  const { title, author } = book;
  return (
    <ul>
      <li>{title}</li>
      <li>{author}</li>
      <li><button type="submit">Delete</button></li>
    </ul>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
