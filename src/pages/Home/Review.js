import React from 'react';
import { Link } from 'react-router-dom';
import useReviews from '../../components/hooks/useReviews';
import ReviewsItem from './ReviewsItem';


const Review = () => {
    const [reviews, setReviews] = useReviews();

    return (
        <section className="py-12 sm:py-16 lg:py-20">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="flex flex-col items-center">
                    <div className="text-center">
                        <p className="text-lg font-medium text-gray-600">people have said how good we are.</p>
                        <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl">Our happy clients say about us</h2>
                    </div>

                    <div className="mt-8 text-center md:mt-16 md:order-3">
                        <Link className="pb-2 text-base font-bold leading-7 text-gray-900 transition-all duration-200 border-b-2 border-gray-900 hover:border-gray-600  hover:text-gray-600"> Check all reviews </Link>
                    </div>

                    <div className="relative mt-10 md:mt-24 md:order-2">
                        <div className="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6">
                            <div className="w-full h-full max-w-5xl mx-auto rounded-3xl opacity-30 blur-lg filter">
                            </div>
                        </div>

                        <div className="relative grid max-w-lg grid-cols-1 gap-6 mx-auto md:max-w-none lg:gap-10 md:grid-cols-3">
                        {
                                    reviews.map(review => <ReviewsItem review={review} key={review._id}></ReviewsItem>).reverse().slice(0,3)
                                }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Review;