import React, { useEffect, useState } from "react";
import FoodcardRs from "../components/FoodCardsR";
import Footer from "../components/Footer";
import { getAllMeals } from "../services/meal";

const Restaurant=({user})=>{
    const[mealList,setMeals] =useState([]);
    
    
    useEffect(()=>{
        const getmeals=async()=>{
             const list =await getAllMeals();
             setMeals(list.meals);
        }
        getmeals();
    },[])
    return(
        <div>
            <div className="restuarant">
                <FoodcardRs user={user} mealList={mealList}/>    
                <Footer/> 
            </div> 
                    
        </div>

    )
}

export default Restaurant;