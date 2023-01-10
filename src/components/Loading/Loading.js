import React from 'react';
import { InfinitySpin } from 'react-loader-spinner';

const Loading = () => {
    return (
        <div className='py-5 md:py-7 xl:py-10'>
            <div className='container mx-auto min-h-[60vh] flex justify-center items-center'>
                <InfinitySpin
                    width='200'
                    color="#5111E3"
                />
            </div>
        </div>
    );
};

export default Loading;