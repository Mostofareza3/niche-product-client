import React, { useEffect, useState } from 'react';
import './HomeProducts.css'

const HomeProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, [])
    return (
        <div>
            <h2>New Products</h2>
            <div className="products-container">
                {
                    products.map(product => <div>
                        <div>
                            <img width="100%" src={product.img} alt="" />
                        </div>
                        <div>
                            <p>{product.description}</p>
                        </div>
                    </div>)
                }
            </div>

        </div>
    );
};

export default HomeProducts;