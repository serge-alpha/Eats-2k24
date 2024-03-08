import React from "react";
import { NavLink } from "react-router-dom";

const AddRestaurant = ()=>{
    return(
        <div className="login_container ">
            <h3>Add  Your Restaurant</h3>
            <form className="login_form add_rest">    
                    <input type="text" placeholder="Name(name of restuarant or your name)" className="login_input" name="name"/>
                    <input type="text" placeholder="Location" className="login_input" name="location"/>
                    <span className="restuarant_checkbox">
                        <input type="checkbox"  className="login_input" name="pick_up"/>
                        <label for="pick_up">PickUp  </label><br/>
                        <input type="checkbox" placeholder="we" className="login_input" name="delivery"/>
                        <label for="delivery">Delivery</label><br/>
                    </span>                   
                    <span className="restuarant_dist">
                        <label for="dist">How many kilometers are you willing to move to do a delivery?</label><br/>
                        <select  id="dist">
                            <option value="0-5">0-5 km</option>
                            <option value="5-15">5-15 km</option>
                            <option value="15-25">15-25 km</option>
                            <option value="25-30">25-30 km</option>
                            <option value="30+">30+ km</option>
                        </select>
                    </span>
                    <NavLink to="/restaurant" className="button"><b>Create</b></NavLink>
                    <hr/>
            </form>
        </div>
    )
}

export default AddRestaurant;