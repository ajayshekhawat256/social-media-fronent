import React, { useState } from 'react'
import Logo from "../../img/logo.png"
import './Auth.css'

import { useDispatch, useSelector } from 'react-redux';
import { logIn, signUp } from "../../State/Auth/Action.js"
const Auth = () => {
    const initialState = {
        firstName: "",
        lastName: "",
        Username: "",
        password: "",
        confirmpass: ""
    };
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.auth.loading)
    console.log(loading);
    const [isSignUp, setIsSignUp] = useState(true);
    const [data, setData] = useState(initialState);
    const [confirmPass, setConfirmPass] = useState(true);

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
        console.log(data);
    }
    const handleSubmit = (e) => {
        console.log("handle Submit");
        setConfirmPass(true);
        e.preventDefault();
        if (isSignUp) {
            data.password === data.confirmpass ? dispatch(signUp(data)) : setConfirmPass(false);
            // const response = await axios.post('http://localhost:5000/auth/register', data);
            // console.log(response);
        } else {
            dispatch(logIn(data))
            // const response = await axios.post('http://localhost:5000/auth/login', data)
            // console.log(response);
        }
    };
    const resetForm = () => {
        setData(initialState);
        setConfirmPass(true);
    }
    return (
        <div className='Auth'>
            <div className="a-left">
                <img src={Logo} alt="" />
                <div className="Webname">
                    <h1>Social Media</h1>
                    <h6>Explore the ideas throughout the world</h6>
                </div>
            </div>
            <div className="a-right">
                <form className='infoForm authForm' onSubmit={handleSubmit} action="">
                    <h3>{isSignUp ? "Register" : "Login"}</h3>
                    {isSignUp && (
                        <div>
                            <input
                                required
                                type="text"
                                placeholder='First Name'
                                className='infoInput'
                                name='firstName'
                                value={data.firstName}
                                onChange={handleChange}
                            />
                            <input
                                required
                                type="text"
                                placeholder='Last Name'
                                className='infoInput'
                                name='lastName'
                                value={data.lastName}
                                onChange={handleChange} />
                        </div>
                    )}
                    <div>
                        <input
                            required
                            type="text"
                            placeholder='Username'
                            className='infoInput'
                            name='Username'
                            value={data.Username}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <input
                            required
                            type="password"
                            className='infoInput'
                            placeholder='Password'
                            name='password'
                            value={data.password}
                            onChange={handleChange}
                        />
                        {isSignUp && (
                            <input
                                required
                                type="password"
                                className='infoInput'
                                name='confirmpass'
                                placeholder='Confirm password'
                                onChange={handleChange}
                            />
                        )}
                    </div>
                    <span
                        style={{
                            color: "red",
                            fontSize: "12px",
                            alignSelf: "flex-end",
                            marginRight: "5px",
                            display: confirmPass ? "none" : "block",
                        }}>
                        *Confirm password is not same
                    </span>
                    <div>
                        <span
                            style={{
                                fontSize: "12px",
                                cursor: "pointer",
                                textDecoration: "underline",
                            }}
                            onClick={() => {
                                resetForm();
                                setIsSignUp((prev) => !prev);
                            }}
                        >
                            {isSignUp
                                ? "Already have an account Login"
                                : "Don't have an account Sign up"}
                        </span>
                        <button
                            className='button infoButton'
                            type='Submit'
                            disabled={loading}
                        >
                            {loading?"loading":isSignUp ? "SignUp" : "Login"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Auth