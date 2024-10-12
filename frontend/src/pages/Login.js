import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {Slide, ToastContainer, toast} from 'react-toastify';
import { LoginUser } from "../services/users";


const Login=({getUser})=>{

const [email,setEmail] =useState('');
const [password,setPassword] =useState('');
const navigate=useNavigate();
//const dispatch=useNavigate();
const handlePasswordChange=(event)=>{
    setPassword(event.target.value)
}
const handleEmailChange=(event)=>{
    setEmail(event.target.value)
}
const handleSubmit=async(event)=>{
    event.preventDefault();
    try {
        const User= new FormData();
        User.append('password',password);
        User.append('email',email);   
        const result= await LoginUser(User);
        toast(result.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "colored",
            transition: Slide
            });
        //dispatch(login(result.user))
        getUser(result.user.data);
        navigate('/home');

    } catch (error) {
        toast(error.msg, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "colored",
            transition: Slide
            });
    }
   setPassword('');
   setEmail('');
}
    return(
        <div className="login_container">
            <form className="login_form" onSubmit={handleSubmit}>
            <ToastContainer position="top-right"
                        autoClose={5000}
                        hideProgressBar
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="colored"
                        />
                <input type="email" name="email"  className="login_input" placeholder="What's your email?" value={email} onChange={handleEmailChange} required/>
                <input type="password" name="password"  className="login_input" placeholder="Enter Password" value={password} onChange={handlePasswordChange} required/>
                <span className="login_btn">{/*<Link to="/home" ></Link>*/}
                    <button type="submit" className="button"><b>Login</b></button>
                </span>     
                <p>or <NavLink to="/register">sign in</NavLink></p>           
            </form>
        </div>
    )
};

export default Login;