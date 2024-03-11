import React, { useState } from "react";
import Foodcard from "./FoodCard";
import FoodModal from "./FoodModal";

const Foodcards =()=>{
    const [modalstate,setModalState] =useState('xmodal')
    const fun=(value)=>{
        setModalState(value)
    }
    return(
        <div className="cards close">
            <Foodcard prop={fun}/>
            <Foodcard/>
            <Foodcard/>
            <Foodcard/>
            <Foodcard/>
            <Foodcard/>
            <Foodcard/>
            <Foodcard/>
            <Foodcard/>
            <Foodcard/>
            {modalstate==="xmodal"?<></>:<FoodModal modalstate="modal"/>}
        </div>
    )
}

export default Foodcards;