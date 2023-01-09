import React from 'react';
import BusinessSummery from './BusinessSummery';
import HomeBanner from './HomeBanner';
import Review from './Review';
import Tools from './Tools';

const Home = () => {
    return (
        <div className='bg-[#FDF7FF]'>
            <div className='container mx-auto'>
                <HomeBanner></HomeBanner>
                <Tools></Tools>
                <BusinessSummery></BusinessSummery>
                <Review></Review>
            </div>
        </div>
    );
};

export default Home;