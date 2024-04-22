import React, { useState } from "react";
import { IconContext } from "react-icons";
import { BsFillXCircleFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const Cart =({data})=>{
console.log(data);
let total;
total=total+(data.map((item,key)=>{
    return(parseInt(item.value)*parseInt(item.item.price))
}))
const [sum,setSum]=useState(0);
setSum(total)
// data.map((item,key)=>{
//     return(setSum((sum)=>sum+(item.value*item.item.price)))
//     });
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
                <NavLink to="/home" className="button" >Checkout <b>{sum}XFA</b></NavLink>
            </div>
        </div>
    )
}

export default Cart;