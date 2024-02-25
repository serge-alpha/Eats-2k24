 import React from "react";
 import { AiOutlineUser } from "react-icons/ai";
 import { AiOutlineMenu} from "react-icons/ai";
import { NavLink } from "react-router-dom";
 const Nav =()=>{
    return(
        <div className="nav">
            <span className="nav_menu"><b className="nav_menubar"><AiOutlineMenu /></b><h1>Eats</h1></span>
            <NavLink to="/login" className="nav_reg"><AiOutlineUser/><p> Register</p></NavLink>
        </div>
    )
 }

 export default Nav;