import './about-page.styles.css'
import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/Auth.context';
import Loader from '../../components/shared/loader/Loader.component';

const AboutPage = () => {
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
    <main>
        <div className='about-page'>
            <h1>About</h1>
            <div className='bottom-button'>
              <Link to='/'>
                <button className='home-page-button'>Go Back</button>
              </Link>
            </div>
        </div>
    </main>
    
  )
}

export default AboutPage;