import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { FaUserAlt } from "react-icons/fa";
import { FaBusinessTime } from "react-icons/fa";
import { SiGooglemessages } from "react-icons/si";

const AddAReview = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        fetch(`https://manufacturer-server-67n7.onrender.com/reviews`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                toast.success('Review added successfully', {
                    theme: "colored",
                });
            })
    };


    return (
        <section className="container mx-auto">
            <div className="w-full md:w-7/12 lg:w-8/12 xl:w-7/12 mx-auto">
                <div className="px-4 py-10 bg-white sm:px-6 lg:px-8 sm:py-16 lg:py-24">
                    <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl text-center">Add a review</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="mt-8">
                        <div>
                            <div className='pb-3'>
                                <label className="text-base font-medium text-gray-900"> Full name </label>
                                <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <FaUserAlt className='w-5 h-5'></FaUserAlt>
                                    </div>
                                    <input
                                        id="name" type="text"
                                        placeholder="Enter your name"
                                        className="block w-full py-4 pl-10 pr-4 text-black font-semibold placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                        aria-invalid={errors.name ? "true" : "false"}
                                        {...register('name', {
                                            required: {
                                                value: true,
                                                message: 'Name is Required'
                                            }
                                        })}
                                    />
                                </div>
                                <label className="label pb-0">
                                    <label className="label">
                                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-600 font-semibold">{errors.name.message}</span>}
                                    </label>
                                </label>
                            </div>

                            <div className='pb-3'>
                                <label className="text-base font-medium text-gray-900"> Occupation </label>
                                <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <FaBusinessTime className='w-5 h-5'></FaBusinessTime>
                                    </div>
                                    <input
                                        id="job" type="text" placeholder="Enter your occupation"
                                        className="block w-full py-4 pl-10 pr-4 text-black font-semibold placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                        aria-invalid={errors.job ? "true" : "false"}
                                        {...register('job', {
                                            required: {
                                                value: true,
                                                message: 'Occupation is Required'
                                            }
                                        })}
                                    />
                                </div>
                                <label className="label pb-0">
                                    <label className="label">
                                        {errors.job?.type === 'required' && <span className="label-text-alt text-red-600 font-semibold">{errors.job.message}</span>}
                                    </label>
                                </label>
                            </div>

                            <div className='pb-3'>
                                <label className="text-base font-medium text-gray-900 pb-3"> Rating </label>
                                <select
                                    {...register("rating", {
                                        required: {
                                            value: true,
                                            message: 'Rating is Required'
                                        }
                                    })}
                                    className="select select-bordered w-full"
                                    aria-invalid={errors.rating ? "true" : "false"}>
                                    <option disabled selected>Select Rating</option>
                                    <option>1 star</option>
                                    <option>2 star</option>
                                    <option>3 star</option>
                                    <option>4 star</option>
                                    <option>5 star</option>
                                </select>
                                <label className="label pb-0">
                                    <label className="label">
                                        {errors.rating?.type === 'required' && <span className="label-text-alt text-red-600 font-semibold">{errors.rating.message}</span>}
                                    </label>
                                </label>
                            </div>

                            <div className='pb-3'>
                                <label className="text-base font-medium text-gray-900"> Your Review </label>
                                <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <SiGooglemessages className='w-5 h-5'></SiGooglemessages>
                                    </div>
                                    <textarea
                                        id="description" type="text" placeholder="Enter your review"
                                        className="block w-full py-4 pl-10 pr-4 text-black font-semibold placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                        aria-invalid={errors.description ? "true" : "false"}
                                        {...register('description', {
                                            required: {
                                                value: true,
                                                message: 'Review is Required'
                                            }
                                        })}
                                    />
                                </div>
                                <label className="label pb-0">
                                    <label className="label">
                                        {errors.description?.type === 'required' && <span className="label-text-alt text-red-600 font-semibold">{errors.description.message}</span>}
                                    </label>
                                </label>
                            </div>

                            <div className='pt-2'>
                                <button
                                    type="submit"
                                    className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 border border-transparent rounded-md bg-gradient-to-r from-fuchsia-600 to-blue-600 focus:outline-none hover:opacity-80 focus:opacity-80"
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </section>
    );
};

export default AddAReview;