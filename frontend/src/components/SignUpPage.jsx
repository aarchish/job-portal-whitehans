import React, { useState } from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';
import { signUp } from '../services/authService';

const SignUpPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = async () => {
        try {
            const response = await signUp(username, password);
            console.log('Sign-up successful:', response);
            // Handle successful sign-up (e.g., redirect to login page)
        } catch (error) {
            console.error('Sign-up failed:', error);
            // Handle sign-up failure (e.g., show error message)
        }
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Sign Up
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
            <Button variant="contained" color="primary" onClick={handleSignUp}>
                Sign Up
            </Button>
        </Container>
    );
};

export default SignUpPage;