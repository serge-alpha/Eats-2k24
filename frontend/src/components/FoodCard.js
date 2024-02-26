import React, { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { BsPersonWalking } from "react-icons/bs";

const FoodCard =()=>{
    const [fav,setFAv]=useState("AiOutlineHeart")
    const favourite=()=>{
        if (fav==="AiOutlineHeart"){
           return setFAv("AiFillHeart")
        }else{
           return  setFAv("AiOutlineHeart")
        }
        
    }
    return(
        <div className="card"> 
            <div className="card_body">
                <div className="card_head">
                    <span>Special offer</span>
                    <span onClick={()=>favourite()}>
                       {fav==="AiOutlineHeart"?<AiOutlineHeart />: <AiFillHeart />} 
                    </span>
                </div>
                <div className="card_ordertype">
                    <span><BsPersonWalking /></span>
                    <span>PickUp only</span>
                </div>
            </div>
            <div className="card_info">
                    <span>
                        <h3>Garri and Eru</h3>
                        <p> 30-40mins</p>
                    </span>
                   <span>(4.0)</span>
            </div>
        </div>
    )
}

export default FoodCard;