import React from "react";
import FoodcardR from "./FoodCardR";
import AddFoodCardR from "./AddFoodCardR";

const FoodcardRs =()=>{
    const items = [
        {name:"Garri and Eru",price:"2000"},
        {name:"Rice and Bean",price:"1000"},
        {name:"Achu",price:"1500"},
        {name:"CornChaff",price:"700"},
        {name:"Pancakes",price:"600"},
        {name:"Cakes",price:"1700"},
        {name:"Peanut",price:"500"},
        {name:"Water and Chicken",price:"500"},
    ];
    return(
        <div className="cards">
            <AddFoodCardR/>
            {items.map((item)=>{
                // prop={modal} function here is used to send to the modal infomation about the card been clicked
                // item contains the infomation to be displayed on the card
                return(<FoodcardR  item={item}/>)
            })}         
        </div>
    )
}

export default FoodcardRs;