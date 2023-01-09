import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillStar } from "react-icons/ai";


const Review = () => {
    return (
        <section className="py-12 sm:py-16 lg:py-20">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="flex flex-col items-center">
                    <div className="text-center">
                        <p className="text-lg font-medium text-gray-600">2,157 people have said how good we are.</p>
                        <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl">Our happy clients say about us</h2>
                    </div>

                    <div className="mt-8 text-center md:mt-16 md:order-3">
                        <Link className="pb-2 text-base font-bold leading-7 text-gray-900 transition-all duration-200 border-b-2 border-gray-900 hover:border-gray-600  hover:text-gray-600"> Check all reviews </Link>
                    </div>

                    <div className="relative mt-10 md:mt-24 md:order-2">
                        <div className="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6">
                            <div className="w-full h-full max-w-5xl mx-auto rounded-3xl opacity-30 blur-lg filter"></div>
                        </div>

                        <div className="relative grid max-w-lg grid-cols-1 gap-6 mx-auto md:max-w-none lg:gap-10 md:grid-cols-3">
                            <div className="flex flex-col overflow-hidden shadow-xl">
                                <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
                                    <div className="flex-1">
                                        <div className="flex items-center">
                                            <AiFillStar className='w-5 h-5 text-[#FDB241]'></AiFillStar>
                                            <AiFillStar className='w-5 h-5 text-[#FDB241]'></AiFillStar>
                                            <AiFillStar className='w-5 h-5 text-[#FDB241]'></AiFillStar>
                                            <AiFillStar className='w-5 h-5 text-[#FDB241]'></AiFillStar>
                                            <AiFillStar className='w-5 h-5 text-[#FDB241]'></AiFillStar>
                                        </div>

                                        <blockquote className="flex-1 mt-8">
                                            <p className="text-lg leading-relaxed text-gray-900 ">“You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change.”</p>
                                        </blockquote>
                                    </div>

                                    <div className="flex items-center mt-8">
                                        <img className="flex-shrink-0 object-cover rounded-full w-11 h-11" src="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png" alt="" />
                                        <div className="ml-4">
                                            <p className="text-base font-bold text-gray-900 ">Leslie Alexander</p>
                                            <p className="mt-0.5 text-sm  text-gray-600">Freelance React Developer</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col overflow-hidden shadow-xl">
                                <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
                                    <div className="flex-1">
                                        <div className="flex items-center">
                                            <AiFillStar className='w-5 h-5 text-[#FDB241]'></AiFillStar>
                                            <AiFillStar className='w-5 h-5 text-[#FDB241]'></AiFillStar>
                                            <AiFillStar className='w-5 h-5 text-[#FDB241]'></AiFillStar>
                                            <AiFillStar className='w-5 h-5 text-[#FDB241]'></AiFillStar>
                                            <AiFillStar className='w-5 h-5 text-[#FDB241]'></AiFillStar>
                                        </div>

                                        <blockquote className="flex-1 mt-8">
                                            <p className="text-lg leading-relaxed text-gray-900 ">“Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced users.”</p>
                                        </blockquote>
                                    </div>

                                    <div className="flex items-center mt-8">
                                        <img className="flex-shrink-0 object-cover rounded-full w-11 h-11" src="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-2.png" alt="" />
                                        <div className="ml-4">
                                            <p className="text-base font-bold text-gray-900 ">Jacob Jones</p>
                                            <p className="mt-0.5 text-sm  text-gray-600">Digital Marketer</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col overflow-hidden shadow-xl">
                                <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
                                    <div className="flex-1">
                                        <div className="flex items-center">
                                            <AiFillStar className='w-5 h-5 text-[#FDB241]'></AiFillStar>
                                            <AiFillStar className='w-5 h-5 text-[#FDB241]'></AiFillStar>
                                            <AiFillStar className='w-5 h-5 text-[#FDB241]'></AiFillStar>
                                            <AiFillStar className='w-5 h-5 text-[#FDB241]'></AiFillStar>
                                            <AiFillStar className='w-5 h-5 text-[#FDB241]'></AiFillStar>
                                        </div>

                                        <blockquote className="flex-1 mt-8">
                                            <p className="text-lg leading-relaxed text-gray-900 ">“I cannot believe that I have got a brand new landing page after getting Omega. It was super easy to edit and publish.”</p>
                                        </blockquote>
                                    </div>

                                    <div className="flex items-center mt-8">
                                        <img className="flex-shrink-0 object-cover rounded-full w-11 h-11" src="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-female.png" alt="" />
                                        <div className="ml-4">
                                            <p className="text-base font-bold text-gray-900 ">Jenny Wilson</p>
                                            <p className="mt-0.5 text-sm  text-gray-600">Graphic Designer</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Review;