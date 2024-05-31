import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { LoginUser } from "../services/users";

const Login=()=>{

const [email,setEmail] =useState('');
const [password,setPassword] =useState('');
let navigate=useNavigate();
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
            
        console.log(User);
        const result= await LoginUser(User);
        console.log(result.message);
        // toast(result.message)
        // dispatch(login(result.user))

        navigate('/books')
    } catch (error) {
        console.log(error.message);
        // toast("Wrong userName or Password")
    }
   setPassword('');
   setEmail('');
}
    return(
        <div className="login_container">
            <form className="login_form" onSubmit={handleSubmit}>
                <input type="email" name="email"  className="login_input" placeholder="What's your email?" value={email} onChange={handleEmailChange} required/>
                <input type="password" name="password"  className="login_input" placeholder="Enter Password" value={password} onChange={handlePasswordChange} required/>
                <span className="login_btn">
                    <button type="submit" className="button"><Link to="/home" ><b>Login</b></Link></button>
                </span>     
                <p>or <NavLink to="/register">sign in</NavLink></p>           
            </form>
        </div>
    )
};

export default Login;