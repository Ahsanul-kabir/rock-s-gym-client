import React, { useEffect } from 'react';
import { useState } from 'react';
import ReviewCard from '../ReviewCard/ReviewCard';

const Review = () => {
    const [reviews, setReviews] = useState([])

    useEffect( () => {
        fetch('https://floating-crag-22063.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [])

    return (
        <section className="container my-5">
            <h2 className="text-center">Clients <span style={{color:'##6c757d'}}>Feedback</span></h2>
            <div className="row mt-5">
                    {
                        reviews.map(review =><ReviewCard review={review}></ReviewCard>)
                    }
            </div>
        </section>
    );
};

export default Review;