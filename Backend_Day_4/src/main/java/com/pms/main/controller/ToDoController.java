package com.pms.main.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.pms.main.model.ToDo;
import com.pms.main.service.ToDoService;

@RestController
public class ToDoController {
		@Autowired
		ToDoService as;
		

		@PostMapping("/post")
		public ResponseEntity<ToDo> create(final @RequestBody ToDo a){
			ToDo createData=as.create(a);
			return ResponseEntity.ok(createData);
		}
		
		@GetMapping("/all")
	    public ResponseEntity<List<ToDo>> getAllUsers() {
	        List<ToDo> academicList = as.getAllAcademicData();
	        return ResponseEntity.ok(academicList);
	    }
		
		@PutMapping("/put")
		public ResponseEntity<ToDo> update(final @RequestBody ToDo a)throws  JsonProcessingException{
			final ToDo updatedData=as.update(a);
			return ResponseEntity.ok(updatedData);
		}
		
		@DeleteMapping("/delete/{id}")
		public void delete(final @PathVariable Long id) {
			as.delete(id);
		}
}
