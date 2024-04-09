import React, { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import Google from "../components/Google";

const Register = ()=>{
    const [cfrmEmail,setCfrmEmail] =useState(1);
    const CfrmEmail=()=>{
        return setCfrmEmail(0);
    }
    return(
        <div className="login_container">
            { cfrmEmail===1?
                 <form className="login_form">
                    <input type="text" placeholder="First Name" className="login_input" name="first_name"/>
                    <input type="text" placeholder="Last Name" className="login_input" name="first_name"/>
                    <input type="areacode" placeholder="areacode" className="login_input" name="first_name"/>
                    <input type="phonenumber" placeholder="phonenumber" className="login_input" name="first_name"/>
                    <button type="submit" className="button"><NavLink to="#" className="button" onClick={CfrmEmail}><b>Next<AiOutlineArrowRight/></b></NavLink></button>
                    <Google/>
                    <hr/>
                    <p>or <NavLink to="/login">login</NavLink></p> 
                </form>:
                <h3>Please check your email and Click the confirmation Email...</h3>
            }
           
        </div>
    )
}

export default Register;