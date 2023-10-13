import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    updateTask: (state, action) => {
      const { id, description, deadline, teamMember } = action.payload;
      const task = state.find((t) => t.id === id);
      if (task) {
        task.description = description;
        task.deadline = deadline;
        task.teamMember = teamMember;
      }
    },
    deleteTask: (state, action) => {
      const index = action.payload;
      state.splice(index, 1);
    },
  },
});

export const { addTask, updateTask, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;
