import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/Books/booksSlice';
import '../Style/form.css';

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
    <div className="form-container">
      <h3 className="header-form">Add New Book</h3>
      <form onSubmit={handleSubmit} className="form">
        <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} placeholder="Book" />
        <input type="text" value={author} onChange={(event) => setAuthor(event.target.value)} placeholder="Title" />
        <button type="submit" className="button">Add Book</button>
      </form>
    </div>
  );
};
export default Form;
