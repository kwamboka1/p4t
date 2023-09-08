import './home.scss';
import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

const Home = () => {
    return (
        <>
            <div className='home'>
                <Navbar />
                
            </div>
            <Footer />
        </>
    )
};

export default Home;
