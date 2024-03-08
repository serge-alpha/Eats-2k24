import React from "react";
import FoodcardR from "./FoodCardR";
import AddFoodCardR from "./AddFoodCardR";

const FoodcardRs =()=>{
    return(
        <div className="cards">
            <AddFoodCardR/>
            <FoodcardR/>
            <FoodcardR/>
            <FoodcardR/>
            <FoodcardR/>           
        </div>
    )
}

export default FoodcardRs;