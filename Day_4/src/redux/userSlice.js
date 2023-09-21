// userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    username: '', // Initial state for the username
  },
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload; // Update the username
    },
  },
});

export const { setUsername } = userSlice.actions;

export default userSlice.reducer;
