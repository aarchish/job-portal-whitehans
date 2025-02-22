package com.example.witehans.job_portal_backend.repository;

import com.example.witehans.job_portal_backend.model.AppUsers;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AppUserRepository extends JpaRepository<AppUsers, Long> {
    Optional<AppUsers> findByUsername(String username);
}
