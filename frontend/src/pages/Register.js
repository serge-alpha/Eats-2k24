import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const Register = ()=>{
    return(
        <div className="login_container">
            <form className="login_form">
                <span className="register_name">
                    <input type="text" placeholder="First Name" className="login_input" name="first_name"/>
                    <input type="text" placeholder="Last Name" className="login_input" name="first_name"/>
                </span>   
                <span className="register_number">
                    <input type="areacode" placeholder="areacode" className="login_input" name="first_name"/>
                    <input type="phonenumber" placeholder="phonenumber" className="login_input" name="first_name"/>
                </span>  
                <span className="register_buttons">
                    <NavLink to="/login" className="button" ><b><AiOutlineArrowLeft/></b></NavLink>
                    <NavLink to="/register" className="button"><b>Next<AiOutlineArrowRight/></b></NavLink>
                </span>
            </form>
        </div>
    )
}

export default Register;