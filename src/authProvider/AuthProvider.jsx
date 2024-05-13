import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";
import app from '../firebase/firebase.config';
import axios from 'axios';

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {

    const auth = getAuth(app)

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    // Social login Provider
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();


    // Handle Google Login
    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    // Handle Github Login
    const githubLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider);
    }

    // Handle Sign Out
    const handleLogOut = () =>{
        axios.get('http://localhost:5000/logout', {withCredentials : true})
        .then(()=>{})
        .catch(()=>{})
        return signOut(auth)
    }

    // Handle Register With Email And Password
    const handleRegister = (email, pass) =>{
        return createUserWithEmailAndPassword(auth, email, pass)
    }

    // Login With Email And Password
    const handleLogin = (email, pass) =>{
        return signInWithEmailAndPassword(auth, email, pass)
    }

    // Handle update user data
    const handleUpdateUserData = (name, photo) =>{
        return updateProfile(auth.currentUser, {
            displayName: name, 
            photoURL: photo,
        })
    }

    // Get User
    const userData = auth.currentUser;


    // User Observer
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            setLoading(false);
        })
        return ()=>{
            unsubscribe();
        }
    },[auth])

    const authInfo = {
        user,
        setUser,
        loading, 
        userData,
        setLoading,
        handleLogin,
        googleLogin,
        githubLogin,
        handleLogOut,
        handleRegister,
        handleUpdateUserData
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
};

export default AuthProvider;