import { configureStore } from '@reduxjs/toolkit';
import user from './userSlice';
import chatBoxArea from './chatBoxAreaSlice';

const rootReducer = {
  user,
  chatBoxArea,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
