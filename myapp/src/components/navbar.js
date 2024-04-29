import React from 'react';
import '../styles/navbar.css';
import MyLogo from '../images/fox.svg';

const Navbar = () => {
    return (
        <div className='nav-container'>
            <div className='logo-container'>
                <img src={MyLogo} alt="logo" />
            </div>

            <div className='nav-links-container'>
                <ul id='navbar-ul'>
                    <li className='nav-link'>Home</li>
                    <li className='nav-link'>About</li>
                    <li className='nav-link'>Services
                        <ul className="dropdown-menu">
                            <li className='dropdown-menu-link'>Service 1</li>
                            <li className='dropdown-menu-link'>Service 2</li>
                            <li className='dropdown-menu-link'>Service 3</li>
                        </ul>
                    </li>
                    <li className='nav-link'>Contact</li>
                </ul>
            </div>

        </div>
    );
};

export default Navbar;