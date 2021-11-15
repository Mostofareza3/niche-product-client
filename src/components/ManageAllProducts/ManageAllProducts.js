import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

const ManageAllProducts = () => {
    const [allProducts, setAllProducts] = useState([]);
    const [isDelete, setIsDelete] = useState(0);

    useEffect(() => {
        fetch('https://quiet-dawn-43980.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setAllProducts(data);
                
            })
    }, [isDelete]);
    const handleDelete =(id) =>{
        window.confirm("Are you sure to delete?")
        fetch(`https://quiet-dawn-43980.herokuapp.com/products/delete/${id}`,{
            method: "DELETE",
            headers:{
                "content-type" : "application/json"
            }
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount){
                setIsDelete(data.deletedCount);
            }})

    }
    console.log(allProducts)
    return (
        <div>
            <h2 className="heading">This is Manage All products</h2>
            <div className="products-container container justify-content-center row">
           
           {
                allProducts?.map(product => <div key={product._id} className="single-product col-md-4 col-sm-12">
                    <div>
                        <img width="100%" src={product.img} alt="" />
                    </div>
                    <div>
                        <h4>{product.name}</h4>
                        <p>{product.description}</p>
                        <h5>Price: ${product.price}</h5>
                        <Button onClick={()=>handleDelete(product._id)} className="btn btn-danger">Delete Product</Button>

                    </div>
                </div>)
            }
        </div>
        </div>
    );
};

export default ManageAllProducts;