import React from "react";
import { IconContext } from "react-icons";
import { BsFillXCircleFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const Cart =()=>{

    return(
        <div className="cart">
            <div className="cart_close">
                <NavLink to="/home"><IconContext.Provider value={{color:"#f7990c", size:"1.5em"}}><BsFillXCircleFill /></IconContext.Provider></NavLink>  
            </div>
            <div className="cart_info">
                <h2>Garri and Eru</h2>
                <h3>1 . 1500XFA</h3>
            </div>
            <div className="modal_btn ">
                <NavLink to="/home" className="button" >Checkout<b>1500XFA</b></NavLink>
            </div>
        </div>
    )
}

export default Cart;