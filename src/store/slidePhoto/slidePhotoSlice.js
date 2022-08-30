import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const slidePhotoSlice = createSlice({
  name: 'slidePhoto',
  initialState,
  reducers: {
    fetchData: (state, action) => {
      return action.payload;
    },
    add: (state, action) => {
      state.push(action.payload);
    },
    remove: (state, action) => {
      return state.reduce((acc, curr) => {
        if (curr.id !== action.payload.id) {
          acc.push(curr);
        }
        return acc;
      }, []);
    },
    updateStatus: (state, action) => {
      const { value, id } = action.payload;
      const photo = state.find((p) => p.id === id);
      photo.isActive = value;
    },
  },
});

// Action creators are generated for each case reducer function
export const { add, fetchData, remove, updateStatus } = slidePhotoSlice.actions;

export default slidePhotoSlice.reducer;
