import React, { useState, useEffect } from 'react';
import '../css/Task.css';
import { changeTasks, createTask, getTasks, removeTasks } from './api';

function Task() {
  const [formState, setFormState] = useState({
    task: '',
    deadline: '',
    member: ''
  });

  const [isInputVisible, setIsInputVisible] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  const generateUniqueId = () => {
    return Date.now().toString();
  };

  const fetchTasks = async () => {
    try {
      const response = await getTasks();
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleFieldChange = (field, value) => {
    setFormState({ ...formState, [field]: value });
  };

  const handleAddTask = async () => {
    const { task, deadline, member } = formState;
    if (task.trim() === '') {
      return;
    }
  
    if (editingTask) {
      // Update the existing task
      try {
        await changeTasks(editingTask.id, formState);
        const updatedTasks = tasks.map((task) => {
          if (task.id === editingTask.id) {
            return {
              ...task,
              task: formState.task,
              deadline: formState.deadline,
              member : formState.member
              
            };
          }
          return task;
        });
        setTasks(updatedTasks);
        
        setEditingTask(null); // Clear the editing task state
      } catch (error) {
        console.error('Error updating task:', error);
      }
    } else {
      // Create a new task
      const newTaskId = generateUniqueId();
      const newTask = {
        id: newTaskId,
        task: task,
        deadline: deadline,
        member: member
      };
  
      try {
        const response = await createTask(newTask);
        const createdTask = response.data;
        setTasks((prevTasks) => [...prevTasks, createdTask]);
        setFormState({
          task: '',
          deadline: '',
          member: ''
        });
      } catch (error) {
        console.error('Error creating task:', error);
      }
    }

    setIsInputVisible(false);
  };
  

  const handleToggleInput = () => {
    setIsInputVisible((prevIsInputVisible) => !prevIsInputVisible);
  };

  const handleDeleteTask = async (taskId) => {
    try {
      await removeTasks(taskId);
      const updatedTasks = tasks.filter((task) => task.id !== taskId);
      setTasks(updatedTasks);
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const handleEdit = async (taskId) => {
    const taskToEdit = tasks.find((task) => task.id === taskId);
  
    if (taskToEdit) {
      setFormState({
        task: taskToEdit.task,
        deadline: taskToEdit.deadline,
        member: taskToEdit.member, 
      });
  
      setEditingTask(taskToEdit);
    }
  };
  

  return (
    <div className="taskPage">
      <div className="task-container">
        <div className="task-header">Task List</div>
        <span className="task-form">
          {isInputVisible ? (
            <>
              <input
                type="text"
                value={formState.task}
                name="task"
                placeholder='Enter description'
                className="Task-inputBox"
                onChange={(e) => handleFieldChange('task', e.target.value)}
              />
              <input
                type="date"
                value={formState.deadline}
                name="deadline"
                className="Task-inputBox"
                onChange={(e) => handleFieldChange('deadline', e.target.value)}
              />
              <input
                type="text"
                value={formState.member}
                name="member"
                placeholder='Assign member'
                className="Task-inputBox"
                onChange={(e) => handleFieldChange('member', e.target.value)}
              />
              <button onClick={handleAddTask}>Add Task</button>
            </>
          ) : (
            <svg
              onClick={handleToggleInput}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ff3d3d"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-plus-square"
            >
              <rect width="18" height="18" x="3" y="3" rx="2" />
              <path d="M8 12h8" />
              <path d="M12 8v8" />
            </svg>
          )}
        </span>
        <ul className="task-ul">
          {tasks.map((task) => (
            <li className="task-li" key={task.id}>
              {editingTask && editingTask.id === task.id ? (
                <div className="task-individual">
                  <input
                    type="text"
                    value={formState.task}
                    name="task"
                    className="Task-inputBox"
                    onChange={(e) => handleFieldChange('task', e.target.value)}
                  />
                  <input
                    type="date"
                    value={formState.deadline}
                    name="deadline"
                    className="Task-inputBox"
                    onChange={(e) => handleFieldChange('deadline', e.target.value)}
                  />
                  <input
                    type="text"
                    value={formState.member}
                    name="member"
                    className="Task-inputBox"
                    onChange={(e) => handleFieldChange('member', e.target.value)}
                  />
                  <button onClick={handleAddTask}>Save</button>
                </div>
              ) : (
                <div className="task-individual">
                  <div className="task-description">{task.task}</div>
                  {task.deadline && (
                    <div className="task-deadline">Deadline: {task.deadline}</div>
                  )}
                  {task.member && (
                    <div className="task-team-member">Assigned to: {task.member}</div>
                  )}
                  <div className="task-actions">
                    <svg
                      onClick={() => handleEdit(task.id)}
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#ed3f3f"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-pencil"
                    >
                      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                      <path d="m15 5 4 4" />
                    </svg>
                    <svg
                      onClick={() => handleDeleteTask(task.id)}
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#ff3d3d"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-trash-2"
                    >
                      <path d="M3 6h18" />
                      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                      <path d="M8 6V4c0-1 1-2 2-2h4c1 0-2 1 2 2v2" />
                      <line x1="10" x2="10" y1="11" y2="17" />
                      <line x1="14" x2="14" y1="11" y2="17" />
                    </svg>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Task;
