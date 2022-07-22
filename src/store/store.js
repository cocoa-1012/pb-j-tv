import { configureStore } from '@reduxjs/toolkit';
import accountSlice from './account/accountSlice';
import authSlice from './auth/authSlice';
import messageSlice from './messages/messageSlice';

const store = configureStore({
  reducer: {
    auth: authSlice,
    accounts: accountSlice,
    messages: messageSlice,
  },
});

export default store;
