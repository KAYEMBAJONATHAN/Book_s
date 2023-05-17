import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/Books/booksSlice';

const Book = ({ book }) => {
  const { title, author } = book;
  const dispatch = useDispatch();
  return (
    <ul>
      <li>{title}</li>
      <li>{author}</li>
      <li><button type="submit" onClick={() => dispatch(deleteBook(book))}>Delete</button></li>
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
