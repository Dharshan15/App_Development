import { createSlice } from '@reduxjs/toolkit';

const doneTasksSlice = createSlice({
  name: 'doneTasks',
  initialState: [],
  reducers: {
    addDoneTask: (state, action) => {
      state.push(action.payload);
    },
    updateDoneTask: (state, action) => {
      const { id, description, deadline, teamMember } = action.payload;
      const task = state.find((t) => t.id === id);
      if (task) {
        task.description = description;
        task.deadline = deadline;
        task.teamMember = teamMember;
      }
    },
    deleteDoneTask: (state, action) => {
      const index = action.payload;
      state.splice(index, 1); // Remove the task at the specified index
    },
  },
});

export const { addDoneTask, updateDoneTask, deleteDoneTask } = doneTasksSlice.actions;
export default doneTasksSlice.reducer;
