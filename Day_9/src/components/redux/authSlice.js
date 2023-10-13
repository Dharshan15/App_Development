import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    name: null, 
  },
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.name = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.name = null;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;