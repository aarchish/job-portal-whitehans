import axios from 'axios';

const API_URL = 'https://api.example.com/jobs'; // Replace with your actual API endpoint

export const getJobs = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching job listings:', error);
        throw error;
    }
};