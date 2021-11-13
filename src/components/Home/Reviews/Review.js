import React, { useEffect, useState } from 'react';
import './Review.css'

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
        <div className="mt-5">
            <h2>This is review section</h2>
            <div className="review-container">
                {
                    reviews.map(review =>
                        <div className="single-review" key={review._id}>
                           <div>
                           <p>{review.review.slice(0,150)}</p>
                           </div>
                           <hr />
                           <div>
                               {review.rating}
                           </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default Review;