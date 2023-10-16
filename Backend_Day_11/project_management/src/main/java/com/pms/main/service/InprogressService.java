package com.pms.main.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pms.main.model.Inprogress;import com.pms.main.repository.InprogressRepository;

@Service
public class InprogressService {

    @Autowired
    private InprogressRepository inprogressRepository;

    public List<Inprogress> getAllTasks() {
        return inprogressRepository.findAll();
    }

    public Inprogress createTask(Inprogress task) {
        return inprogressRepository.save(task);
    }
    
    public Inprogress updateTask(Long taskId, Inprogress updatedTask) {
        // Ensure the task with the given ID exists in the database
        Optional<Inprogress> existingTaskOptional = inprogressRepository.findById(taskId);

        if (!existingTaskOptional.isPresent()) {
            return null;
        }

        // Get the existing task
        Inprogress existingTask = existingTaskOptional.get();

        // Update the fields of the existing task with the new values
        existingTask.setTask(updatedTask.getTask());
        existingTask.setDeadline(updatedTask.getDeadline());
        existingTask.setMember(updatedTask.getMember());

        // Save the updated task to the database
        return inprogressRepository.save(existingTask);
    }
    

    public void deleteTask(Long taskId) {
        inprogressRepository.deleteById(taskId);
    }
    
}
