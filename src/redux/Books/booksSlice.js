import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => [...state, action.payload],
    deleteBook(state, action) => state.filter((book) => book.id !== action.payload)
    },
});

export const { addBook, deleteBook } = booksSlice.actions;

export default booksSlice.reducer;
