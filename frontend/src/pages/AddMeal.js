import React from "react";
import { NavLink } from "react-router-dom";
import { CiCirclePlus } from "react-icons/ci";
import { IconContext } from "react-icons";

const AddMeal=()=>{
    return(
        <div className="login_container">
            <h3>Add  Meal</h3>
            <form className="login_form add_rest">    
                    <input type="text" placeholder="Meal's Name" className="login_input" name="mealname"/>
                    <input type="file"  alt="food_image" className="add_meal_image" name="mealimg"/>
                    <input type="number"  placeholder="Price(CFA)" className="login_input" name="mealprice" min="500"/>
                    <input type="number"  placeholder="Delivery Fee(CFA)" className="login_input" name="mealdelivery_fee" min="500"/>
                    <span className="meal_discount">
                        <p>Discount offers</p>
                        <p>1 added</p>
                        <IconContext.Provider value={{size:"1.2em", color:"black"}}><CiCirclePlus/></IconContext.Provider>
                    </span> 
                    <span className="discount">
                        <p>Add discount</p> 
                    </span>
                    <input type="textarea" className="login_input" name="mealdescription"/>
                    <NavLink to="/restaurant" className="button"><b>Create</b></NavLink>
                    <hr/>
            </form>
        </div>
    )
}

export default AddMeal;