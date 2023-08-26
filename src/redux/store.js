import { configureStore } from '@reduxjs/toolkit';
import messageReducer, { fetchMessage } from './messageSlice';

const store = configureStore({
  reducer: {
    message: messageReducer,
  },
});

store.dispatch(fetchMessage());
export default store;
