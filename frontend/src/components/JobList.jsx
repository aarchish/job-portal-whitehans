import React from 'react';
import { List, ListItem, ListItemText, Typography } from '@mui/material';

const JobList = ({ jobs }) => {
    return (
        <div>
            <Typography variant="h4" gutterBottom>
                Job Listings
            </Typography>
            <List>
                {jobs.map(job => (
                    <ListItem key={job.id} divider>
                        <ListItemText
                            primary={job.title}
                            secondary={
                                <>
                                    <Typography component="span" variant="body2" color="textPrimary">
                                        {job.company}
                                    </Typography>
                                    {" — "}
                                    {job.location} - {job.type}
                                    <br />
                                    {job.description}
                                </>
                            }
                        />
                    </ListItem>
                ))}
            </List>
        </div>
    );
};

export default JobList;