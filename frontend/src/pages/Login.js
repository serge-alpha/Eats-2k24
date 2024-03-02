import React from "react";
import Google from "../components/Google";
import { NavLink } from "react-router-dom";

const Login=()=>{
    return(
        <div className="login_container">
            <form className="login_form">
                <input type="email" name="email"  className="login_input" placeholder="What's your email?"/> 
                <span className="login_btn">
                    <NavLink to="/register" className="button" ><b>Login</b></NavLink>
                </span>                
                <hr/>
                <Google/>
            </form>
        </div>
    )
};

export default Login;