import React from "react";
import { BsXCircle } from "react-icons/bs";
import { NavLink } from "react-router-dom";


const AddFoodCardR =()=>{
    return(
        <div className="card"> 
            <div className="add_card">
                    <span>
                        <NavLink to="/restaurant/add-meal"><BsXCircle /></NavLink>
                    </span>                    
            </div>
            <p>Add Meal</p>
        </div>
    )
}

export default AddFoodCardR;