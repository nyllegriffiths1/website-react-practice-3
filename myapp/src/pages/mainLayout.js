import React from 'react';
import '../styles/mainLayout.css';
import MyPhoto from '../images/zebra.jpg';
import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';
import CardLayout from '../components/cardLayout';

const MainLayout = () => {
    // logic
    return (
        <>
            <div className='layout-container'>
                <Navbar />
                <Sidebar />
                {/* <div className='layout-image'>
                    <img src={MyPhoto} />
                </div> */}
                <CardLayout />
            </div>
        </>
    )
}

export default MainLayout