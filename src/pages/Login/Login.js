import React from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { BiAt } from "react-icons/bi";
import { IoIosFingerPrint } from "react-icons/io";

const Login = () => {
    return (
        <section class="container mx-auto">
            <div class="w-full md:w-10/12 lg:w-8/12 mx-auto">
                <div class="flex items-center justify-center px-4 py-10 bg-white sm:px-6 lg:px-8 sm:py-16 lg:py-24">
                    <div class="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
                        <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl text-center">Log in</h2>

                        <form class="mt-8">
                            <div class="space-y-5">
                                <div>
                                    <label for="" class="text-base font-medium text-gray-900"> Email address </label>
                                    <div class="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <BiAt className='w-5 h-5'></BiAt>
                                        </div>

                                        <input
                                            type="email"
                                            name=""
                                            id=""
                                            placeholder="Enter email to get started"
                                            class="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label for="" class="text-base font-medium text-gray-900"> Password </label>
                                    <div class="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <IoIosFingerPrint className='w-5 h-5'></IoIosFingerPrint>
                                        </div>

                                        <input
                                            type="password"
                                            name=""
                                            id=""
                                            placeholder="Enter your password"
                                            class="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <button
                                        type="submit"
                                        class="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 border border-transparent rounded-md bg-gradient-to-r from-fuchsia-600 to-blue-600 focus:outline-none hover:opacity-80 focus:opacity-80"
                                    >
                                        Log in
                                    </button>
                                </div>
                            </div>
                        </form>

                        <div className='py-5 flex items-center justify-between'>
                            <p class="mt-2 text-base text-gray-600">Don't have an account? <Link to='/register' class="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline">Sign up</Link></p>
                            <Link to='/forgotpassword' class="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline">Forgot Password</Link>
                        </div>
                        <div className="divider">OR</div>
                        <div class="mt-3 space-y-3">
                            <button
                                class="flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-gray-700 transition-all duration-200 bg-white border-2 border-gray-200 rounded-md hover:bg-gray-100 focus:bg-gray-100 hover:text-black focus:text-black focus:outline-none">
                                <FcGoogle className='w-6 h-6 mr-3'></FcGoogle>
                                Log in with Google
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;