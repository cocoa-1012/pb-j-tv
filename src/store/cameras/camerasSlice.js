import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  layout: {
    rows: 1,
    cols: 1,
  },
};

export const camerasSlice = createSlice({
  name: 'cameras',
  initialState,
  reducers: {
    fetchData: (state, action) => {
      state.data = action.payload;
    },
    add: (state, action) => {
      state.data.push(action.payload);
    },

    remove: (state, action) => {
      state.data = state.reduce((acc, curr) => {
        if (curr.id !== action.payload.id) {
          acc.push(curr);
        }
        return acc;
      }, []);
    },
    changeLayout: (state, action) => {
      state.layout = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { add, fetchData, remove, changeLayout } = camerasSlice.actions;

export default camerasSlice.reducer;
