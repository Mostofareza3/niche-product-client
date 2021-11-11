import React, { useState } from 'react';
import { Link , useHistory,useLocation} from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
// import useAuth from '../../hooks/useAuth';
import './Login.css'



const Login = () => {
    const history = useHistory();
    const location = useLocation()
    // const redirect_url = location?.state?.from || '/home';


    const { signInUsingGoogle, signInWithEmailPassword, error } = useFirebase();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    const handleEmailLogIn = (e) => {
        e.preventDefault()
        signInWithEmailPassword(email, password)

    }

    const getEmail = (e) => {
        setEmail(e.target.value)
    }
    const getPassword = (e) => {
        setPassword(e.target.value)
    }

    // const handleGoogleLogIn = () =>{
    //     signInUsingGoogle()
    //     .then((result) => {
    //         // setUser(result.user)
    //         history.push(redirect_url)

    //     }).catch((error) => {
    //         // setError(error.message)

    //     });
    // }
    
    const handleGoogleSignIn = () => {
        signInUsingGoogle(location, history)
    }


    return (
            <div className="login-container">
            <div className="form-container">
                <div className="d-flex">
                    <h2>Log in </h2>
                    <p className="text">{error}</p>
                </div>
                <form onSubmit={handleEmailLogIn}>
                    <input required onBlur={getEmail} className="input-field" type="text" placeholder="Enter Your Email" />
                    <input required onBlur={getPassword} className="input-field" type="password" placeholder="Enter Your Password" />
                    <input className="submit-button" type="Submit" value="Continue" />
                </form>
                <p className="text-center my-3">----------or------------</p>
                <button onClick={handleGoogleSignIn} className="google-login-button" ><i className="fab fa-google mx-2"></i>Google log in</button>
                <p className="text-center my-3">New to Bike Store?<Link to="/signUp">Sing Up</Link> </p>
                
            </div>
        </div>
    );
};

export default Login;