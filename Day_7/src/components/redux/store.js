import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../redux/authSlice';
import teamMembersReducer from './teamMemberSlice';
import tasksReducer from './tasksSlice';
import doneTasksReducer from './doneTasksSlice'; 
import inProgressTasksReducer from './inProgressTasksSlice';

const store = configureStore({
  reducer: {
    auth: authReducer, 
    teamMembers: teamMembersReducer,
    tasks: tasksReducer,
    doneTasks: doneTasksReducer,
    inProgressTasks: inProgressTasksReducer,
  },
});

export default store;
