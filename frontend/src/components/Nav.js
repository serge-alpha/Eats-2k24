 import React , { useEffect, useState } from "react";
 import { AiOutlineUser } from "react-icons/ai";
 import { AiOutlineMenu} from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { BsCart } from "react-icons/bs";

 const Nav =({order})=>{
    const [orderType,setOrderType] = useState(0);
    const[orderNum,setOrderNum] = useState(0);
    useEffect(()=>{
        setOrderNum((orderNum)=>parseInt(orderNum)+parseInt(order));
    },[order])
    const orderChoice=()=>{
        if (orderType===0){
            setOrderType(1);
        }else{
            setOrderType(0);
        }
    }
    return(
        <div className="nav">
            <span className="nav_menu"><b className="nav_menubar"><AiOutlineMenu/></b><NavLink to="/"><h1>Eats</h1></NavLink></span>
            <div className="nav_navigation">
                <div className="nav_delivery">
                    {orderType===1?<><span onClick={()=>orderChoice()}>Delivery</span><span className="delivery" >Pickup</span></>:<><span className="delivery">Delivery</span><span onClick={()=>orderChoice()}>Pickup</span></>}
                </div>                
                <input type="location"className="nav_location" placeholder="Location. Now"/>
                <input type="search" className="nav_search" placeholder="Search Meal"/>     
            </div>
            <span>
                <NavLink to="/home-cart" className="nav_reg" ><BsCart/><p> Order</p>{orderNum}</NavLink>
                <NavLink to="/login" className="nav_reg"><AiOutlineUser/><p> Register</p></NavLink>
            </span>
            
        </div>
    )
 }

 export default Nav;