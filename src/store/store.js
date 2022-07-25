import { configureStore } from '@reduxjs/toolkit';
import accountSlice from './account/accountSlice';
import authSlice from './auth/authSlice';
import camerasSlice from './cameras/camerasSlice';
import messageSlice from './messages/messageSlice';
import slidePhotoSlice from './slidePhoto/slidePhotoSlice';

const store = configureStore({
  reducer: {
    auth: authSlice,
    accounts: accountSlice,
    messages: messageSlice,
    cameras: camerasSlice,
    slidePhotos: slidePhotoSlice,
  },
});

export default store;
