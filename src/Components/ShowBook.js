import React from 'react';
import Book from './Book';

const ShowBook = () => {
  const books = [{ title: 'Act Like a Lady', author: 'Steve Harvey' }, { title: 'Pride and Prejudice', author: 'Jane Austen' }];
  return (
    <div>

      {books.map((element) => <Book book={element} key={element.title} />)}
    </div>
  );
};

export default ShowBook;
