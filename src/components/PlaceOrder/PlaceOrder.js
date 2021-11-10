import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
import './PlaceOrder.css'


const PlaceOrder = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const { user } = useAuth()

    const { register, handleSubmit}= useForm();
    const onSubmit = data => {
        
    };


    useEffect(() => {
        fetch(`http://localhost:5000/placeOrder/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    return (
        <div>
            <h2>{product.name}</h2>
            <div className="placeOrder-container container-fluid row">
                <div className="col-md-6 col-sm-12">
                    <img className="img-fluid" src={product?.img} alt="" />
                    <h6>{product.description}</h6>
                </div>

                <div className="col-md-6 col-sm-12 placeOrder-form-container">
                    <form className="placeOrder-form" onSubmit={handleSubmit(onSubmit)}>
                        <input defaultValue={user.email} {...register("email")} />
                        <input defaultValue={user.displayName} {...register("displayName")} />
                        <input disabled defaultValue={product?.name} {...register("productName")} />

                        <input className="btn btn-success" type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PlaceOrder;