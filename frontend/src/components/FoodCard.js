import React, { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { BsPersonWalking } from "react-icons/bs";
import { IconContext } from "react-icons";

const Foodcard =({modal,item,view,chef})=>{
    const [fav,setFAv]=useState("AiOutlineHeart")
    const favourite=()=>{
        if (fav==="AiOutlineHeart"){
           return setFAv("AiFillHeart")
        }else{
           return  setFAv("AiOutlineHeart")
        } 
    }
    const openModal=()=>{
        // sends card data to the parent.. Foodcards
      modal(item)
      view("open")
    }
    return(
        <div className="card"> 
            <div className="card_body" >
                <div className="card_head">
                    <span>Special offer</span>
                    <span onClick={()=>favourite()}>
                       {fav==="AiOutlineHeart"?<AiOutlineHeart />: <IconContext.Provider value={{ color: "#f7990c"}}><AiFillHeart /></IconContext.Provider>} 
                    </span>
                    
                </div>
                <div className="card_order" onClick={openModal}>
                    <div className="card_ordertype" >
                        <span><BsPersonWalking /></span>
                        <span>PickUp only</span>
                    </div>
                </div>
                
            </div>
            <div className="card_info">
                    <span>
                        <h3><b>{item.name}</b></h3>
                        <p> 30-40mins</p>
                        {chef?<p>By {chef.restaurant_name===""?chef.name:chef.restaurant_name}</p>:<></>}
                    </span>
                    <p>{item.rating}</p>             
            </div>
        </div>
    )
}

export default Foodcard;