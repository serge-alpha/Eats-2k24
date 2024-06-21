import React from "react";
import { BsXCircle } from "react-icons/bs";
import { NavLink } from "react-router-dom";


const AddFoodCardR =()=>{
    return(
        <div className="card"> 
            <NavLink to="/restaurant/add-meal">
                <div className="add_card">
                    <span>
                        <BsXCircle />
                    </span>                    
                </div>
            </NavLink>
            <p>Add Meal</p>
        </div>
    )
}

export default AddFoodCardR;