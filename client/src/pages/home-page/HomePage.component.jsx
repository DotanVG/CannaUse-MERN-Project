import './home-page.styles.css'
import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/Auth.context';
import Loader from '../../components/shared/loader/Loader.component';

const HomePage = () => {
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
        <main>
            <div className='home-page'>
                {!authContextValue.userToken && (
                    <div className='card'>
                        <h1 className='main-greet'>Welcome To CANNAUSE</h1>
                        <h2 className='secondary-greet'>Your Friendly BudTracker</h2>
                        <div>
                            <Link to='/signup'>
                                <button className='home-page-button'>Sign Up</button>
                            </Link>
                            <Link to='/login'>
                                <button className='home-page-button'>Log In</button>
                            </Link>
                        </div>                    
                    </div>
                )}

                {authContextValue.userToken && (
                    <div className='dashboard-card'>
                        <h1>Dashboard</h1>
                    </div>
                )}
                    
            </div>
        </main>
    
    )
}

export default HomePage;