import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { BsFillXCircleFill,BsCaretLeftFill,BsCaretRightFill } from "react-icons/bs";
import { IconContext } from "react-icons";
import {useDispatch} from "react-redux";
import { addMealToCart } from "../store/features/mealSlice";

const FoodModal=({view,item,chef})=>{ 
    // value represents the item data while triger is used to actvate the useeffect in Nav
    const [quantity, setQuantity]=useState(1);
    const [cartItem,setCartItem]=useState({value:1,item});
    const dispatch = useDispatch();

    // Funtion updates the item data 
    const quantityOnChange=(value)=>{
        if(quantity===0 && value===-1){  
        } else{
            setQuantity((quantity)=>{return quantity+value})
        }
    } 
    // Function closes modal while sending item data and trigger value to the
    //Order is  a function from nav that takes meal's data
    useEffect(()=>{
        setCartItem({value:quantity,item});
    },[item,quantity])
    const AddToCart=()=>{
        console.log(cartItem)
        dispatch(addMealToCart(cartItem)); 
        view("close"); 
        setQuantity(1);
    }
    const closeModal=()=>{
        setQuantity(1);
        view("close");   
    }
//    console.log(item);
  
    return(
        <div className="modal">
            <div className="modal_close" onClick={closeModal}>
               <IconContext.Provider value={{color:"#f7990c", size:"1.5em"}}><BsFillXCircleFill /></IconContext.Provider> 
            </div>
            <div className="modal_body">
                <div className="modal_img">
                    <image src="#" alt="image" />
                </div>
                <div className="modal_info">
                    <span>
                        <h3>{item.name} <br/>{chef?<small>By {chef.restaurant_name===""?chef.name:chef.restaurant_name}</small>:<></>}</h3>
                       
                        <h4>{item.price}XFA</h4>
                    </span>
                    
                        <small>{item.description}</small>
                    
                    <span className="modal_quantity">
                        <h4>Quantity</h4>
                        <span className="quantity" onClick={()=>quantityOnChange(-1)}><IconContext.Provider value={{size:"1.5em"}}><BsCaretLeftFill /></IconContext.Provider></span>
                        <p>{quantity}</p>
                        <span className="quantity"onClick={()=>quantityOnChange(1)}><IconContext.Provider value={{size:"1.5em"}}><BsCaretRightFill /></IconContext.Provider></span>
                    </span>
                    <span className="modal_btn " onClick={AddToCart}>
                        <p><NavLink className="button">Order for {quantity}   .<b>{quantity*item.price}</b></NavLink></p>
                    </span>
                </div>
            </div>

        </div>
    )
}

export default FoodModal;