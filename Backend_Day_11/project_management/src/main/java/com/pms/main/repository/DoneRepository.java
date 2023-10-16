package com.pms.main.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pms.main.model.Done;

public interface DoneRepository extends JpaRepository<Done,Long>{

}
