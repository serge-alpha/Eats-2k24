import React from "react";
// import { AiOutlineHeart } from "react-icons/ai";
import { FaStar, FaStarHalf } from "react-icons/fa";
// import { AiFillHeart } from "react-icons/ai";

import { BsPersonWalking } from "react-icons/bs";
// import { IconContext } from "react-icons";
// const images = require.context('frontend/public/image', true);
// const imageList = images.keys().map(image => images(image));

const Foodcard =({modal,item,view,chef,address})=>{
    // const [fav,setFAv]=useState("AiOutlineHeart")
    // const favourite=()=>{
    //     if (fav==="AiOutlineHeart"){
    //        return setFAv("AiFillHeart")
    //     }else{
    //        return  setFAv("AiOutlineHeart")
    //     } 
    // }
    address=`${address}/meal/images`;
    const openModal=()=>{
        // sends card data to the parent.. Foodcards
      modal(item,chef)
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
        {/* {console.log(chef)} */}
            <div className="card_body" >
                {/* <div className="card_head">
                == special orders will be added later too==
                    <span>Special offer</span>
                    == favourites will be added later ==
                    <span></span>
                     <span onClick={()=>favourite()}>
                       {fav==="AiOutlineHeart"?<AiOutlineHeart />: <IconContext.Provider value={{ color: "#f7990c"}}><AiFillHeart /></IconContext.Provider>} 
                    </span> 
                    
                </div> */}
                <div className="card_order" onClick={openModal}>
                    <div className="card_ordertype" >
                        <span><BsPersonWalking /></span>
                        <span>{chef?chef.delivery_type:""}</span>
                    </div>
                </div>
                <img src={`${address}${item.image}`}  alt={item.name}/>
                
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