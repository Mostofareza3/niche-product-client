import React, { useState } from 'react';
import { Link,useHistory,useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const SignUp = () => {

    const { signUpWithEmailPassword, signInUsingGoogle, user, error } = useAuth();
    const [loginData, setLoginData] = useState({});

    const history = useHistory();
    const location = useLocation();

   

    //from guru
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        signUpWithEmailPassword(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }
    const handleGoogleSignIn = () => {
        signInUsingGoogle(location, history)
    }
////////////////////////////
  
    return (
        <div className="login-container">
            <div className="form-container">
                <div>
                    <h2>Sign Up </h2>
                    <p className="text-danger">{error}</p>
                </div>
                <form onSubmit={handleLoginSubmit}>
                  
                    <input required
                     className="input-field"
                      type="text"
                      name="name" 
                     placeholder="Enter Your Name"
                     onBlur={handleOnBlur}
                     />
                    <input required
                     className="input-field"
                      type="email" 
                      name="email"
                     placeholder="Enter Your Email"
                     onBlur={handleOnBlur}
                     />
                    <input required 
                    className="input-field" 
                    type="password" 
                    name="password"
                    placeholder="Enter Your Password"
                    onBlur={handleOnBlur}
                    />
                    <input className="submit-button" type="Submit" value="Continue" />
                </form>
                <p className="text-center my-3">----------or------------</p>
                <button onClick={handleGoogleSignIn} className="google-login-button" ><i className="fab fa-google mx-2"></i>Google log in</button>
                <p className="text-center my-3">Already have an account? please <Link to="/login">Log In</Link> </p>
            </div>
        </div>
    );
};

export default SignUp;