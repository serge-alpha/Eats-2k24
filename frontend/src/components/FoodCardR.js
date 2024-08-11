import React, { useState } from "react";
import { BsPersonWalking } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const FoodcardR =({item})=>{
    const [avialabilty,setAvialability]=useState(true)
    const avialable=()=>{
        if (avialabilty){
           return setAvialability(false)
        }else{
           return  setAvialability(true)
        }
        
    }
    return(
        <div className="card" > 
            <NavLink to="/restaurant/add-meal"> 
                <div className="card_body">
                        <div className="card_head">
                            <span>Special offer</span>
                            <span></span>
                        </div>
                        <div className="card_order" >
                            <div className="card_ordertype" >
                                <span><BsPersonWalking /></span>
                                <span>PickUp only</span>
                            </div>
                        </div>
                </div>
            </NavLink>
            <div className="card_info">
                
                    <span>
                        <h3><b>{item.name}</b></h3>
                        <NavLink className="restbtn" onClick={()=>avialable()}>{avialabilty?<b>Avialable</b>:<b>Not Avialable</b>}</NavLink>
                    </span>
                   <span>(4.0)</span>
            </div>
        </div>
        
    )
}

export default FoodcardR;