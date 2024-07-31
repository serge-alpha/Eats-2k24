import React, { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import Google from "../components/Google";
import {Slide, ToastContainer, toast} from 'react-toastify';
import { createUser } from "../services/users";

const Register = ()=>{

const [cfrmEmail,setCfrmEmail] =useState(1);
const [email,setEmail]=useState('');
const [name,setName]=useState('');
const [location,setLocation]=useState('');
const [password,setPassword]=useState('');
const [retype_password,setRetypePassword]=useState('');

const handleEmailChange=(event)=>{
    setEmail(event.target.value)
}
const handlePasswordChange=(event)=>{
    setPassword(event.target.value)
}
const handleRetypePasswordChange=(event)=>{
    setRetypePassword(event.target.value)
}
const handleNameChange=(event)=>{
    setName(event.target.value)
}
const handleLocationChange=(event)=>{
    setLocation(event.target.value)
}
const handleSubmit=async(event)=>{
    event.preventDefault();
    try {
        const newUser= new FormData();
         newUser.append('name',name);
        newUser.append('password',password);
        newUser.append('email',email);
        newUser.append('location',location);
        newUser.append('retype_password',retype_password);
    await createUser(newUser);
    setCfrmEmail(0);
    } catch (error) {
        toast.error(error.msg, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "colored",
            transition: Slide
            });
        console.log(error);
    }

    // setName('');
    // setPassword('');
    // setEmail('');
}
    return(
        <div className="login_container">
           
                 <form onSubmit={handleSubmit} className="login_form" >
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
                      { cfrmEmail===0?<h3>Please check your email and Click the confirmation Email...</h3>:
                     <> 
                        <Google/>
                        <div>
                            <label htmlFor="name"/>
                            <input type="text" placeholder="Name" className="login_input" name="name" value={name} onChange={handleNameChange}/>
                            <label htmlFor="email"/>
                            <input type="email" placeholder="Email" className="login_input" name="email" value={email} onChange={handleEmailChange}/>
                        </div>
                        <div>
                           <label htmlFor="location"/>
                            <input type="text" placeholder="Location" className="login_input" name="location" value={location} onChange={handleLocationChange}/> 
                        </div>
                        <div>
                            <label htmlFor="password"/>
                            <input type="password" placeholder="Password" className="login_input" name="password" value={password} onChange={handlePasswordChange}/>
                            <label htmlFor="retype_password"/>
                            <input type="password" placeholder="Retype password" className="login_input" name="retype_password" value={retype_password} onChange={handleRetypePasswordChange}/>
                        </div>
                        <button type="submit" className="button"> <b>Next<AiOutlineArrowRight/></b></button>
                        <hr/>
                        <p>or <NavLink to="/login">login</NavLink></p> 
                     </>} 
                </form>     
        </div>
    )
}

export default Register;