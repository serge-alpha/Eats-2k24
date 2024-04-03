import React from "react";
import { NavLink } from "react-router-dom";

const Login=()=>{
    return(
        <div className="login_container">
            <form className="login_form">
                <input type="email" name="email"  className="login_input" placeholder="What's your email?"/>
                <input type="password" name="password"  className="login_input" placeholder="Enter Password"/>
                <span className="login_btn">
                    <NavLink to="/home" className="button" ><b>Login</b></NavLink>
                </span>     
                <p>or <NavLink to="/register">sign in</NavLink></p>           
            </form>
        </div>
    )
};

export default Login;