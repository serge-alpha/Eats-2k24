import React, { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { BsPersonWalking } from "react-icons/bs";
import { IconContext } from "react-icons";

const Foodcard =({prop})=>{
    const [fav,setFAv]=useState("AiOutlineHeart")
    const favourite=()=>{
        if (fav==="AiOutlineHeart"){
           return setFAv("AiFillHeart")
        }else{
           return  setFAv("AiOutlineHeart")
        } 
    }
    const openModal=()=>{
      prop('open')
    }
    return(
        <div className="card"> 
            <div className="card_body" onClick={openModal}>
                <div className="card_head">
                    <span>Special offer</span>
                    <span onClick={()=>favourite()}>
                       {fav==="AiOutlineHeart"?<AiOutlineHeart />: <IconContext.Provider value={{ color: "#f7990c"}}><AiFillHeart /></IconContext.Provider>} 
                    </span>
                </div>
                <div className="card_ordertype">
                    <span><BsPersonWalking /></span>
                    <span>PickUp only</span>
                </div>
            </div>
            <div className="card_info">
                    <span>
                        <h3><b>Garri and Eru</b></h3>
                        <p> 30-40mins</p>
                    </span>
                   <span>(4.0)</span>
            </div>
        </div>
    )
}

export default Foodcard;