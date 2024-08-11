import React, { useState } from "react";
import  {useNavigate } from "react-router-dom";
// import { CiCirclePlus } from "react-icons/ci";
// import { IconContext } from "react-icons";
import { BsXCircle } from "react-icons/bs";
import { createMeal } from "../services/meal";
import { Slide, toast, ToastContainer } from "react-toastify";

const AddMeal=()=>{
    const navigate=useNavigate();
    const [name,setName]=useState("");
    const [price,setPrice]=useState();
    const [image,setImage]=useState();
    const [delivery_price,setDeliveryPrice]=useState();
    const [description,setDescription]=useState();

    const handleNameChange=(event)=>{
        setName(event.target.value);
    };
    const handleImageChange=(event)=>{
        setImage(event.target.value);
    };
    const handlePriceChange=(event)=>{
        setPrice(event.target.value);
    };
    const handleDeliveryChange=(event)=>{
        setDeliveryPrice(event.target.value);
    };
    const handleDescriptionChange=(event)=>{
        setDescription(event.target.value);
    };  
    const handleSubmit=async(event)=>{
        event.preventDefault();
        try {
            const newMeal= new FormData();
            newMeal.append('name',name);
            newMeal.append('price',price);
            newMeal.append('description',description);
            newMeal.append('delivery_price',delivery_price);
        await createMeal(newMeal);
        // navigate('/restaurant');
        } catch (error) {
            toast.error(error.msg, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "colored",
                transition: Slide
                });
                console.error(error);
        }
    }
    return(
        <div className="meal_form">
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
            {/* <span className="meal_img">
                <BsXCircle/>
                <h5>Add meal Image</h5>
            </span> */}
            <span className="meal_img">
                <input type="file" accept="image/*" capture="camera" value={image} onChange={handleImageChange}></input>
                <BsXCircle/>
                <h5>Add meal Image</h5>
            </span>
            <form className="add_meal login_form" onSubmit={handleSubmit}> 
                    <h3>Add  Meal</h3>    
                    <input type="text" placeholder="Meal's Name" className="login_input" name="mealname" onChange={handleNameChange} value={name}/>
                    <input type="number"  placeholder="Price(CFA)" className="login_input" name="mealprice" min="500" onChange={handlePriceChange} value={price}/>
                    <input type="number"  placeholder="Delivery Fee(CFA)" className="login_input" name="mealdelivery_fee" min="500" onChange={handleDeliveryChange} value={delivery_price}/>
                    {/*-------------------- this section will be added to the next release--------------------
                     <span className="meal_discount">
                        <p>Discount offers</p>
                        <p>1 added</p>
                        <IconContext.Provider value={{size:"1.2em", color:"black"}}><CiCirclePlus/></IconContext.Provider>
                    </span> 
                    <span className="discount">
                        <p>Add discount</p> 
                    </span> */}
                    <textarea type="text" className="login_input text_area" placeholder="Meal Description" name="mealdescription" onChange={handleDescriptionChange} value={description}/>
                    <button type="submit" className="button"><b>Create</b></button>
                    <hr/>
            </form>
        </div>
    )
}

export default AddMeal;