import React, { useState } from "react";
import Foodcard from "./FoodCard";
import FoodModal from "./FoodModal";

const Foodcards =({order,meals,chefs})=>{
    const items = meals;
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
                const chef=chefs.find((chef)=>{
                    return item.chef===chef.id;
                });
                console.log(chef)
                return(<Foodcard modal={modalstate} view={viewstate} chef={chef}  item={item}/>)
            })}
            
            
            <FoodModal  view={viewstate} item={modal} order={getOrder}/>
        </div>
    )
}

export default Foodcards;