import { useEffect, useState } from 'react';

const useReviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://manufacturer-server-67n7.onrender.com/reviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data);
            });
    }, [])
    return [reviews, setReviews];
};

export default useReviews;