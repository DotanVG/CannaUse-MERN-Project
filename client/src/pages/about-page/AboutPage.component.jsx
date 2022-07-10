import './about-page.styles.css'
import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/Auth.context';
import Loader from '../../components/shared/loader/Loader.component';
import Card from '../../components/card/Card.component';

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
            <Card className='about-card'>
              <div className='paragraph'>
                CannaUse WebApp is the outcome of a personal need
              </div>
              <div className='paragraph'>
                With the desire to get Hands-On Experience with Full-Stack Project development and the MERN Stack
              </div>
              <div className='paragraph'>
                I developed my own useful 'prettier than an excel sheet' BudTracker for medicinal cannabis treatment
              </div>
              <div className='paragraph'>
                CannaUse provides secured follow-up & Research services for medicinal cannabis patients
              </div>
            </Card>
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