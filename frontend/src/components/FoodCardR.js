import React, { useState } from "react";
import { BsPersonWalking } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { UpdateMeal } from "../services/meal";

    // const address="https://eatsbackend.onrender.com/meal/images";
    const address="http://localhost:3001/meal/images";
const FoodcardR =({item,rest})=>{
    const [availabilty,setAvailability]=useState(item.availability)
    const avialable=()=>{
        if (availabilty){
            UpdateMeal({availability:false},item.id);
           return setAvailability(false)
        }else{
            UpdateMeal({availability:true},item.id);
           return  setAvailability(true)
        }
        
    }
    return(
        <div className="card" data-bs-toggle="modal" data-bs-target="#myModal"> 
            <NavLink to="/restaurant/add-meal" state={{item,address}}> 
                <div className="card_body">
                        {/* <div className="card_head">
                            <span>Special offer</span>
                            <span></span>
                        </div> */}
                        <div className="card_order" >
                            <div className="card_ordertype" >
                                <span><BsPersonWalking /></span>
                                <span>{rest?" ."+rest.delivery_type:""}</span>

                            </div>
                        </div>
                        <img src={`${address}${item.image}`}  alt={item.name}/>
                
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