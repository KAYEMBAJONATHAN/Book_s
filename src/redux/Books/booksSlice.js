import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk to fetch books from an API
const APIKEY = 'blZHfy5vqsWklQMhjTdx';
const URL = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${APIKEY}/books/`;

export const fetchBooks = createAsyncThunk('book/fetchBooks',
  async () => {
    const response = await axios.get(URL);
    try {
      return response.data;
    } catch (error) {
      return error;
    }
  });

const initialState = {
  books: [],
  status: 'idle',
  error: null,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, { payload }) => {
      state.books = [...state.books, payload];
    },
    deleteBook: (state, { payload }) => {
      state.books = state.books.filter((book) => book.item_id !== payload.item_id);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.books = action.payload || [];
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { addBook, deleteBook } = booksSlice.actions;

export default booksSlice.reducer;
