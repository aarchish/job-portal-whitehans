import React, { createContext, useState, useContext } from 'react';
import { login as loginService } from '../services/authService';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const login = async(username, password) => {
        try {
            const response = await loginService(username, password);
            setIsAuthenticated(true);
            return response;
        } catch (error) {
            console.error('Error logging in:', error);
            throw error;
        }
    };

    const logout = () => {
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};