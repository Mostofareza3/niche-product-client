import React from 'react';
import { useForm } from "react-hook-form";
import './AddNewProduct.css'


const AddNewProduct = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
       
        fetch('https://quiet-dawn-43980.herokuapp.com/addNewProduct',{
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
            <h2  className="heading">Add a new product</h2>

            <form 
            className="add-product-form"
             onSubmit={handleSubmit(onSubmit)}>
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

                <input className="btn btn-success" type="submit" />
            </form>
        </div>
    );
};

export default AddNewProduct;