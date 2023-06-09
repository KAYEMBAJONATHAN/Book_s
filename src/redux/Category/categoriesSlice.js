import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
};

const categoriesSlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    status: (state) => {
      state.categories = 'Under construction';
    },
  },
});

export const { status } = categoriesSlice.actions;

export default categoriesSlice.reducer;
