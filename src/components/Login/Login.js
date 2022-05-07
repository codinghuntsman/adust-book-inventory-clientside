import React from 'react';
import './Login.css';
import image from '../../components/images/good1.jpg';
import { useState, useEffect } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { auth } from './../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { Link, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Login = () => {

    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
        others: "",
    })

    const [error, setError] = useState({
        emailError: "",
        passwordError: "",
        others: "",
    })
    const [signInWithEmailAndPassword, user, loading, hookError,] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, googleUser, loading1, googleError] = useSignInWithGoogle(auth);
    const [sendPasswordResetEmail, sending, passResetError] = useSendPasswordResetEmail(auth);

    const handleEmail = (e) => {
        const emailRegex = /\S+@\S+\.\S+/;
        const validEmail = emailRegex.test(e.target.value);

        if (validEmail) {
            setUserInfo({ ...userInfo, email: e.target.value });
            setError({ ...error, emailError: "" });
        }
        else {
            setError({ ...error, emailError: "Invalid email !" });
            setUserInfo({ ...userInfo, email: "" })
        }
    };


    const handlePassword = (e) => {
        const passwordRegex = /.{6,}/;
        const validPassword = passwordRegex.test(e.target.value);

        if (validPassword) {
            setUserInfo({ ...userInfo, password: e.target.value });
            setError({ ...error, passwordError: "" });
        }
        else {
            setError({ ...error, passwordError: "Minimum 6 characters!" });
            setUserInfo({ ...userInfo, password: "" });
        };
    };

    const resetPassword = async () => {
        await sendPasswordResetEmail(userInfo.email);
        toast('Sent password reset email');
    }

    const handleLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(userInfo.email, userInfo.password);
    }

    useEffect(() => {
        const error = hookError || googleError;
        if (error) {
            switch (error?.code) {
                case "auth/invalid-email":
                    toast("Invalid email provided, please provide a valid email")
                    break;
                case "auth/invalid-password":
                    toast("Wrong password!")
                    break;
                case "auth/user-not-found":
                    toast("User not found !")
                    break;
                default:
                    toast("Something went wrong!!")
                    break;
            }
        }
    }, [hookError, googleError]);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    useEffect(() => {
        if (user) {
            navigate(from);
        }
        else if (googleUser) {
            navigate(from)
        }
    }, [user, googleUser]);

    return (
        <div className='form-background d-flex justify-center items-center'>
            <div className='images-style w-50 ms-2 me-2 mt-8 d-flex justify-center items-center'>
                <img src={image} alt="images" />
            </div>
            <div className='w-50 h-100 ms-auto'>
                <h5 className='font-serif fw-bold fs-6'>Please Login</h5>
                <form onSubmit={handleLogin} className='ms-auto w-100 h-100 form-styles'>
                    <div className="row mb-2">
                        <div className="col-sm-10">
                            <input onChange={handleEmail} type="email" className="form-control rounded-pill h-7" id="inputEmail3" placeholder='Email' required />
                        </div>
                        <div className='error-message'> {error?.emailError && <small>{error.emailError}</small>}</div>
                    </div>
                    <div className="row mb-1">
                        <div className="col-sm-10">
                            <input onChange={handlePassword} type="password" className="form-control rounded-pill h-7" id="inputPassword3" placeholder='Password' required />
                        </div>
                        <div className='error-message'>
                            {error?.passwordError && <small>{error.passwordError}</small>}
                        </div>
                    </div>
                    <p className='register-link'>Don't have an account? <Link to="/register"> Please register</Link></p>
                    <p className='register-link'>Forget password? <button onClick={resetPassword}> Reset password</button></p>
                    <div className='login-field'>
                        <Button type="submit" variant='outline-success rounded-pill font-serif'>Login</Button>
                    </div>
                    <div className='google-btn'>
                        <Button variant='outline-success rounded-pill font-serif' onClick={() => signInWithGoogle()}>SignIn with google</Button>
                    </div>
                    <ToastContainer />
                </form>
            </div>
        </div>
    );
};

export default Login;