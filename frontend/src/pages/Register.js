import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import Google from "../components/Google";

const Register = ()=>{
    return(
        <div className="login_container">
            <form className="login_form">
                    <input type="text" placeholder="First Name" className="login_input" name="first_name"/>
                    <input type="text" placeholder="Last Name" className="login_input" name="first_name"/>
                    <input type="areacode" placeholder="areacode" className="login_input" name="first_name"/>
                    <input type="phonenumber" placeholder="phonenumber" className="login_input" name="first_name"/>
                    <NavLink to="/register" className="button"><b>Next<AiOutlineArrowRight/></b></NavLink>
                    <Google/>
                    <hr/>
                    <p>or <NavLink to="/login">login</NavLink></p> 
            </form>
        </div>
    )
}

export default Register;