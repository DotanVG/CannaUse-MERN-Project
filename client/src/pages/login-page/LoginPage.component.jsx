import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/Auth.context';
import './login-page.styles.css';

import Card from '../../components/card/Card.component';
import Loader from '../../components/shared/loader/Loader.component';
import LoginForm from './login-form/LoginForm.component';

const LoginPage = () => { 
    const navigate = useNavigate();

    const authContextValue = useContext(AuthContext);

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (authContextValue.userToken) {
            navigate('/');
        }

        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, [navigate, authContextValue]);

    return isLoading ? (
        <Loader />
    ) : (
        <main className="login-page">
            <h1>Welcome Back!</h1>
            <Card className="login-page-card">
                <LoginForm />
            </Card>
        </main>
    );
};

export default LoginPage;
