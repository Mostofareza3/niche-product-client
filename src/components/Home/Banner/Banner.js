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
                        <h4>Nulla vitae elit libero, a pharetra augue mollis interdum. Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
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
                        <h4>Lorem ipsum dolor sit amet, consectetur adipiscing ste laudantium nostrum nesciunt, totam inventore necessitatibus.</h4>
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