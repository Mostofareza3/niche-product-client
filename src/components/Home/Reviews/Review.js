import React, { useEffect, useState } from 'react';
import './Review.css'
import Rating from 'react-rating'


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
            <h2 className="heading">This is review section</h2>
            <div className="review-container">
                {
                    reviews.map(review =>
                        <div className="single-review" key={review._id}>
                           <div>
                           <p>{review.review.slice(0,100)}</p>
                           </div>
                           <hr />
                           <div>
                               
                               <Rating
                               initialRating={review.rating}
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