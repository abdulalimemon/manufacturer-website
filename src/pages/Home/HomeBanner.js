import React from 'react';
import { Link } from 'react-router-dom';

const HomeBanner = () => {
    return (
        <section className="relative pt-12 overflow-hidden sm:pt-16">
            <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-sm font-normal tracking-widest uppercase">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500"> Your startup needs a kick </span>
                    </p>
                    <h2 className="mt-8 text-4xl font-normal text-black sm:text-5xl lg:text-6xl xl:text-7xl">Industry a variety of high quality products</h2>

                    <div className="flex flex-col items-center justify-center px-8 mt-12 space-y-5 sm:space-y-0 sm:px-0 sm:space-x-5 sm:flex-row">
                        <div className="relative inline-flex items-center justify-center w-full sm:w-auto group">
                            <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50"></div>
                            <Link to='' className="relative inline-flex items-center justify-center w-full px-8 py-3 text-base font-normal text-white bg-black border border-transparent rounded-full sm:w-auto" role="button"> Start Exploring </Link>
                        </div>
                    </div>
                </div>

                <div className="relative mt-12 -mb-4 sm:-mb-10 lg:-mb-12 sm:mt-16 lg:mt-24">
                    <div className="absolute top-0 transform -translate-x-1/2 left-1/2">
                    </div>

                    <div className="absolute inset-0">
                        <img className="object-cover w-full h-full opacity-50" src="https://landingfoliocom.imgix.net/store/collection/dusk/images/noise.png" alt="" />
                    </div>

                    <img className="relative w-full max-w-5xl mx-auto" src="https://landingfoliocom.imgix.net/store/collection/dusk/images/hero/4/dashboard-mockup.png" alt="" />
                </div>
            </div>
        </section>
    );
};

export default HomeBanner;