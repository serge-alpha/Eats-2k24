import React, { useState } from "react";
import Foodcard from "./FoodCard";
import FoodModal from "./FoodModal";

const Foodcards =({order})=>{
    const items = [
        {name:"Garri and Eru",price:"2000"},
        {name:"Rice and Bean",price:"1000"},
        {name:"Achu",price:"1500"},
        {name:"CornChaff",price:"700"},
        {name:"Pancakes",price:"600"},
        {name:"Cakes",price:"1700"},
        {name:"Peanut",price:"500"},
        {name:"Water and Chicken",price:"500"},
    ];
    const [modalstate,setModalState] =useState("close")
    const modal=(value)=>{
        setModalState(value)
    }
    const [value,setValue]=useState("0");
    const getOrder=(stuff)=>{
        setValue(stuff);
    } 
    order(value); 
    return(
        <div className={modalstate==="close"?"cards close":"cards"}>
            {items.map((item)=>{
                return(<Foodcard prop={modal} item={item}/>)
            })}
            <FoodModal prop={modal} item={modalstate} value={getOrder}/>
        </div>
    )
}

export default Foodcards;