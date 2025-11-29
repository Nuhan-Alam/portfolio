import React from 'react';
import HomeDetails from '../components/Home/HomeDetails';
import PortfolioCard from '../components/Home/portfolioCard';
const Home = () => {
    return (
        <div>
        <div className='fixed inset-0 bg-cover bg-center z-0'
        style={{
            backgroundImage:`url(https://giffiles.alphacoders.com/935/9356.gif)`,
        }}/>
        <div className="fixed inset-0 bg-black/95 z-0"></div>
        <div className='relative z-10 min-w-full grid grid-cols-3'>
                <div className='col-span-3 lg:col-span-1 px-1'>
                    <PortfolioCard/>
                </div>
                <div className='col-span-3 lg:col-span-2 w-full md:w-4/5 '>
                    <div className=''>
                    <HomeDetails/>
                    </div>

                </div>
                
            </div>
        </div>
       
    );
};

export default Home;