import React, { useEffect, useState } from "react";
import { IconContext } from "react-icons";
import { BsFillXCircleFill } from "react-icons/bs";
import { NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { CartCheckOut } from "../store/features/mealSlice";

const Cart =({address})=>{
    const dispatch = useDispatch();
    const {meals} = useSelector(status=>status.meal);
    console.log(meals)
    let total=0;
    address=`${address}/meal/images`;

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
                {sum ? meals.map((meal,key)=>{
                    return (
                        <div className="cart_info">
                            <div className="cart_img">
                            <img src={`${address}${meal.item.image}`} alt={meal.item.name}/>
                             </div>
                             <span>
                                <h3>{meal.item.name}</h3>
                                <h4>{meal.value} . {meal.item.price} XFA</h4>
                                {meal.item.order?<h3>{meal.item.delivery_price}XFA</h3>:<></>}
                             </span>

                        </div>)
                
                    }):<div className="cart_info" style={{justifyContent: 'center'}}>No food added</div>}
                 
                <div className="modal_btn ">
                    <NavLink to="/home" className="button" onClick={CheckOut}>Checkout <b>{sum} XFA</b></NavLink>
                </div>
            </div>
        )
}

export default Cart;