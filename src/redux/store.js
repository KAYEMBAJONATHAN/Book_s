import { configureStore } from '@reduxjs/toolkit';
import booksSlice from './Books/booksSlice';
import categoriesSlice from './Category/categoriesSlice';

const store = configureStore({
  reducer: {
    books: booksSlice,
    category: categoriesSlice,
  },
});

export default store;
