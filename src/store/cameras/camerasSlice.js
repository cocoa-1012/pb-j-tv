import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const camerasSlice = createSlice({
  name: 'cameras',
  initialState,
  reducers: {
    fetchData: (state, action) => {
      return action.payload;
    },
    add: (state, action) => {
      state.push(action.push);
    },
    remove: (state, action) => {
      return state.reduce((acc, curr) => {
        if (curr.id !== action.payload.id) {
          acc.push(curr);
        }
        return acc;
      }, []);
    },
  },
});

// Action creators are generated for each case reducer function
export const { add, fetchData, remove } = camerasSlice.actions;

export default camerasSlice.reducer;
