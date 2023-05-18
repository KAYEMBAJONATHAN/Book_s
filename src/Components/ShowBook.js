import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from '../redux/Books/booksSlice';

const ShowBook = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);
  const status = useSelector((state) => state.books.status);
  const error = useSelector((state) => state.books.error);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return (
      <div>
        {error}
      </div>
    );
  }

  return (
    <div>
      {books.map((book) => (
        <div key={book.item_id}>
          <h3>{book.title}</h3>
          <p>{book.author}</p>
          <p>{book.category}</p>
        </div>
      ))}
    </div>
  );
};

export default ShowBook;
