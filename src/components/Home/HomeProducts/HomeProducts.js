import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './HomeProducts.css'

const HomeProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);

            })
    }, [])
    return (
        <div className="home-product-section">
            <h2 className="heading">Feature Products</h2>
            <div className="products-container container justify-content-center row">

                {
                    products.slice(0, 6).map(product => <div key={product._id} className="single-product col-md-4 col-sm-12">
                        <div>
                            <img src={product.img} alt="" />
                        </div>
                        <div>
                            <h4 className="highlight">{product.name}</h4>
                            <p>{product.description}</p>
                            <h5>Price: ${product.price}</h5>
                          
                               <Link to={`/placeOrder/${product._id}`}>
                               <Button
                                className="btn btn-success">
                                    Book Now
                                    </Button>

                           </Link>
                           

                        </div>
                    </div>)
                }
            </div>

        </div>
    );
};

export default HomeProducts;