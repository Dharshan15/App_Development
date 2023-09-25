// teamMember.js
import { createSlice } from '@reduxjs/toolkit';

const teamMemberSlice = createSlice({
  name: 'teamMembers',
  initialState: JSON.parse(localStorage.getItem('teamMembers')) || [],
  reducers: {
    addMember: (state, action) => {
      state.push(action.payload);
      localStorage.setItem('teamMembers', JSON.stringify(state));
    },
    updateMember: (state, action) => {
      const updatedMember = action.payload;
      const memberIndex = state.findIndex((member) => member.id === updatedMember.id);
      if (memberIndex !== -1) {
        state[memberIndex] = updatedMember;
        localStorage.setItem('teamMembers', JSON.stringify(state));
      }
    },
    deleteMember: (state, action) => {
      const memberId = action.payload;
      state = state.filter((member) => member.id !== memberId);
      localStorage.setItem('teamMembers', JSON.stringify(state));
      return state;
    },
  },
});

export const { addMember, updateMember, deleteMember } = teamMemberSlice.actions;

export default teamMemberSlice.reducer;
