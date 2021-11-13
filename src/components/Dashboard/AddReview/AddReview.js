import React from 'react';
import { useForm } from "react-hook-form";


const AddReview = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data =>{
        fetch('http://localhost:5000/addReview',{
            method: "POST",
            headers:{
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                alert('Thank You. Your comment successfully added.')
                reset()
            }
        })
    };  
    return (
    <form onSubmit={handleSubmit(onSubmit)}>
    <input type="text" placeholder="Add Review" {...register("review")} />
    <input type="number" placeholder="Place Rating (1-5)" pattern="/^[1-5]$/"
 {...register("rating")} />
        
    <input type="submit" />
  </form>
    );
};

export default AddReview;