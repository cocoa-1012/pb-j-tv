import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    fetchData: (state, action) => {
      return action.payload;
    },
    add: (state, action) => {
      state.push(action.payload);
    },
    update: (state, action) => {
      const userData = action.payload;
      const data = state.reduce((acc, cur) => {
        acc.push(cur.id === userData.id ? userData : cur);

        return acc;
      }, []);

      return data;
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
export const { add, fetchData, remove, update } = accountSlice.actions;

export default accountSlice.reducer;
