import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/Books/booksSlice';
import '../Style/books.css';

const Book = ({ book }) => {
  const { title, author } = book;
  const dispatch = useDispatch();
  return (
    <div className="books-card">
      <div className="card-left">
        <h5>Action</h5>
        <h1 className="books_title">{title}</h1>
        <p className="books_author">{author}</p>
        <ul className="action">
          <li>
            <button type="button">Comments</button>
          </li>
          <div className="seperator" />
          <li>
            <button type="submit" onClick={() => dispatch(deleteBook(book))}>
              Delete
            </button>
          </li>
          <div className="seperator" />
          <li>
            <button type="button">Edit</button>
          </li>
        </ul>
      </div>
      <div className="left_book_container">
        <div className="card-middle">
          <div className="progress-spinner" />
          <div className="completed">
            <p className="progress-percent">50%</p>
            <p className="progress-text">Completed</p>
          </div>
          <div className="sep" />
        </div>
        <div className="card-right">
          <div>
            <h4>CURRENT CHAPTER</h4>
            <h2>Chapter 20</h2>
            <button type="button" className="primary-btn">
              UPDATE PROGRESS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
