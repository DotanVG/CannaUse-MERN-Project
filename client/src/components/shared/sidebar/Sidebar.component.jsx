import './sidebar.styles.css';
import React from 'react'

const Sidebar = (props) => {
    return (
    <div className={`backdrop ${props.className}`}>
        <div className='sidebar'>
            <button type='button' className='close-btn' onClick={props.hideSidebar}>
                X
            </button>

        </div>
    </div>
    )
};

export default Sidebar;