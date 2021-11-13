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
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel odio veritatis doloribus dolores beatae expedita dolore. Unde fuga, saepe architecto in ad suscipit est laboriosam dolorum, nihil provident accusantium inventore.</p>
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
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quis voluptatibus quibusdam velit at. Saepe repudiandae aliquam voluptates porro facilis unde minima voluptatem iste laudantium nostrum nesciunt, totam inventore necessitatibus.</p>
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