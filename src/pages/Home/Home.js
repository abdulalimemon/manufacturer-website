import React from 'react';
import BusinessSummery from './BusinessSummery';
import HomeBanner from './HomeBanner';
import Review from './Review';

const Home = () => {
    return (
        <div className='bg-[#FDF7FF]'>
            <div className='container mx-auto'>
                <HomeBanner></HomeBanner>
                <BusinessSummery></BusinessSummery>
                <Review></Review>
            </div>
        </div>
    );
};

export default Home;