import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { BsFillXCircleFill,BsCaretLeftFill,BsCaretRightFill } from "react-icons/bs";
import { IconContext } from "react-icons";

const FoodModal=({order,view,item})=>{ 
    // value represents the item data while triger is used to actvate the useeffect in Nav
    const [quantity, setQuantity]=useState(1);
    const [cartItem,setCartItem]=useState({value:1,item});

    // Funtion updates the item data 
    const quantityOnChange=(value)=>{
        if(quantity>=1){
            // setQuantity({value:quantity.value+value,item});
            setQuantity((quantity)=>{return quantity+value})
            console.log("setQuantity done");
        }   
    } 
    // Function closes modal while sending item data and trigger value to the
    //Order is  a function from nav that takes meal's data
    const AddToCart=()=>{
        setCartItem({value:quantity,item});
        order(cartItem); 
        view("close"); 
        //--------------------------------------------------------
        console.log(cartItem);
    }
    const closeModal=()=>{
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
                        <h3>{item.name}</h3>
                        <h4>{item.price}XFA</h4>
                    </span>
                    <span className="modal_quantity">
                        <h4>Quantity</h4>
                        <span className="quantity" onClick={()=>quantityOnChange(-1)}><IconContext.Provider value={{size:"1.5em"}}><BsCaretLeftFill /></IconContext.Provider></span>
                        <p>{quantity}</p>
                        <span className="quantity"onClick={()=>quantityOnChange(1)}><IconContext.Provider value={{size:"1.5em"}}><BsCaretRightFill /></IconContext.Provider></span>
                    </span>
                    <span className="modal_btn " onClick={AddToCart}>
                        <NavLink className="button">Order for {quantity} .<b>{quantity*item.price}</b></NavLink>
                    </span>
                </div>
            </div>

        </div>
    )
}

export default FoodModal;