import React, { useState } from "react";
import Foodcard from "./FoodCard";
import FoodModal from "./FoodModal";

const Foodcards =({order})=>{
    const items = [
        {name:"Garri and Eru",price:"2000",chef:"John Smith"},
        {name:"Rice and Bean",price:"1000",chef:"John Smith"},
        {name:"Achu",price:"1500",chef:"John Smith"},
        {name:"CornChaff",price:"700",chef:"John Smith"},
        {name:"Pancakes",price:"600",chef:"John Smith"},
        {name:"Cakes",price:"1700",chef:"John Smith"},
        {name:"Peanut",price:"500",chef:"John Smith"},
        {name:"Water and Chicken",price:"500",chef:"John Smith"},
    ];
    const [modal,setModal]=useState({})
    const [view,setView] =useState("close");
    // recieves items from food card on modal open and recieves a "close" string on modal close
    const modalstate=(value)=>{
        setModal(value);
    }
    const viewstate=(value)=>{
        setView(value);
    }
    const [value,setValue]=useState([]);
    const getOrder=(stuff)=>{
        setValue((value)=>[...value,stuff]);
    }  
    order(value); 
    return(
        <div className={view==="close"?"cards close":"cards"}>
            {items.map((item)=>{
                // prop={modal} function here is used to send to the modal infomation about the card been clicked
                // item contains the infomation to be displayed on the card
                return(<Foodcard modal={modalstate} view={viewstate}  item={item}/>)
            })}
            <FoodModal  view={viewstate} item={modal} order={getOrder}/>
        </div>
    )
}

export default Foodcards;