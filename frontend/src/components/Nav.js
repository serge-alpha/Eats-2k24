 import React , { useState } from "react";
 import { AiOutlineUser } from "react-icons/ai";
 import { AiOutlineMenu} from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { BsCart } from "react-icons/bs";

 const Nav =()=>{
    const [orderType,setOrderType] = useState(0);
    const orderChoice=()=>{
        if (orderType===0){
            setOrderType(1);
        }else{
            setOrderType(0);
        }
    }
    return(
        <div className="nav">
            <span className="nav_menu"><b className="nav_menubar"><AiOutlineMenu /></b><h1>Eats</h1></span>
            <div className="nav_navigation">
                <div className="nav_delivery">
                    {orderType===1?<><span onClick={()=>orderChoice()}>Delivery</span><span className="delivery" >Pickup</span></>:<><span className="delivery">Delivery</span><span onClick={()=>orderChoice()}>Pickup</span></>}
                    
                </div>
                <div className="nav_location">
                    <span>Location.</span>
                    <span>Now</span>
                </div>
                <input type="search" className="nav_search" placeholder="S e a r c h  M e a l "/>     
            </div>
            <span>
                <NavLink to="/home-cart" className="nav_reg" ><BsCart/><p> Order</p>2</NavLink>
                <NavLink to="/login" className="nav_reg"><AiOutlineUser/><p> Register</p></NavLink>
            </span>
            
        </div>
    )
 }

 export default Nav;