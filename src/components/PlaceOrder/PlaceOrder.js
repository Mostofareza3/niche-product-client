import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
import './PlaceOrder.css'
import { Button } from 'react-bootstrap';


const PlaceOrder = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const { user } = useAuth()

    const { register, handleSubmit,reset}= useForm();

    
    const onSubmit = data => {
        console.log(data)
        fetch(`http://localhost:5000/addOrder`,{
            method: 'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(data) 
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.acknowledged === true){
                alert('Order Completed')
            }
        
        })
    };

//selected item and this this item send to db 
    useEffect(() => {
        fetch(`http://localhost:5000/placeOrder/${id}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data)
                reset(data)
            })
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
                        <input readOnly defaultValue={user.email} {...register("email")} />
                        
                        <input readOnly defaultValue={product?.name} {...register("productName")} />
                        <input readOnly defaultValue={product?.description} />
                        <input readOnly defaultValue={`Price: $ ${product?.price}`}  />

                        <Button className="btn btn-success" type="submit" >Confirm Order</Button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PlaceOrder;