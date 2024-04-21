// Sidebar.js

import React, { useState } from 'react';
import '../styles/sidebar.css';

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
        <li className='sidebar-link'>Contact</li>
      </ul>
    </div>
  );
};

export default Sidebar;
