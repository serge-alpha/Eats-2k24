import React, { useEffect, useState } from "react";
import { IconContext } from "react-icons";
import { BsFillXCircleFill } from "react-icons/bs";
import { NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { CartCheckOut } from "../store/features/mealSlice";

const Cart =()=>{
    const dispatch = useDispatch();
    const {meals} = useSelector(status=>status.meal);
    let total=0;
    meals.forEach(meal => {
        return total=total+((meal.value)*(meal.item.price))
    });

    const [sum,setSum]=useState(0);

    useEffect(()=>{
        setSum(total)
    },[total]);
    // data.map((item,key)=>{
    //     return(setSum((sum)=>sum+(item.value*item.item.price)))
    //     });
    const CheckOut=()=>{
        dispatch(CartCheckOut());
    }
        return(
            <div className="cart">
                <div className="cart_close">
                    <NavLink to="/home"><IconContext.Provider value={{color:"#f7990c", size:"1.5em"}}><BsFillXCircleFill /></IconContext.Provider></NavLink>  
                </div>
                {meals.map((meal,key)=>{
                    return (
                        <div className="cart_info">
                            <div className="cart_img">
                                <image src="#" alt="image" />
                             </div>
                             <span>
                                <p>{meal.item.name}</p>
                                <h3>{meal.value} . {meal.item.price} XFA</h3>
                             </span>

                        </div>)
                
                    })}
                    
                <div className="modal_btn ">
                    <NavLink to="/home" className="button" onClick={CheckOut}>Checkout <b>{sum} XFA</b></NavLink>
                </div>
            </div>
        )
}

export default Cart;