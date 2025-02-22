import React, { useEffect, useState } from 'react';
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
            setJobs(jobData);
        };
        fetchJobs();
    }, []);

    const handleSearch = (query) => {
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

    return (
        <div>
            <h1>Job Listings</h1>
            <JobSearch onSearch={handleSearch} />
            <JobFilter onFilterChange={handleFilterChange} />
            <JobList jobs={filteredJobs} />
        </div>
    );
};

export default HomePage;