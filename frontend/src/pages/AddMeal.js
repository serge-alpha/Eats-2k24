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
    const [displayimage,setDisplayImage]=useState();
    const [category,setCategory]=useState();
    const [delivery_price,setDeliveryPrice]=useState();
    const [description,setDescription]=useState();

    const handleNameChange=(event)=>{
        setName(event.target.value);
    };
    const handleImageChange=(event)=>{
       if (event.target.files && event.target.files[0]) {
       setDisplayImage(URL.createObjectURL(event.target.files[0]));
        setImage(event.target.files[0]);
        }
        console.log(image);
    }
    const handleCategoryTypeChange=(event)=>{
        setCategory(event.target.value);
    }
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
            newMeal.append('image',image);
            newMeal.append('category',category);
            newMeal.append('description',description);
            newMeal.append('delivery_price',delivery_price);
        await createMeal(newMeal);
        navigate('/restaurant');
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
            </span> value={image}*/}
            <span className="meal_img">
                <input type="file" accept="image/*" capture="camera"  onChange={handleImageChange} required></input>
               {image?
                <div className="modal_img"><img src={displayimage} alt="preview meal"/></div>
                :<>
                    <BsXCircle/>
                    <h5>Add meal Image</h5>
               </>}
                
            </span>
            <form className="add_meal login_form" onSubmit={handleSubmit}> 
                    <h3>Add  Meal</h3>    
                    <span>
                        <p>What Category does your meal fall under in</p>
                        <span className="restuarant_checkbox" required >
                            <span className="checkbox">
                                <input type="radio"  className="login_input" name="category" value="Lunch" onChange={handleCategoryTypeChange} />
                                <label for="pick_up">Lunch  </label><br/>
                            </span>
                            <span className="checkbox">
                                <input type="radio"  className="login_input" name="category" value="Pastry" onChange={handleCategoryTypeChange}/>
                                <label for="delivery">Pastry</label><br/>
                            </span>
                            <span className="checkbox">
                                <input type="radio" className="login_input" name="category" value="Fast Food" onChange={handleCategoryTypeChange}/>
                                <label for="delivery">FastFood</label><br/>
                            </span>
                        </span> 
                    </span>
                     <input type="text" placeholder="Meal's Name" className="login_input" name="mealname" onChange={handleNameChange} value={name} required/>
                    <input type="number"  placeholder="Price(CFA)" className="login_input" name="mealprice" min="300" onChange={handlePriceChange} value={price} required/>
                    <input type="number"  placeholder="Delivery Fee(CFA)" className="login_input" name="mealdelivery_fee" min="500" onChange={handleDeliveryChange} value={delivery_price} required/>
                    {/*-------------------- this section will be added to the next release--------------------
                     <span className="meal_discount">
                        <p>Discount offers</p>
                        <p>1 added</p>
                        <IconContext.Provider value={{size:"1.2em", color:"black"}}><CiCirclePlus/></IconContext.Provider>
                    </span> 
                    <span className="discount">
                        <p>Add discount</p> 
                    </span> */}
                    <textarea type="text" className="login_input text_area" placeholder="Meal Description" minLength={10} name="mealdescription" onChange={handleDescriptionChange} value={description} required/>
                    <button type="submit" className="button"><b>Create</b></button>
                    <hr/>
            </form>
        </div>
    )
}

export default AddMeal;