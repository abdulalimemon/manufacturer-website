import React from 'react';
import { AiFillStar } from "react-icons/ai";
import { useParams } from 'react-router-dom';
import useToolsItem from '../../components/hooks/useToolsItem';


const Purchase = () => {
    const { ToolsId } = useParams();
    const [toolsItem] = useToolsItem(ToolsId);

    const { name, price, description, minimum_order_quantity, img, available_quantity } = toolsItem;
    return (
        <>
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={img} />
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 className="text-sm title-font text-gray-500 tracking-widest">{name}</h2>
                            <h2 className="text-gray-900 text-3xl title-font font-medium mb-1">{name}</h2>
                            <div className="flex mb-4">
                                <span className="flex items-center">
                                    <AiFillStar className='w-5 h-5 text-[#FDB241]'></AiFillStar>
                                    <AiFillStar className='w-5 h-5 text-[#FDB241]'></AiFillStar>
                                    <AiFillStar className='w-5 h-5 text-[#FDB241]'></AiFillStar>
                                    <AiFillStar className='w-5 h-5 text-[#FDB241]'></AiFillStar>
                                    <AiFillStar className='w-5 h-5 text-[#FDB241]'></AiFillStar>
                                    <span className="text-gray-600 ml-3">4 Reviews</span>
                                </span>
                            </div>
                            <p className="leading-relaxed">{description}</p>
                            <p className="text-base font-medium mt-3">Available Quantity: {available_quantity}</p>
                            <div className="flex mt-3 items-center pb-5 border-b-2 border-gray-100 mb-5">
                                <div className="flex">
                                    <span className="mr-3 font-medium ">Minimum Order Quantity: {minimum_order_quantity}</span>
                                </div>
                                <div className="flex ml-6 items-center">
                                    <span className="mr-3">Select Quantity</span>
                                    <div className="relative">
                                        <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                                            <option>10</option>
                                            <option>20</option>
                                            <option>30</option>
                                            <option>40</option>
                                            <option>50</option>
                                            <option>100</option>
                                        </select>
                                        <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                                                <path d="M6 9l6 6 6-6"></path>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="title-font font-medium text-2xl text-gray-900">Price: ${price}</span>
                                <button className="btn btn-primary px-10">Buy Now</button>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Purchase;