import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <section className='min-h-[70vh] flex justify-center items-center'>
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="w-10/12 mx-auto">
                    <h2 className="sm:text-4xl text-3xl mb-4 font-medium text-gray-900 text-center">Page not Found
                    </h2>
                    <div className='text-center py-4'>
                        <button className='btn btn-primary text-center'><Link to='/'>Back to Home</Link></button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NotFound;