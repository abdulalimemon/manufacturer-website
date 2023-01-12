import React from 'react';

const Subscribe = () => {
    return (
        <section className="py-10 sm:py-16 lg:py-24">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Subscribe For Newsletters</h2>
                    <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">Get E-mail updates about our latest shop and special offers</p>
                </div>

                <form action="#" method="POST" className="max-w-xl mx-auto mt-12">
                    <div className="flex flex-col items-center sm:flex-row sm:justify-center">
                        <div className="flex-1 w-full min-w-0 px-4 sm:px-0">
                            <label className="sr-only"></label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Enter email to get started"
                                className="input input-bordered w-full mb-4 md:mb-0"
                                required
                            />
                        </div>

                        <button type="submit" className="btn btn-primary ml-5 ">
                            Subscribe
                            <svg className="w-5 h-5 ml-3 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                </form>
            </div>
        </section>

    );
};

export default Subscribe;