// Sidebar.js

import React, { useState } from 'react';
import '../styles/sidebar.css';
import '../styles/navbar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="burger-menu" onClick={toggleSidebar}>
        <div className="bar" style={{ backgroundColor: isOpen ? '#fff' : '#000' }}></div>
        <div className="bar" style={{ backgroundColor: isOpen ? '#fff' : '#000' }}></div>
        <div className="bar" style={{ backgroundColor: isOpen ? '#fff' : '#000' }}></div>
      </div>
      <ul id='sidebar-ul'>
        <li className='sidebar-link'>Home</li>
        <li className='sidebar-link'>About</li>
        <li className='sidebar-link'>Services
          <ul className='dropdown-menu'>
            <li className='dropdown-menu-link'>Service 1</li>
            <li className='dropdown-menu-link'>Service 2</li>
            <li className='dropdown-menu-link'>Service 3</li>
          </ul>
        </li>
        <li className='sidebar-link'>Contact</li>
      </ul>
    </div>
  );
};

export default Sidebar;
