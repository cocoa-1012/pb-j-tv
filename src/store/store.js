import { configureStore } from '@reduxjs/toolkit';
import accountSlice from './account/accountSlice';
import authSlice from './auth/authSlice';

const store = configureStore({
  reducer: {
    auth: authSlice,
    accounts: accountSlice,
  },
});

export default store;
