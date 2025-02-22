import React, { useState, useEffect } from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const JobFilter = ({ jobs, onFilterChange }) => {
    const [location, setLocation] = useState('');
    const [locations, setLocations] = useState([]);
    const [jobType, setJobType] = useState('');
    const [jobTypes, setJobTypes] = useState([]);

    useEffect(() => {
        const uniqueLocations = [...new Set(jobs.map(job => job.location))];
        const uniqueJobTypes = [...new Set(jobs.map(job => job.type))];
        setLocations(uniqueLocations);
        setJobTypes(uniqueJobTypes);
    }, [jobs]);

    const handleLocationChange = (event) => {
        setLocation(event.target.value);
        onFilterChange({ location: event.target.value, type: jobType });
    };

    const handleJobTypeChange = (event) => {
        setJobType(event.target.value);
        onFilterChange({ location, type: event.target.value });
    };

    return (
        <div>
            <FormControl fullWidth margin="normal">
                <InputLabel>Location</InputLabel>
                <Select value={location} onChange={handleLocationChange}>
                    <MenuItem value="">Select Location</MenuItem>
                    {locations.map((loc, index) => (
                        <MenuItem key={index} value={loc}>{loc}</MenuItem>
                    ))}
                </Select>
            </FormControl>
            <FormControl fullWidth margin="normal">
                <InputLabel>Job Type</InputLabel>
                <Select value={jobType} onChange={handleJobTypeChange}>
                    <MenuItem value="">Select Job Type</MenuItem>
                    {jobTypes.map((type, index) => (
                        <MenuItem key={index} value={type}>{type}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
};

export default JobFilter;