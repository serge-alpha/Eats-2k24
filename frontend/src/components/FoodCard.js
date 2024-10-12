import React, { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { FaStar, FaStarHalf } from "react-icons/fa";
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
    const rating=(value)=>{
        for(let i=value; i<0 ; i--){
            if(i===0.5){
                return(<FaStarHalf />)
            }else{
                console.log(i);
                return(<FaStar/>)
            }
            
        }
    };
    return(
        <div className="card"> 
            <div className="card_body" style={item.image?{backgroundImage:`http://localhost:3001/public/meal/images/${item.image}`}:{backgroundColor:"initial"}}>
            <img src={`http://localhost:3001/public/meal/images/${item.image}`} alt={item.name} />
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
                        {/* Time taken for delivery */} 
                        {/* have to edit database so it takes in decimals too as rating values */}
                        <h5>{rating(item.rating)}</h5>
                        {/* <p> 30-40mins</p> */}
                       
                    </span>
                    <span>
                        <h4><b>{item.price} CFA</b></h4>
                    </span>
                                
            </div>
        </div>
    )
}

export default Foodcard;