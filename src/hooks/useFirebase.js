import initializeAuthentication from "../firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged,updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";


initializeAuthentication();
const auth = getAuth();


const useFirebase = () => {

    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    let [isLoading, setIsLoading] = useState(true);

    const signInUsingGoogle = (location, history) => {
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider()
        // return  signInWithPopup(auth, googleProvider)
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            const user = result.user;
            saveUser(user.email, user.displayName, 'PUT');
            setError('');
            const destination = location?.state?.from || '/';
            history.replace(destination);
        }).catch((error) => {
            setError(error.message);
        }).finally(() => setIsLoading(false));
        
        


    }

    const signInWithEmailPassword = (email, password) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user)
                setError('')
            })
            .catch((error) => {
                setError(error.message)

            })
            .finally(() => setIsLoading(false))
    }
    const signUpWithEmailPassword = (email, password, name,history) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setError('');
            const newUser = { email, displayName: name };
            setUser(newUser);
            // save user to the database
            saveUser(email, name, 'POST');
            // send name to firebase after creation
            updateProfile(auth.currentUser, {
                displayName: name
            }).then(() => {
            }).catch((error) => {
            });
            history.replace('/');
        })
        .catch((error) => {
            setError(error.message);
            console.log(error);
        })
        .finally(() => setIsLoading(false));

    }
    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                setUser({})
            }).catch((error) => {
                setError(error.message)
            })
            .finally(() => setIsLoading(false))
    }


    useEffect(() => {
        setIsLoading(true)
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setError('')
            }
        setIsLoading(false)
        });
    }, []);

    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('http://localhost:5000/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }


    return {
        signInUsingGoogle,
        signInWithEmailPassword,
        signUpWithEmailPassword,
        logOut,
        user,
        error,
        isLoading
    }
};

export default useFirebase;