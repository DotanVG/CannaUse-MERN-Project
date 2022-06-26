import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './header.styles.css';
import mainLogo from '../../../images/main-logo.jpg';
import leafMenu from '../../../images/leaf-menu.png';
import Sidebar from '../sidebar/Sidebar.component';

const Header = () => {
    const navigate = useNavigate();

    const handleRedirectHome = () => navigate('/');

    const [sidebarClass, setSidebarClass] = useState('');

    const showSidebar = () => setSidebarClass('show');

    const hideSidebar = () => setSidebarClass('');

    

    return (
        <header className='main-header'>
                        
        <img className='main-logo' src={mainLogo} alt='CannaUse Logo' onClick={handleRedirectHome} />

        
        <button className='hamburger-btn' onClick={showSidebar}> 
                <img className='leaf-menu' src={leafMenu} alt='Leaf Menu Icon'/>
        </button>
        
        <Sidebar className={sidebarClass} hideSidebar={hideSidebar} />
        
        </header>

    );
};

export default Header;
