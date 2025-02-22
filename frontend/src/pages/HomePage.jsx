import React, { useEffect, useState } from 'react';
import { Container, Typography } from '@mui/material';
import JobList from '../components/JobList';
import JobSearch from '../components/JobSearch';
import JobFilter from '../components/JobFilter';
import { getJobs } from '../services/jobService';

const HomePage = () => {
    const [jobs, setJobs] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filters, setFilters] = useState({ location: '', type: '' });

    useEffect(() => {
        const fetchJobs = async () => {
            const jobData = await getJobs();
            console.log(jobData);
            setJobs(jobData);
        };
        fetchJobs();
    }, []);

    const handleSearch = (query) => {
        console.log('Search Query:', query);
        setSearchQuery(query);
    };

    const handleFilterChange = (newFilters) => {
        setFilters(newFilters);
    };

    const filteredJobs = jobs.filter(job => 
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
        (filters.location ? job.location === filters.location : true) &&
        (filters.type ? job.type === filters.type : true)
    );

    console.log('Filtered Jobs:', filteredJobs);

    return (
        <Container>
            <Typography variant="h2" gutterBottom>
                Job Listings
            </Typography>
            <JobSearch onSearch={handleSearch} />
            <JobFilter jobs={jobs} onFilterChange={handleFilterChange} />
            <JobList jobs={filteredJobs} />
        </Container>
    );
};

export default HomePage;