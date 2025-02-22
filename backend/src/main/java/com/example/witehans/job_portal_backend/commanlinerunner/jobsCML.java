package com.example.witehans.job_portal_backend.commanlinerunner;

import com.example.witehans.job_portal_backend.model.Job;
import com.example.witehans.job_portal_backend.repository.JobRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class jobsCML implements CommandLineRunner {

    private final Logger logger = LoggerFactory.getLogger(getClass());
    private final JobRepository repository;

    public jobsCML(JobRepository repository) {
        this.repository = repository;
    }

    @Override
    public void run(String... args) throws Exception {
        logger.info("Inserting jobs");
        repository.save(new Job("Software Engineer", "Google", "Bangalore", "Full Time", "Java, Spring Boot, Angular"));
        repository.save(new Job("Data Scientist", "Amazon", "Hyderabad", "Full Time", "Python, Machine Learning, Deep Learning"));
        repository.save(new Job("Business Analyst", "Microsoft", "Bangalore", "Full Time", "SQL, Tableau, Power BI"));
    }
}
