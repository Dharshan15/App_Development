package com.pms.main.service;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pms.main.model.ToDo;
import com.pms.main.repository.TodoRepository;

@Service
public class ToDoService {
	@Autowired
	TodoRepository ar;
	public ToDo create(ToDo acad) {
        return ar.save(acad);
    }

	public List<ToDo> getAllAcademicData() {
		return ar.findAll();
	}

    public ToDo update(ToDo a) {
        return ar.save(a);
    }

    public void delete(Long id) {
        ar.deleteById(id);
    }
}
