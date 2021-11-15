import React, { useEffect, useState } from 'react';
import './Review.css'
import Rating from 'react-rating'
import useAuth from '../../../hooks/useAuth';


const Review = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allReview')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [])
    return (
        <div className="">
            <h2 className="heading">happy client says</h2>
            <div className="review-container">
                {
                    reviews.map(review =>
                        <div className="single-review" key={review._id}>
                            <div>
                                <p>
                                <i class="fas fa-quote-left"></i>
                                    {review.review.slice(0, 100)}
                                <i class="fas fa-quote-right"></i>
                                    
                                    </p>

                                <small>{review?.email}</small>
                            </div>
                            <hr />
                            <div>
                                <Rating
                                    initialRating={review.rating}
                                    emptySymbol="far fa-star"
                                    fullSymbol="fas fa-star field"
                                    readonly
                                ></Rating>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default Review;