package com.pms.main.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pms.main.model.Task;
import com.pms.main.repository.TaskRepository;

@Service
public class TaskService {

    @Autowired
    private TaskRepository taskRepository;

    public List<Task> getAllTasks() {
        return taskRepository.findAll();
    }

    public Task createTask(Task task) {
        return taskRepository.save(task);
    }
    
    public Task updateTask(Long taskId, Task updatedTask) {
        // Ensure the task with the given ID exists in the database
        Optional<Task> existingTaskOptional = taskRepository.findById(taskId);

        if (!existingTaskOptional.isPresent()) {
            return null;
        }

        // Get the existing task
        Task existingTask = existingTaskOptional.get();

        // Update the fields of the existing task with the new values
        existingTask.setTask(updatedTask.getTask());
        existingTask.setDeadline(updatedTask.getDeadline());
        existingTask.setMember(updatedTask.getMember());

        // Save the updated task to the database
        return taskRepository.save(existingTask);
    }
    

    public void deleteTask(Long taskId) {
        taskRepository.deleteById(taskId);
    }
    
}
