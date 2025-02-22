import React, { useState } from 'react';
import { TextField } from '@mui/material';

const JobSearch = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
        onSearch(event.target.value);
    };

    return (
        <div>
            <TextField
                label="Search by job title"
                variant="outlined"
                fullWidth
                value={searchQuery}
                onChange={handleSearchChange}
                margin="normal"
            />
        </div>
    );
};

export default JobSearch;