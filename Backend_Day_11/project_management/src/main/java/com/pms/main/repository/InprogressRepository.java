package com.pms.main.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pms.main.model.Inprogress;

public interface InprogressRepository extends JpaRepository<Inprogress, Long> {
}
