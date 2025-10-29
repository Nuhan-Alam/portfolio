import React from 'react';
import PortfolioCard from '../components/Home/PortfolioCard';
import HomeDetails from '../components/Home/HomeDetails';
const Home = () => {
    return (
        <div>
        <div className='fixed inset-0 bg-cover bg-center z-0'
        style={{
            backgroundImage:`url(https://giffiles.alphacoders.com/935/9356.gif)`,
        }}/>
        <div className="fixed inset-0 bg-black/95 z-0"></div>
        <div className='relative z-10'>
                <PortfolioCard/>
                <HomeDetails/>
            </div>
        </div>
       
    );
};

export default Home;