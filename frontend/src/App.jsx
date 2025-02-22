import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { AuthProvider } from './security/AuthContext';
import ProtectedRoute from './security/ProtectedRoute';

import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import HomePage from './pages/HomePage';


const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={ <HomePage />} />
                <Route path="/login" element={ <LoginPage /> } />
                <Route path="/signup" element={ <SignUpPage /> } />
            </Routes>
        </Router>
    );
};

export default App;