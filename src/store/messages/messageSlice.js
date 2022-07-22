import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    fetch: (state, action) => {
      state.today = action.payload;
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
  },
});

// Action creators are generated for each case reducer function
export const { add, fetch, remove } = accountSlice.actions;

export default accountSlice.reducer;
