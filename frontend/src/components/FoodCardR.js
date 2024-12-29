import React, { useState } from "react";
import { BsPersonWalking } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { UpdateMeal } from "../services/meal";

const FoodcardR =({item})=>{
    const [availabilty,setAvailability]=useState(item.availability)
    const avialable=()=>{
        if (availabilty){
            UpdateMeal({availability:false},item.slug);
           return setAvailability(false)
        }else{
            UpdateMeal({availability:true},item.slug);
           return  setAvailability(true)
        }
        
    }
    return(
        <div className="card" data-bs-toggle="modal" data-bs-target="#myModal"> 
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
                        <span>{item.rating}</span>
                    </span>
                    <p onClick={()=>avialable()}>{availabilty?<b>Avialable</b>:<b>Not Avialable</b>}</p>
                   
            </div>
        </div>
        
    )
}

export default FoodcardR;