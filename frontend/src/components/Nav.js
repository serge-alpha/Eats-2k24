 import React , { useState } from "react";
 import { AiOutlineUser } from "react-icons/ai";
 import { AiOutlineMenu} from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { BsCart,BsFillCartFill } from "react-icons/bs";

 const Nav =({order})=>{
    const [orderType,setOrderType] = useState(0);
   
    const orderChoice=()=>{
        if (orderType===0){
            setOrderType(1);
        }else{
            setOrderType(0);
        }
    }
    const [menustate,setMenuState] = useState(0);
    const menuState=()=>{
        if (menustate===0){
            setMenuState(1);
        }else{
            setMenuState(0);
        }
    }
    return(
        <div className="nav">
            <span className="nav_menu"><b className="nav_menubar" onClick={menuState}><AiOutlineMenu/></b><NavLink to="/"><h1>Eats</h1></NavLink></span>
            <div className="nav_navigation">
                <div className="nav_delivery">
                    {orderType===1?<><span onClick={()=>orderChoice()}>Delivery</span><span className="delivery" >Pickup</span></>:<><span className="delivery">Delivery</span><span onClick={()=>orderChoice()}>Pickup</span></>}
                </div>                
                <input type="location"className="nav_location" placeholder="Location. Now"/>
                <input type="search" className="nav_search" placeholder="Search Meal"/>     
            </div>
            {/* Nav menu on small screens */}
            <div className={menustate===0?"hide_nav_navigation_s":"nav_navigation_s"}>
                <div>
                    <p>{orderType===1?<p>Pick up Today</p>:<p>Deliver Now</p>}</p>
                    <button>Nkewn</button>
                </div>
                <input type="search" className="nav_search" placeholder="Search Meal"/>
            </div>
            <span>
                <NavLink to="/home-cart" className="nav_reg" >{order.length<1?<BsCart/>:<BsFillCartFill />}<p> Order</p></NavLink>
                <NavLink to="/login" className="nav_reg"><AiOutlineUser/><p> Register</p></NavLink>
            </span>
            
        </div>
    )
 }

 export default Nav;