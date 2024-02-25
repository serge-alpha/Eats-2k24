import React, { useState } from "react";
import { AiFillEnvironment } from "react-icons/ai";
import { AiFillClockCircle } from "react-icons/ai";
import { AiFillCalendar } from "react-icons/ai";
import Button from "../components/Button";
import { NavLink } from "react-router-dom";




const Home =()=>{
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
            <div className="home">
                <div className="side_bar">
                    Hallo
                </div>
                <div className="home_container">
                    <div className="home_search">  
                        <div className="search_pannel">
                            <span><AiFillEnvironment /></span>
                            <input type="search"  placeholder="Enter your location"></input>
                        </div>
                        <div className="home_dropdown">        
                            <div className="dropdown_pannel">
                                <button className="dropbtn">{orderType}</button>
                                    <div className="dropdown_content">
                                        <p onClick={()=>deliveryTime(1)}><AiFillClockCircle/> Deliver Now</p>
                                        <p onClick={()=>deliveryTime(0)}><AiFillCalendar/> Plan for later</p>
                                    </div>
                            </div>
                            <Button value="Find" link="/"/>  
                        </div>   
                    </div>
                    <span><NavLink to="/login">login</NavLink> or</span>
                </div>
                

            </div>
    )
};
export default Home;