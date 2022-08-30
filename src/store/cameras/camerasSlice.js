import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  layout: {
    displayGridSelected: 1,
    row: 1,
    column: 1,
    orientation: '',
    slideShowPosition: 'bottom',
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
      state.data = state.data.reduce((acc, curr) => {
        if (curr.id !== action.payload.id) {
          acc.push(curr);
        }
        return acc;
      }, []);
    },
    changeLayout: (state, action) => {
      const {
        row = '',
        column = '',
        orientation = '',
        slideShowPosition = '',
      } = action.payload;
      if (row) {
        state.layout.row = row;
      }
      if (column) {
        state.layout.column = column;
      }
      if (orientation) {
        state.layout.orientation = orientation;
      }
      if (slideShowPosition) {
        state.layout.slideShowPosition = slideShowPosition;
      }
    },
    updateSlide: (state, action) => {
      state.slide = !!action.payload;
    },
    updateStatus: (state, action) => {
      const data = action.payload;
      state.data = state.data.reduce((acc, cur) => {
        if (cur.id === data.id) {
          acc.push(data);
        } else {
          acc.push(cur);
        }

        return acc;
      }, []);
    },
    update: (state, action) => {
      const data = action.payload;
      state.data = state.data.reduce((acc, cur) => {
        if (cur.id === data.id) {
          acc.push(data);
        } else {
          acc.push(cur);
        }

        return acc;
      }, []);
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  add,
  fetchData,
  remove,
  changeLayout,
  updateSlide,
  updateStatus,
  update,
} = camerasSlice.actions;

export default camerasSlice.reducer;
