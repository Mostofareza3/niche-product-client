import React from 'react';
import Banner from './Banner/Banner';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import HomeProducts from './HomeProducts/HomeProducts';
import Navigation from './Navigation/Navigation';
import Review from './Reviews/Review';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <HomeProducts></HomeProducts>
            <Review></Review>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;