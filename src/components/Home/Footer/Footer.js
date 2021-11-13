import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
      <div className=" footer-container">
           <div className="container">
            <footer className="row">
            <div className="col-md-4 footer-part">
                <h1 className="web-name">Bike STORE</h1>
               <p>Stay Connected With Bike STORE</p>
            </div>
            <div className="col-md-4 footer-part">
                <h4 className="highlighted">THANKS FOR VISITING</h4>
            </div>
            <div className="col-md-4 footer-part">
                <h2>CONTACT WITH US :- </h2>
                <ul className="icon-container">
                    <p> <i className="fab fa-facebook-square"></i></p>
                    <p><i className="fab fa-youtube"></i></p>
                    <p><i className="fab fa-instagram-square"></i></p>
                    <p><i className="fab fa-linkedin"></i></p>
                </ul>

            </div>
        </footer>
       </div>
      </div>
    );
};

export default Footer;