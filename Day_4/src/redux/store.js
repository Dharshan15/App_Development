// store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice'; // Import your userSlice reducer

const store = configureStore({
  reducer: {
    user: userReducer, // Add userSlice reducer to the store
  },
});

export default store;
