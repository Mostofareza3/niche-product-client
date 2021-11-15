import React from 'react';
import { Carousel,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://cdn.shopify.com/s/files/1/0517/6675/5520/files/slideshow_3.jpg?v=1607335239"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h2>Bike STORE</h2>
                        <h4>Bikes & accessories low priced online✓ save up to 40%✓ various high-end top notch brands in bike Store</h4>
                        <Link to="/allProducts">
                        <Button className="btn btn-danger">Explore Bike STORE</Button>
                        </Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://cdn.shopify.com/s/files/1/0517/6675/5520/files/slideshow_4.jpg?v=1607336597"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h2>Bike STORE</h2>
                        <h4>Bikes & accessories low priced online✓ save up to 40%✓ various high-end top notch brands in bike Store</h4>
                        <Link to="/allProducts">
                        <Button className="btn btn-danger">Explore Bike STORE</Button>
                        </Link>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;