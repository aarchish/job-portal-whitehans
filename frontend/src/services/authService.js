import axios from 'axios';

const API_URL = 'http://localhost:3000/api/auth';

export const login = async (username, password) => {
    try {
        const response = await axios.post(`${API_URL}/login`, { username, password });
        return response.data;
    } catch (error) {
        console.error('Error logging in:', error);
        throw error;
    }
};

export const signUp = async (username, password) => {
    try {
        const response = await axios.post(`${API_URL}/signup`, { username, password });
        return response.data;
    } catch (error) {
        console.error('Error signing up:', error);
        throw error;
    }
};