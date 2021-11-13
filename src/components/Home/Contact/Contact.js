import React from 'react';
import './Contact.css'


const Contact = () => {


    return (
        <div>
            
            <h1 className="heading">Contact with us</h1>

            <div className="row contact-box">
                <div className="col-md-4 contact-right">
                    <h3>Send us message</h3>
                    <input type="text" placeholder="Enter Your Mail" /><br />
                    <input type="text" placeholder="Enter Your Password" /><br />
                    <textarea name="" id="" cols="30" rows="3"></textarea><br />
                    <button className="btn btn-danger">Send</button>
                    
                </div>
                <div className="col-md-4 contact-left">
                    <h3 >Get in touch</h3>
                    <div>
                        <p>Location : <small>432 Zafer Street New
                            </small></p>
                    </div>
                    <div>
                        <p>Phone : <small>+(666) 053 39985

                        </small></p>
                    </div>
                    <div>
                        <p>Email : <small>themeix@gmail.com
                          </small></p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contact;