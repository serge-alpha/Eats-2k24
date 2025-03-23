import React, { useEffect, useState } from "react";
import FoodcardRs from "../components/FoodCardsR";
import Footer from "../components/Footer";
import { getAllMeals } from "../services/meal";
import { ToastContainer } from "react-toastify";

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
             <ToastContainer position="top-right"
                                    autoClose={5000}
                                    hideProgressBar
                                    newestOnTop={false}
                                    closeOnClick
                                    rtl={false}
                                    pauseOnFocusLoss
                                    draggable
                                    pauseOnHover
                                    theme="colored"
                                    />
            <div className="restuarant">
                <FoodcardRs user={user} mealList={mealList}/>    
                <Footer/> 
            </div> 
                    
        </div>

    )
}

export default Restaurant;