import React from 'react';
import { FaUsersCog } from "react-icons/fa";
import { GrServices } from "react-icons/gr";
import { GrTechnology } from "react-icons/gr";
import { SiAngellist } from "react-icons/si";

const BusinessSummery = () => {

    return (
        <section>
            <div className="container px-5 py-10 lg:py-14 mx-auto">
                <div className="flex flex-col text-center w-full mb-8 lg:mb-16">
                    <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl mb-4 lg:mb-8">Provide The Best Service For Sustainable Progress</h2>
                    <p className="text-lg font-medium text-gray-600 px-4 md:px-8 lg:px-20">Gazolin Are A Industry & Manufacturing Services Provider Institutions. Suitable For Factory, Manufacturing, Industry, Engineering, Construction And Any Related Industry Care Field.</p>
                </div>
                <div className="flex flex-wrap -m-4 text-center">
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div className="border-2 border-gray-200 px-4 py-8 rounded-lg">
                            <SiAngellist className='w-16 h-16 mb-3 inline-block text-black'></SiAngellist>
                            <h2 className="title-font font-medium text-3xl text-gray-900">5 Years Experience</h2>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div className="border-2 border-gray-200 px-4 py-8 rounded-lg">
                            <FaUsersCog className='w-16 h-16 mb-3 inline-block text-black'></FaUsersCog>
                            <h2 className="title-font font-medium text-3xl text-gray-900">Best Team Member</h2>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div className="border-2 border-gray-200 px-4 py-8 rounded-lg">
                            <GrServices className='w-16 h-16 mb-3 inline-block text-black'></GrServices>
                            <h2 className="title-font font-medium text-3xl text-gray-900">The Best Services</h2>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div className="border-2 border-gray-200 px-4 py-8 rounded-lg">
                            <GrTechnology className='w-16 h-16 mb-3 inline-block text-black'></GrTechnology>
                            <h2 className="title-font font-medium text-3xl text-gray-900">Unique Technology</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BusinessSummery;