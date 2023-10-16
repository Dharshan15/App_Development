package com.pms.main.repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.pms.main.model.Task;

public interface TaskRepository extends JpaRepository<Task, Long> {
}
