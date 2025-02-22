import axios from 'axios';
const API_URL = `${import.meta.env.VITE_API_BASE_URL}/api/jobs`;
const USERNAME = `${import.meta.env.VITE_BACKEND_USERNAME}`;
const PASSWORD = `${import.meta.env.VITE_BACKEND_PASSWORD}`;

export const getJobs = async () => {
    try {
        const response = await axios.get(API_URL, {
            headers: {
                'Authorization': `Basic ${btoa(`${USERNAME}:${PASSWORD}`)}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching job listings:', error);
        throw error;
    }
};