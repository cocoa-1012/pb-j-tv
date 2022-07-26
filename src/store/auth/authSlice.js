import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  user: {},
  error: {}
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      const { user } = action.payload;
      localStorage.setItem("auth", action.payload);
      state.isAuthenticated = Object.keys(user).length !== 0;
      state.user = user;
      state.error = {};
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = {};
    }
  },
});

// Action creators are generated for each case reducer function
export const { login, logout, loginError } = authSlice.actions;

export default authSlice.reducer;
