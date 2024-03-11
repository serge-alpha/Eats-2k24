import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { BsFillXCircleFill,BsCaretLeftFill,BsCaretRightFill } from "react-icons/bs";
import { IconContext } from "react-icons";

const FoodModal=({modalstate})=>{ 
    const [quantity, setQuantity]=useState(1);
    const[state,setState]=useState(modalstate);
    const quantityOnChange=(value)=>{
        if(quantity!==0 || value>0){
            setQuantity(quantity+value);
        }   
    } 
    const closeModal=()=>{
        setState("xmodal");
    }
    return(
        <div className={state}>
            <div className="modal_close" onClick={closeModal}>
               <IconContext.Provider value={{color:"#f7990c", size:"1.5em"}}><BsFillXCircleFill /></IconContext.Provider> 
            </div>
            <div className="modal_body">
                <div className="modal_img">
                    <image src="#" alt="image" />
                </div>
                <div className="modal_info">
                    <span>
                        <h3>Garri and Eru...............................................</h3>
                        <h4>1500XFA</h4>
                    </span>
                    <span className="modal_quantity">
                        <h4>Quantity</h4>
                        <span className="quantity" onClick={()=>quantityOnChange(-1)}><IconContext.Provider value={{size:"1.5em"}}><BsCaretLeftFill /></IconContext.Provider></span>
                        <p>{quantity}</p>
                        <span className="quantity"onClick={()=>quantityOnChange(1)}><IconContext.Provider value={{size:"1.5em"}}><BsCaretRightFill /></IconContext.Provider></span>
                    </span>
                    <span className="modal_btn ">
                        <NavLink className="button">Order for {quantity} .<b>{quantity*1500}</b></NavLink>
                    </span>
                </div>
            </div>

        </div>
    )
}

export default FoodModal;