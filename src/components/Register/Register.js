import React from 'react';
import './Register.css';
import { useState, useEffect } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from './../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { Link, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Register = () => {

    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        others: "",
    })

    const [error, setError] = useState({
        emailError: "",
        passwordError: "",
        others: "",
    })
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        hookError,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const handleEmail = (e) => {
        const emailRegex = /\S+@\S+\.\S+/;
        const validEmail = emailRegex.test(e.target.value);

        if (validEmail) {
            setUserInfo({ ...userInfo, email: e.target.value });
            setError({ ...error, emailError: "" });
        }
        else {
            setError({ ...error, emailError: "Invalid email" });
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

    const handleConfirmPassword = (e) => {
        if (e.target.value === userInfo.password) {
            setUserInfo({ ...userInfo, confirmPassword: e.target.value })
            setError({ ...error, passwordError: "" })
        }
        else {
            setError({ ...error, passwordError: "Password don't match" })
            setUserInfo({ ...userInfo, confirmPassword: "" })
        }

    }

    const handleRegister = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(userInfo.email, userInfo.password);
        if (user) {
            return <p>{userInfo.email}</p>
        }
    };

    useEffect(() => {
        if (hookError) {
            switch (hookError?.code) {
                case "auth/invalid-email":
                    toast("Invalid email provided, please provide a valid email")
                    break;
                case "auth/invalid-password":
                    toast("Wrong password!")
                    break;
                case "auth/email-already-exists":
                    toast("Email already exists !")
                    break;
                case "auth/user-not-found":
                    toast("User not found !")
                    break;
                default:
                    toast("Something went wrong!!")
                    break;
            }
        }
    }, [hookError]);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    useEffect(() => {
        if (user) {
            navigate(from);
        }
    }, [user]);

    return (
        <div className='register-section'>
            <div className='formPlaceholder w-50 h-100 mx-auto mt-2'>
                <form onSubmit={handleRegister} className='ms-auto w-100 h-100 form-styles'>
                    <div className="row mb-1">
                        <h5 className='text-center font-serif fw-bold fs-6 mt-3'>Please Register</h5>
                        <div className="col-sm-10 w-100">
                            <input onChange={handleEmail} type="email" className="form-control rounded-pill h-7" id="inputEmail3" placeholder='Email' required />
                        </div>
                        <div className='error-message'>
                            {error?.emailError && <small>{error.emailError}</small>}
                        </div>
                    </div>
                    <div className="row mb-1">
                        <div className="col-sm-10 w-100">
                            <input onChange={handlePassword} type="password" className="form-control rounded-pill h-7" id="inputPassword3" placeholder='Password' required />
                        </div>
                        <div className='error-message'>
                            {error?.passwordError && <small>{error.passwordError}</small>}
                        </div>
                    </div>
                    <div className="row mb-1">
                        <div className="col-sm-10 w-100">
                            <input onChange={handleConfirmPassword} type="password" className="form-control rounded-pill h-7" id="inputPassword3" placeholder='Confirm password' required />
                        </div>
                        <div className='error-message'>
                            {error?.passwordError && <small>{error.passwordError}</small>}
                        </div>
                        <p className='already-text'>Already have an account? <Link to="/login"> Login</Link></p>
                    </div>
                    <div className='register-field'>
                        <button type="submit" className=" button-control btn-success rounded-pill d-flex justify-center items-center">Register</button>
                    </div>
                    <ToastContainer />
                </form>
            </div>

        </div>
    );
};

export default Register;