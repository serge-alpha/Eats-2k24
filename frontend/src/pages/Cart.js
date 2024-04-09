import React from "react";
import { IconContext } from "react-icons";
import { BsFillXCircleFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const Cart =({data})=>{
console.log(data);
    return(
        <div className="cart">
            <div className="cart_close">
                <NavLink to="/home"><IconContext.Provider value={{color:"#f7990c", size:"1.5em"}}><BsFillXCircleFill /></IconContext.Provider></NavLink>  
            </div>
            {data.map((item,key)=>{
                return (<div className="cart_info">
                            <h2>{item.item.name}</h2>
                            <h3>{item.value} . {item.item.price}XFA</h3>
                        </div>)
               
                })}
                
            <div className="modal_btn ">
                <NavLink to="/home" className="button" >Checkout<b>1500XFA</b></NavLink>
            </div>
        </div>
    )
}

export default Cart;