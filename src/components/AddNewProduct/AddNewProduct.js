import React from 'react';
import { Alert } from 'react-bootstrap';
import { useForm } from "react-hook-form";


const AddNewProduct = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/addNewProduct',{
            method: "POST",
            headers:{
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
               alert("Added product successfully.")
               reset()
            }
        });
        
        
    };

    return (
        <div>
            <h2>Add a new product</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    required
                    placeholder="Product Name"
                    {...register("name")} />
                <br />
                <input
                    required
                    placeholder="Description"
                    {...register("description")
                    } />
                <br />
                <input
                    required
                    placeholder="Img Url"
                    {...register("img")} />
                <br />
                <input
                    required
                    placeholder="Price"
                    {...register("price")}
                /> <br />

                <input type="submit" />
            </form>
        </div>
    );
};

export default AddNewProduct;