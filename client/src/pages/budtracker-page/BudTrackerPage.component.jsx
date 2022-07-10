import React, { useState, useEffect, useContext } from 'react'
import "./budtracker-page.css"
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/Auth.context';
import Loader from '../../components/shared/loader/Loader.component';
import BudTracker from '../../components/budtracker/BudTracker.component.jsx';

const BudTrackerPage = () => {
    const navigate = useNavigate();

    const authContextValue = useContext(AuthContext);

    const [isLoading, setIsLoading] = useState(true);   

    useEffect(() => {
        
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, [navigate, authContextValue]);

    return isLoading ? (
        <Loader />
    ) : (  
        <main className='budtracker-page'>
            <BudTracker />
        </main>

    )
}

export default BudTrackerPage;