import React from 'react';
import { useForm } from "react-hook-form";


const AddNewProduct = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
    };

    return (
        <div>
            <h2>This is add new product</h2>

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