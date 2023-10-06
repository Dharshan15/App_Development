package com.pms.main.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.pms.main.model.ToDo;

@Repository
public interface TodoRepository extends JpaRepository<ToDo,Long> {

}
