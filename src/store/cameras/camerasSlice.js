import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  layout: {
    displayGridSelected: 1,
    row: 1,
    column: 1,
    orientation: '',
  },
  slide: false,
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
      const { row, column, orientation } = action.payload;
      state.layout.row = row;
      state.layout.column = column;
      state.layout.orientation = orientation;
    },
    updateSlide: (state, action) => {
      state.slide = !!action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { add, fetchData, remove, changeLayout, updateSlide } =
  camerasSlice.actions;

export default camerasSlice.reducer;
