import React, { useState } from "react";
import Foodcard from "./FoodCard";
import FoodModal from "./FoodModal";

const Foodcards =({meals,chefs,filter})=>{
    const items = meals;
    let chef;
    const [modal,setModal]=useState({});
    const [view,setView] =useState("close");
    // recieves items from food card on modal open and recieves a "close" string on modal close
    const modalstate=(value)=>{
        setModal(value);
    }
    const viewstate=(value)=>{
        setView(value);
    }

    return(
        <div className={view==="close"?"cards close":"cards"}>
            {items.filter(({name})=>name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())).map((item)=>{
                // prop={modal} function here is used to send to the modal infomation about the card been clicked
                // item contains the infomation to be displayed on the card
                chef=chefs.find((chef)=>{
                    return item.chef===chef.chef;
                });
                return(item.availability?<Foodcard modal={modalstate} view={viewstate}  item={item}/>:null);
            })}
            
            
            <FoodModal  view={viewstate} item={modal}  chef={chef}/>
        </div>
    )
}

export default Foodcards;