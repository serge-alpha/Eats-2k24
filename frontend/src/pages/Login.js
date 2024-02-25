import React from "react";
import Button from "../components/Button";
import Google from "../components/Google";

const Login=()=>{
    return(
        <div className="login_container">
            <form className="login_form">
                <input type="email" name="email"  className="login_input" placeholder="What's your email?"/> 
                <Button value="Login" link="/login" type="submit"/>
                <hr/>
                <Google/>
            </form>
        </div>
    )
};

export default Login;