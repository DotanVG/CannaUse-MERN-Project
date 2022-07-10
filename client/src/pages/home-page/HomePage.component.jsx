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
                        <h1>Hello User!</h1>
                        <h2>What would you like to do?</h2>
                        <div className='buttons-container'>
                            <Link to='/about'>
                                <button className="button-82-pushable">   <span className="button-82-shadow"></span>   <span className="button-82-edge"></span>   <span className="button-82-front text">     About CannaUse   </span> </button>
                            </Link>
                            <Link to='/my-strains'>
                                <button className="button-82-pushable">   <span className="button-82-shadow"></span>   <span className="button-82-edge"></span>   <span className="button-82-front text">     Go To BudTracker   </span> </button>
                            </Link>
                                <button className="button-82-pushable">   <span className="button-82-shadow"></span>   <span className="button-82-edge"></span>   <span className="button-82-front text">     Research   </span> </button>
                        </div>
                    </div>
                )}
                    
            </div>
        </main>
    
    )
}

export default HomePage;