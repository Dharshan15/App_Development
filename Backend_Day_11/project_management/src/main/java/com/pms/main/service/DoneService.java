package com.pms.main.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pms.main.model.Done;
import com.pms.main.model.Task;
import com.pms.main.repository.DoneRepository;

@Service
public class DoneService {

    @Autowired
    private DoneRepository doneRepository;

    public List<Done> getAllTasks() {
        return doneRepository.findAll();
    }

    public Done createTask(Done task) {
        return doneRepository.save(task);
    }
    
    public Done updateTask(Long taskId, Done updatedTask) {
        // Ensure the task with the given ID exists in the database
        Optional<Done> existingTaskOptional = doneRepository.findById(taskId);

        if (!existingTaskOptional.isPresent()) {
            return null;
        }

        // Get the existing task
        Done existingTask = existingTaskOptional.get();

        // Update the fields of the existing task with the new values
        existingTask.setTask(updatedTask.getTask());
        existingTask.setDeadline(updatedTask.getDeadline());
        existingTask.setMember(updatedTask.getMember());

        // Save the updated task to the database
        return doneRepository.save(existingTask);
    }
    

    public void deleteTask(Long taskId) {
        doneRepository.deleteById(taskId);
    }
    
}
