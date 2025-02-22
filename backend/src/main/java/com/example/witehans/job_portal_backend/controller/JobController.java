package com.example.witehans.job_portal_backend.controller;

import com.example.witehans.job_portal_backend.model.Job;
import com.example.witehans.job_portal_backend.service.JobService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/jobs")
public class JobController {

    private final JobService jobService;

    public JobController(JobService jobService) {
        this.jobService = jobService;
    }

    @GetMapping
    public List<Job> getAllJobs() {
        return jobService.getAllJobs();
    }

    @GetMapping("/{id}")
    public Job getJobById(Long id) {
        return jobService.getJobById(id).orElse(null);
    }

    @PostMapping
    public Job saveJob(Job job) {
        return jobService.saveJob(job);
    }

    @DeleteMapping("/{id}")
    public void deleteJob(Long id) {
        jobService.deleteJob(id);
    }
}

