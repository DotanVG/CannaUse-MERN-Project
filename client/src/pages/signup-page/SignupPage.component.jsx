import './signup-page.styles.css';
import Card from '../../components/card/Card.component';
import SignupForm from './signup-form/SignupForm.component';
import { AuthContext } from '../../contexts/Auth.context';
import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Loader from '../../components/shared/loader/Loader.component';

import React from 'react';

const SignupPage = () => {
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
        <main className="signup-page">
            <h1>Hello New User!</h1>
            <Card className="signup-page-card">
                <SignupForm />
            </Card>
        </main>
        
    )
}

export default SignupPage;