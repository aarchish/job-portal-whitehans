import React, { useState } from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';
import { useAuth } from '../security/AuthContext';
import { useNavigate } from 'react-router-dom';
//import { login } from '../services/authService';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await login(username, password);
            console.log('Login successful:', response);
            // Handle successful login (e.g., redirect to home page)
            navigate('/');
        } catch (error) {
            console.error('Login failed:', error);
            // Handle login failure (e.g., show error message)
        }
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Login
            </Typography>
            <TextField
                label="Username"
                variant="outlined"
                fullWidth
                margin="normal"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                margin="normal"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <Button variant="contained" color="primary" onClick={handleLogin}>
                Login
            </Button>
        </Container>
    );
};

export default LoginPage;