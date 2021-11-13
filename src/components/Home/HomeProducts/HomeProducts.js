import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './HomeProducts.css'

const HomeProducts = () => {
    const {admin} = useAuth()
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);

            })
    }, [])
    return (
        <div>
            <h2>New Products</h2>
            <div className="products-container container justify-content-center row">

                {
                    products.slice(0, 6).map(product => <div key={product._id} className="single-product col-md-4 col-sm-12">
                        <div>
                            <img width="100%" src={product.img} alt="" />
                        </div>
                        <div>
                            <h4>{product.name}</h4>
                            <p>{product.description}</p>
                            <h5>Price: ${product.price}</h5>
                           {
                               !admin && 
                               <Link to={`/placeOrder/${product._id}`}>
                               <Button
                                className="btn btn-success">
                                    Book Now
                                    </Button>

                           </Link>
                           }

                        </div>
                    </div>)
                }
            </div>

        </div>
    );
};

export default HomeProducts;