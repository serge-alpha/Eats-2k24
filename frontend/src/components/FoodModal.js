import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { BsFillXCircleFill,BsCaretLeftFill,BsCaretRightFill } from "react-icons/bs";
import { IconContext } from "react-icons";
import {useDispatch} from "react-redux";
import { addMealToCart } from "../store/features/mealSlice";

const FoodModal=({view,item})=>{ 
    // value represents the item data while triger is used to actvate the useeffect in Nav
    const [quantity, setQuantity]=useState(1);
    const [cartItem,setCartItem]=useState({value:1,item});
    const[delivery,setDelivery]=useState("");
    const [order,setOrder]=useState(false);
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
        // console.log(chef)
        item.chefDetails?setDelivery(item.chefDetails.delivery_type):setDelivery("");
        
    },[item,quantity])

    // delivery==="Delivery"?setOrder(true):setOrder(false);
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
    const handleDelivery=()=>{
        order===true?setOrder(false) :setOrder(true);
    } 
    console.log(item);
//    console.log(delivery);
  
    return(
        <div className="modal">
            <div className="modal_close" onClick={closeModal}>
               <IconContext.Provider value={{color:"#f7990c", size:"1.5em"}}><BsFillXCircleFill /></IconContext.Provider> 
            </div>
            <div className="modal_body">
                <div className="modal_img">
                <img src={`http://localhost:3001/meal/images${item.image}`} alt={item.name}/>
                </div>
                <div className="modal_info">
                    <span>
                        <h3>{item.name} <br/>{item.chefDetails?<small>By {item.chefDetails.restaurant_name===""?item.chefDetails.name:item.chefDetails.restaurant_name}</small>:<></>}</h3>
                        
                        
                    </span>
                    
                        <p><b>{item.description}</b></p>
                        <hr></hr>   
                    {delivery==="Both"?<span className="checkbox">
                            <input type="checkbox"  name="delivery"  onChange={handleDelivery}/>
                            <label for="delivery">Delivery</label><br/>
                    </span>:""}
                    
                    <h5>{order===true?"Price+Delivery:"+(item.delivery_price+item.price):"Price: "+item.price}XFA</h5>
                    {order===false?<small>Self pick up from vendor's location</small>:<small>Delivery fees included</small>}
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