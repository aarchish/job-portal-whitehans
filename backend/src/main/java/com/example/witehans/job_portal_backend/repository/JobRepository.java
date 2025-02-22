package com.example.witehans.job_portal_backend.repository;

import com.example.witehans.job_portal_backend.model.Job;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JobRepository extends JpaRepository<Job, Long> {
}
