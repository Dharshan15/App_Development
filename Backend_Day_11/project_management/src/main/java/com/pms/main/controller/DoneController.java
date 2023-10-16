package com.pms.main.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pms.main.constant.Api;
import com.pms.main.model.Done;
import com.pms.main.service.DoneService;

@CrossOrigin
@RestController
@RequestMapping(Api.DONE)

public class DoneController {

    @Autowired
    private DoneService doneService;

    @GetMapping("/getall")
    public List<Done> getAllTasks() {
        return doneService.getAllTasks();
    }

    @PostMapping("/create")
    public Done createTask(@RequestBody Done task) {
        return doneService.createTask(task);
    }

    @PutMapping("/put/{taskId}")
    public Done updateTask(@PathVariable Long taskId, @RequestBody Done updatedTask) {
        Done result = doneService.updateTask(taskId, updatedTask);
        
        if (result == null) {   
        }
        return result;
    }
    
    @DeleteMapping("/delete/{taskId}")
    public void deleteTask(@PathVariable Long taskId) {
        doneService.deleteTask(taskId);
    }

}
