import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Slide, toast, ToastContainer } from "react-toastify";
import { createRest} from "../services/rest";
import { UpdateUser } from "../services/users";

const AddRestaurant = ({user})=>{
    const navigate=useNavigate();
    const [restaurant_name,setRestaurantName]=useState("");
    const [delivery_distance,setDeliveryDistance]=useState("");
    const [delivery_type,setDeliveryType]=useState("");

    const handleRestNameChange=(event)=>{
        setRestaurantName(event.target.value);
    }
    const handleDeliveryDistanceChange=(event)=>{
        setDeliveryDistance(event.target.value);
        console.log(event.target.value);
    }
    const handleDeliveryTypeChange=(event)=>{
        setDeliveryType(event.target.value);
        console.log(event.target.value);
    }
    const handleSubmit=async(event)=>{
        event.preventDefault();
        try { 
            //creating restuarnat and updating user to a restuarant owner

            console.log(user)
            const Rest= new FormData();
            Rest.append('restaurant_name',restaurant_name);  
            Rest.append('delivery_type',delivery_type);  
            Rest.append('delivery_distance',delivery_distance);
           
            console.log(delivery_type);
            const RestResult= await createRest(Rest);

            const User= new FormData();
            User.append('is_Chef',true);
            await UpdateUser(User,user.id);
            user.is_Chef=true;

            toast(RestResult.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "colored",
                transition: Slide
                });
             navigate('/restaurant');
    
        } catch (error) {
            toast(error.msg, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "colored",
                transition: Slide
                });
                toast(error);
        }
    //    setRestaurantName('');
    //    setDeliveryDistance("");
    //    setDeliveryType('');
    }

    return(
       <div className="login_container ">
            <ToastContainer position="top-right"
                        autoClose={5000}
                        hideProgressBar
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="colored"
                        />
            <h3>Add  Your Restaurant</h3>
            <form className="login_form add_rest" onSubmit={handleSubmit}>    
                    <input type="text" placeholder="Name(name of restuarant or your name)" className="login_input" name="name" onChange={handleRestNameChange} value={restaurant_name} required/>
                    <span>
                        <p>What's your delivery Choice?</p>
                        <span className="restuarant_checkbox" required >
                            <span className="checkbox">
                                <input type="radio"  className="login_input" name="delivery" value="Pickup" onChange={handleDeliveryTypeChange} />
                                <label for="pick_up">PickUp  </label><br/>
                            </span>
                            <span className="checkbox">
                                <input type="radio"  className="login_input" name="delivery" value="Delivery" onChange={handleDeliveryTypeChange}/>
                                <label for="delivery">Delivery</label><br/>
                            </span>
                            <span className="checkbox">
                                <input type="radio" className="login_input" name="delivery" value="Both" onChange={handleDeliveryTypeChange}/>
                                <label for="delivery">Both</label><br/>
                            </span>
                        </span> 
                       
                    </span>
                     <hr />
                    <span className="restuarant_dist">
                        <label for="dist">How many kilometers are you willing to move to do a delivery?</label><br/>
                        <select  id="dist" value={delivery_distance} onChange={handleDeliveryDistanceChange} required>
                            <option value="0-5">click to pick</option>
                            <option value="0-5">0-5 km</option>
                            <option value="5-15">5-15 km</option>
                            <option value="15-25">15-25 km</option>
                            <option value="25-30">25-30 km</option>
                            <option value="30+">30+ km</option>
                        </select>
                    </span>
                    <button className="button" type="submit"><b>Create</b></button>
                    <hr/>
            </form>
           
        </div>
    )
}

export default AddRestaurant;