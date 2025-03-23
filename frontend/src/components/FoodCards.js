import React, { useState } from "react";
import Foodcard from "./FoodCard";
import FoodModal from "./FoodModal";

const Foodcards =({meals,chefs,filter,address,category_filter})=>{
    const items = meals;
    let chef;
    const [modal,setModal]=useState({});
    const [order,setOrder]=useState(false);
    // const [search_rest,setSearchRest]=useState("");
    const [view,setView] =useState("close");
    // recieves items from food card on modal open and recieves a "close" string on modal close
    const modalstate=(value,chefDetails)=>{
        setModal({...value,chefDetails,order});
    }
   
    const orderState=(value)=>{
        setOrder(value);
    }
    const viewstate=(value)=>{
        setView(value);
    }
    //for restaurant name using search field
console.log(filter)
 
    return( 
        <div className={view==="close"?"cards close":"cards"}>
            {filter!==""||category_filter!==""?items
            .filter(({category})=>category.toLocaleLowerCase().includes(category_filter.toLocaleLowerCase()))
            .filter((item)=>item.chef.toLocaleLowerCase().includes(
                chefs.find(({restaurant_name})=>restaurant_name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()))!==undefined ? 
                    chefs.find(({restaurant_name})=>restaurant_name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())).chef:false
            )||item.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()))
            // .filter(({name})=>name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()))           
            .map((item)=>{
                // prop={modal} function here is used to send to the modal infomation about the card been clicked
                // item contains the infomation to be displayed on the card
                chef=chefs.find((chef)=>{
                    return item.chef===chef.chef;
                });
                return(item.availability?<Foodcard modal={modalstate} view={viewstate} chef={chef}  item={item} address={address} />:null);
            }):
            items.map((item)=>{
                // prop={modal} function here is used to send to the modal infomation about the card been clicked
                // item contains the infomation to be displayed on the card
                chef=chefs.find((chef)=>{
                    return item.chef===chef.chef;
                });
                return(item.availability?<Foodcard modal={modalstate} view={viewstate} chef={chef}  item={item} address={address} />:null);
            })}
            
            
            <FoodModal  view={viewstate} item={modal} order={orderState} address={address}/>
        </div>
    )
}

export default Foodcards;