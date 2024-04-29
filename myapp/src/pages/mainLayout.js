import React from 'react';
import '../styles/mainLayout.css';
import MyPhoto from '../images/zebra.jpg';
import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';
import CardLayout from '../components/cardLayout';
import InputTest from '../components/InputValue';
import DogBreedInfo from '../components/dogBreedInfo';

const MainLayout = () => {
    // logic
    return (
        <>
            <div className='layout-container'>
                <Navbar />
                <Sidebar />
                <InputTest />
                <div className='line-break'>
                    
                </div>
                <DogBreedInfo />
            </div>
        </>
    )
}

export default MainLayout