import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, deleteTask } from './redux/tasksSlice';
import '../css/Task.css'

function Task() {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const [task, setTask] = useState('');
  const [deadline, setDeadline] = useState('');
  const [selectedTeamMember, setSelectedTeamMember] = useState('');
  const [isInputVisible, setInputVisible] = useState(false);

  useEffect(() => {
    const storedTeamMembers = JSON.parse(localStorage.getItem('teamMembers')) || [];
    if (storedTeamMembers.length > 0) {
      setSelectedTeamMember(storedTeamMembers[0].name);
    }
  }, []);

  const handleTaskChange = (e) => {
    setTask(e.target.value);
  };

  const handleDeadlineChange = (e) => {
    setDeadline(e.target.value);
  };

  const handleTeamMemberChange = (e) => {
    setSelectedTeamMember(e.target.value);
  };

  const handleAddTask = () => {
    if (task.trim() === '') {
      return;
    }

    const newTask = {
      description: task,
      deadline: deadline,
      teamMember: selectedTeamMember,
    };

    dispatch(addTask(newTask));
    setTask('');
    setDeadline('');

    // Toggle input visibility to hide input boxes and show the plus button
    setInputVisible(false);

    // Update local storage with the new tasks array
    updateLocalStorage([...tasks, newTask]);
  };

  const handleDeleteTask = (taskIndex) => {
    // Dispatch the deleteTask action with the task index
    dispatch(deleteTask(taskIndex));
  
    // Update local storage with the updated tasks array (after deletion)
    const updatedTasks = [...tasks];
    updatedTasks.splice(taskIndex, 1);
    updateLocalStorage(updatedTasks); // Update local storage
  };

  const updateLocalStorage = (updatedTasks) => {
    // Update local storage with the provided tasks array
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const handleToggleInput = () => {
    setInputVisible(!isInputVisible);
  };

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    
    dispatch({ type: 'tasks/clearTasks' });
    storedTasks.forEach((storedTask) => dispatch(addTask(storedTask)));
  }, [dispatch]);

  return (
    <div className='taskPage'>
    <div className="task-container">
      <div className='task-header'>Task List</div>
      <span className="task-form">
        {isInputVisible ? (
          <>
            <input
              type="text"
              placeholder="Enter a task"
              value={task}
              onChange={handleTaskChange}
            />
            <input
              type="date"
              placeholder="Set a deadline"
              value={deadline}
              onChange={handleDeadlineChange}
            />
            <select value={selectedTeamMember} onChange={handleTeamMemberChange}>
              {JSON.parse(localStorage.getItem('teamMembers')).map((member) => (
                <option key={member.id} value={member.name}>
                  {member.name}
                </option>
              ))}
            </select>
            <button onClick={handleAddTask}>Add Task</button>
          </>
        ) : (
          <svg onClick={handleToggleInput} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff3d3d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus-square"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M8 12h8"/><path d="M12 8v8"/></svg>
        )}
      </span>
      <ul className="task-ul">
        {tasks.map((task, index) => (
          <li className="task-li" key={index}>
            <div className='task-individual'>
            <div className="task-description">{task.description}</div>
            {task.deadline && (
              <div className="task-deadline">Deadline: {task.deadline}</div>
            )}
            {task.teamMember && (
              <div className="task-team-member">Assigned to: {task.teamMember}</div>
            )}
            <svg onClick={() => handleDeleteTask(index)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff3d3d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash-2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
            </div>
          </li>
        ))}
      </ul>
    </div>

    


    </div>
  );
}

export default Task;
