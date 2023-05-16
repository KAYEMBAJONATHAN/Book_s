import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
};

const categoriesSlice = createSlice({
  name: 'categorie',
  initialState,
  reducers: {
    extraReducer: (state) => {
      state.categories = 'Under construction';
    },
  },
});

export const { extraReducer } = categoriesSlice.actions;

export default categoriesSlice.reducer;
