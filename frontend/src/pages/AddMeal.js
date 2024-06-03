import React from "react";
import { NavLink } from "react-router-dom";
// import { CiCirclePlus } from "react-icons/ci";
// import { IconContext } from "react-icons";
import { BsXCircle } from "react-icons/bs";

const AddMeal=()=>{
    return(
        <div className="meal_form">
           
            {/* <span className="meal_img">
                <BsXCircle/>
                <h5>Add meal Image</h5>
            </span> */}
            <span className="meal_img">
                <input type="file" ></input>
                <BsXCircle/>
                <h5>Add meal Image</h5>
            </span>
            <form className="add_rest"> 
                    <h3>Add  Meal</h3>    
                    <input type="text" placeholder="Meal's Name" className="login_input" name="mealname"/>
                    <input type="number"  placeholder="Price(CFA)" className="login_input" name="mealprice" min="500"/>
                    <input type="number"  placeholder="Delivery Fee(CFA)" className="login_input" name="mealdelivery_fee" min="500"/>
                    {/*-------------------- this section will be added to the next release--------------------
                     <span className="meal_discount">
                        <p>Discount offers</p>
                        <p>1 added</p>
                        <IconContext.Provider value={{size:"1.2em", color:"black"}}><CiCirclePlus/></IconContext.Provider>
                    </span> 
                    <span className="discount">
                        <p>Add discount</p> 
                    </span> */}
                    <textarea type="text" className="login_input text_area" placeholder="Meal Description" name="mealdescription" />
                    <NavLink to="/restaurant" className="button"><b>Create</b></NavLink>
                    <hr/>
            </form>
        </div>
    )
}

export default AddMeal;