package com.pms.main.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pms.main.model.Members;

public interface MemberRepository extends JpaRepository<Members, Long> {
}
