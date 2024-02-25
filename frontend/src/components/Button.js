import React from "react";
import { NavLink } from "react-router-dom";

const Button=(data)=>{
    const {value,link} = data;

    return(
        <NavLink to={link} className="nav_reg  button"><b>{value}</b></NavLink>
    )
}

export default Button;