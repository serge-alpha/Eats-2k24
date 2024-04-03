import React, { useState } from "react";
import Foodcard from "./FoodCard";
import FoodModal from "./FoodModal";

const Foodcards =({addcart})=>{
    const [modalstate,setModalState] =useState("close")
    const fun=(value)=>{
        setModalState(value)
    }

    return(
        <div className={modalstate==="close"?"cards close":"cards"}>
            <Foodcard prop={fun}/>
            <Foodcard  prop={fun}/>
            <Foodcard  prop={fun}/>
            <Foodcard  prop={fun}/>
            <Foodcard  prop={fun}/>
            <Foodcard  prop={fun}/>
            <Foodcard  prop={fun}/>
            <Foodcard  prop={fun}/>
            <Foodcard  prop={fun}/>
            <Foodcard  prop={fun}/>
            <FoodModal prop={fun}/>
        </div>
    )
}

export default Foodcards;