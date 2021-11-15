import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import './AddReview.css'


const AddReview = () => {
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth()

    const onSubmit = data => {
        data.email = user.email;
        fetch('http://localhost:5000/addReview', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Thank You. Your comment successfully added.')
                    reset()
                }
            })
    };
    return (
        <>
        <h2 className="heading">Add a review</h2>
        <div className="addReview-form-container">
            <form className="addReview-form" onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Add Review" {...register("review")} />
                <input type="number" placeholder="Place Rating (1-5)" pattern="\b(0*(?:[1-5][1-5]?|5))\b"
                    {...register("rating")} />

                <input className="btn btn-success" type="submit" />
            </form>
        </div>
        </>

    );
};

export default AddReview;