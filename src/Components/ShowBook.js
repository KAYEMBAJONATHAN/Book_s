import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';

const ShowBook = () => {
  const books = useSelector((store) => store.books.books);
  return (
    <div>
      {books.map((element) => (
        <Book key={element.id} book={element} />
      ))}
    </div>
  );
};

export default ShowBook;
