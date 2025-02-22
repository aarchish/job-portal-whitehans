import React from 'react';

const JobList = ({ jobs }) => {
    return (
        <div>
            <h2>Job Listings</h2>
            <ul>
                {jobs.map(job => (
                    <li key={job.id}>
                        <h3>{job.title}</h3>
                        <p>{job.location}</p>
                        <p>{job.type}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default JobList;