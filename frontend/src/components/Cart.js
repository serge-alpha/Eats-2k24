import React from "react";
import { IconContext } from "react-icons";
import { BsFillXCircleFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const Cart =({cart_prop})=>{

    const closeCart=()=>{
        cart_prop("close")
    }
    return(
        <div className="cart">
            <div className="cart_close" onClick={closeCart}>
                <IconContext.Provider value={{color:"#f7990c", size:"1.5em"}}><BsFillXCircleFill /></IconContext.Provider>  
            </div>
            <div className="cart_info">
                <h2>Garri and Eru</h2>
                <h3>1 . 1500XFA</h3>
            </div>
            <div className="modal_btn ">
                <NavLink className="button" onClick={closeCart}>Checkout<b>1500XFA</b></NavLink>
            </div>
        </div>
    )
}

export default Cart;