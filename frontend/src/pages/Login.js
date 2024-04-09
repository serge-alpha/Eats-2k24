import React from "react";
import { Link, NavLink } from "react-router-dom";

const Login=()=>{
    return(
        <div className="login_container">
            <form className="login_form">
                <input type="email" name="email"  className="login_input" placeholder="What's your email?" required/>
                <input type="password" name="password"  className="login_input" placeholder="Enter Password" required/>
                <span className="login_btn">
                    <button type="submit" className="button"><Link to="/home" ><b>Login</b></Link></button>
                </span>     
                <p>or <NavLink to="/register">sign in</NavLink></p>           
            </form>
        </div>
    )
};

export default Login;