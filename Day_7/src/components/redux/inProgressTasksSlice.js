import { createSlice } from '@reduxjs/toolkit';

const inProgressTasksSlice = createSlice({
  name: 'inProgressTasks',
  initialState: [],
  reducers: {
    addInProgressTask: (state, action) => {
      state.push(action.payload);
    },
    updateInProgressTask: (state, action) => {
      const { id, description, deadline, teamMember } = action.payload;
      const task = state.find((t) => t.id === id);
      if (task) {
        task.description = description;
        task.deadline = deadline;
        task.teamMember = teamMember;
      }
    },
    deleteInProgressTask: (state, action) => {
      const index = action.payload;
      state.splice(index, 1); 
    },
  },
});

export const { addInProgressTask, updateInProgressTask, deleteInProgressTask } = inProgressTasksSlice.actions;
export default inProgressTasksSlice.reducer;
