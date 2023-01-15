import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { FaUserAlt } from "react-icons/fa";
import { ImPriceTags } from "react-icons/im";
import { SiGooglemessages } from "react-icons/si";
import { GoTasklist } from "react-icons/go";
import { BsFillFileImageFill } from "react-icons/bs";

const AddAProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        fetch(`http://localhost:5000/tools`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                toast.success('Tool added successfully', {
                    theme: "colored",
                });
            })
    };


    return (
        <section className="container mx-auto">
            <div className="w-full md:w-7/12 lg:w-8/12 xl:w-5/12 mx-auto">
                <div className="px-4 py-10 bg-white sm:px-6 lg:px-8 sm:py-16 lg:py-24">
                    <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl text-center">Add a new Tool</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="mt-8">
                        <div>
                            <div className='pb-3'>
                                <label className="text-base font-medium text-gray-900"> Tool name </label>
                                <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <FaUserAlt className='w-5 h-5'></FaUserAlt>
                                    </div>
                                    <input
                                        id="name" type="text"
                                        placeholder="Enter tool name"
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
                                <label className="text-base font-medium text-gray-900"> Price </label>
                                <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <ImPriceTags className='w-5 h-5'></ImPriceTags>
                                    </div>
                                    <input
                                        id="price" type="text" placeholder="Enter tool price"
                                        className="block w-full py-4 pl-10 pr-4 text-black font-semibold placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                        aria-invalid={errors.price ? "true" : "false"}
                                        {...register('price', {
                                            required: {
                                                value: true,
                                                message: 'price is Required'
                                            },
                                            pattern: {
                                                value: /[0-9]/,
                                                message: 'Provide valid price.'
                                            }
                                        })}
                                    />
                                </div>
                                <label className="label pb-0">
                                    <label className="label">
                                        {errors.price?.type === 'required' && <span className="label-text-alt text-red-600 font-semibold">{errors.price.message}</span>}
                                        {errors.price?.type === 'pattern' && <span className="label-text-alt text-red-600 font-semibold">{errors.price.message}</span>}
                                    </label>
                                </label>
                            </div>

                            <div className='pb-3'>
                                <label className="text-base font-medium text-gray-900"> Tool Description </label>
                                <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <SiGooglemessages className='w-5 h-5'></SiGooglemessages>
                                    </div>
                                    <textarea
                                        id="description" type="text" placeholder="Enter Tool description"
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

                            <div className='pb-3'>
                                <label className="text-base font-medium text-gray-900"> Minimum order quantity </label>
                                <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <GoTasklist className='w-5 h-5'></GoTasklist>
                                    </div>
                                    <input
                                        id="orderquantity" type="text" placeholder="Enter minimum order quantity"
                                        className="block w-full py-4 pl-10 pr-4 text-black font-semibold placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                        aria-invalid={errors.orderquantity ? "true" : "false"}
                                        {...register('orderquantity', {
                                            required: {
                                                value: true,
                                                message: 'Minimum order quantity is Required'
                                            },
                                            pattern: {
                                                value: /[0-9]/,
                                                message: 'Provide valid Minimum order quantity'
                                            }
                                        })}
                                    />
                                </div>
                                <label className="label pb-0">
                                    <label className="label">
                                        {errors.orderquantity?.type === 'required' && <span className="label-text-alt text-red-600 font-semibold">{errors.orderquantity.message}</span>}
                                        {errors.orderquantity?.type === 'pattern' && <span className="label-text-alt text-red-600 font-semibold">{errors.orderquantity.message}</span>}
                                    </label>
                                </label>
                            </div>

                            <div className='pb-3'>
                                <label className="text-base font-medium text-gray-900"> Available Quantity </label>
                                <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <GoTasklist className='w-5 h-5'></GoTasklist>
                                    </div>
                                    <input
                                        id="availablequantity" type="text" placeholder="Enter Available Quantity"
                                        className="block w-full py-4 pl-10 pr-4 text-black font-semibold placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                        aria-invalid={errors.availablequantity ? "true" : "false"}
                                        {...register('availablequantity', {
                                            required: {
                                                value: true,
                                                message: 'Available Quantity is Required'
                                            },
                                            pattern: {
                                                value: /[0-9]/,
                                                message: 'Provide valid Available Quantity'
                                            }
                                        })}
                                    />
                                </div>
                                <label className="label pb-0">
                                    <label className="label">
                                        {errors.availablequantity?.type === 'required' && <span className="label-text-alt text-red-600 font-semibold">{errors.availablequantity.message}</span>}
                                        {errors.availablequantity?.type === 'pattern' && <span className="label-text-alt text-red-600 font-semibold">{errors.availablequantity.message}</span>}
                                    </label>
                                </label>
                            </div>

                            <div className='pb-3'>
                                <label className="text-base font-medium text-gray-900"> Tool Image Url </label>
                                <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <BsFillFileImageFill className='w-5 h-5'></BsFillFileImageFill>
                                    </div>
                                    <input
                                        id="imageurl" type="text" placeholder="Enter Tool Image Url"
                                        className="block w-full py-4 pl-10 pr-4 text-black font-semibold placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                        aria-invalid={errors.imageurl ? "true" : "false"}
                                        {...register('imageurl', {
                                            required: {
                                                value: true,
                                                message: 'Tool Image Url is Required'
                                            },
                                            pattern: {
                                                value: /[(http(s)?)://(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/,
                                                message: 'Provide valid Tool Image Url'
                                            }
                                        })}
                                    />
                                </div>
                                <label className="label pb-0">
                                    <label className="label">
                                        {errors.imageurl?.type === 'required' && <span className="label-text-alt text-red-600 font-semibold">{errors.imageurl.message}</span>}
                                        {errors.imageurl?.type === 'pattern' && <span className="label-text-alt text-red-600 font-semibold">{errors.imageurl.message}</span>}
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

export default AddAProduct;