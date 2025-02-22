import React, { useState } from 'react';

const JobFilter = ({ onFilterChange }) => {
    const [location, setLocation] = useState('');
    const [jobType, setJobType] = useState('');

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
            <select value={location} onChange={handleLocationChange}>
                <option value="">Select Location</option>
                <option value="New York">New York</option>
                <option value="San Francisco">San Francisco</option>
                <option value="Remote">Remote</option>
            </select>
            <select value={jobType} onChange={handleJobTypeChange}>
                <option value="">Select Job Type</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Contract">Contract</option>
            </select>
        </div>
    );
};

export default JobFilter;