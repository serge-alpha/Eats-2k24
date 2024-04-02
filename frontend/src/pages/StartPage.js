import React, { useState } from "react";
import { AiFillEnvironment } from "react-icons/ai";
import { AiFillClockCircle } from "react-icons/ai";
import { AiFillCalendar } from "react-icons/ai";
import { NavLink } from "react-router-dom";




const StartPage =()=>{
    const [orderType,setOrderType]=useState("Deliver Now")
    const deliveryTime=(value)=>{
        console.log(value)
        if (value===1){
            setOrderType("Deliver Now");
        }else{
           setOrderType("Plan for later");
        }
    }
    return(
            <div className="start">
                <div className="start_container">
                    <div className="start_search">  
                        <div className="search_pannel">
                            <span><AiFillEnvironment /></span>
                            <input type="search"  placeholder="Enter your location"></input>
                        </div>
                        <div className="start_dropdown">        
                            <div className="dropdown_pannel">
                                <button className="dropbtn">{orderType}</button>
                                    <div className="dropdown_content">
                                        <p onClick={()=>deliveryTime(1)}><AiFillClockCircle/> Deliver Now</p>
                                        <p onClick={()=>deliveryTime(0)}><AiFillCalendar/> Plan for later</p>
                                    </div>
                            </div>
                            <NavLink to="/home" className="button"><b>Find</b></NavLink>
                        </div>   
                    </div>
                    <span>or <NavLink to="/login">login</NavLink></span>
                </div>
            </div>
    )
};
export default StartPage;