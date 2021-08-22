import React from 'react';
import './Header.css';
import { IconContext } from 'react-icons';
import { RiVirusFill } from 'react-icons/ri'

const Header = () => {
    return(
        <div className="header-main-wrapper">
            <div className="header">
                <IconContext.Provider value={{size:'24px', color:'white'}}>
                    <RiVirusFill />
                </IconContext.Provider>
                <p className="logo">co-tracker</p>
            </div>
        </div>
    )
}

export default Header;
