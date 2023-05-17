import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/Books/booksSlice';

const Form = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (title.trim() && author.trim()) {
      dispatch(
        addBook({
          item_id: Date.now(),
          title,
          author,
          categorie: '',
        }),
      );

      setTitle('');
      setAuthor('');
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
      <input type="text" value={author} onChange={(event) => setAuthor(event.target.value)} />
      <button type="submit">Add Book</button>
    </form>
  );
};
export default Form;
