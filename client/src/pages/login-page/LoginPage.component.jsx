import './login-page.styles.css';
import Card from '../../components/card/Card.component';
import LoginForm from './login-form/LoginForm.component';
import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/Auth.context';
import Loader from '../../components/shared/loader/Loader.component';

const LoginPage = () => {
    
    return(
        <main className="login-page">
            <Card className="login-page-card">
                <h1>Welcome Back!</h1>

                <LoginForm />
            </Card>
        </main>
    );
};

export default LoginPage;
