import React, { useState } from 'react';

const JobSearch = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search by job title"
        value={searchQuery}
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default JobSearch;