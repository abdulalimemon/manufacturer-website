import React from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { FaUserAlt } from "react-icons/fa";
import { BiAt } from "react-icons/bi";
import { IoIosFingerPrint } from "react-icons/io";



const Register = () => {
    return (
        <section className="container mx-auto">
            <div className="w-full md:w-7/12 lg:w-8/12 xl:w-5/12 mx-auto">
                <div className="px-4 py-10 bg-white sm:px-6 lg:px-8 sm:py-16 lg:py-24">
                    <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl text-center">Create a new account</h2>
                    <form className="mt-8">
                        <div className="space-y-5">
                            <div>
                                <label className="text-base font-medium text-gray-900"> Fast & Last name </label>
                                <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <FaUserAlt className='w-5 h-5'></FaUserAlt>
                                    </div>

                                    <input
                                        type="text"
                                        name=""
                                        id=""
                                        placeholder="Enter your full name"
                                        className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="text-base font-medium text-gray-900"> Email address </label>
                                <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <BiAt className='w-5 h-5'></BiAt>
                                    </div>

                                    <input
                                        type="email"
                                        name=""
                                        id=""
                                        placeholder="Enter email to get started"
                                        className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="text-base font-medium text-gray-900"> Password </label>
                                <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <IoIosFingerPrint className='w-5 h-5'></IoIosFingerPrint>
                                    </div>

                                    <input
                                        type="password"
                                        name=""
                                        id=""
                                        placeholder="Enter your password"
                                        className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="text-base font-medium text-gray-900"> Confirm Password </label>
                                <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <IoIosFingerPrint className='w-5 h-5'></IoIosFingerPrint>
                                    </div>

                                    <input
                                        type="password"
                                        name=""
                                        id=""
                                        placeholder="Enter your password"
                                        className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                    />
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 border border-transparent rounded-md bg-gradient-to-r from-fuchsia-600 to-blue-600 focus:outline-none hover:opacity-80 focus:opacity-80"
                                >
                                    Sign up
                                </button>
                            </div>
                        </div>
                    </form>

                    <div className='py-5'>
                        <p className="mt-2 text-base text-gray-600">Already have an account? <Link to='/login' className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline">Login</Link></p>
                    </div>
                    <div className="divider">OR</div>
                    <div className="mt-3 space-y-3">
                        <button
                            className="flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-gray-700 transition-all duration-200 bg-white border-2 border-gray-200 rounded-md hover:bg-gray-100 focus:bg-gray-100 hover:text-black focus:text-black focus:outline-none">
                            <FcGoogle className='w-6 h-6 mr-3'></FcGoogle>
                            Sign up with Google
                        </button>
                    </div>
                </div>
            </div>

        </section>

    );
};

export default Register;