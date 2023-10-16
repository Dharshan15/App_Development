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
import com.pms.main.model.Inprogress;
import com.pms.main.service.InprogressService;


@CrossOrigin
@RestController
@RequestMapping(Api.INPROGRESS)

public class InprogressController {

    @Autowired
    private InprogressService inprogressService;

    @GetMapping("/getall")
    public List<Inprogress> getAllTasks() {
        return inprogressService.getAllTasks();
    }

    @PostMapping("/create")
    public Inprogress createTask(@RequestBody Inprogress task) {
        return inprogressService.createTask(task);
    }

    @PutMapping("/put/{taskId}")
    public Inprogress updateTask(@PathVariable Long taskId, @RequestBody Inprogress updatedTask) {
        Inprogress result = inprogressService.updateTask(taskId, updatedTask);
        
        if (result == null) {   
        }
        return result;
    }
    
    @DeleteMapping("/delete/{taskId}")
    public void deleteTask(@PathVariable Long taskId) {
        inprogressService.deleteTask(taskId);
    }

}
