import React, { useEffect, useState } from "react";
import FoodcardR from "./FoodCardR";
import AddFoodCardR from "./AddFoodCardR";
import { Slide, toast } from "react-toastify";
import { getAllRest } from "../services/rest";

const FoodcardRs =({user,mealList})=>{
    const [meals,setMeals]=useState([]);
    const [rest,setRest]=useState({});
    useEffect(()=>{
        const fetch=async()=>{
            try {
                const Meals= await getAllRest();
                const rest=Meals.rest.find((rest)=>{
                    return user.id===rest.chef;
                });
                setMeals(rest.meals);
                setRest(rest);
            } catch (error) {
                toast(error.msg, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    theme: "colored",
                    transition: Slide
                    });
            }
            // console.log(meals);
        };
        fetch();
       
    },[user.id]);
    return(
        <div className="cards">
            <AddFoodCardR/>
            {meals.map((meal)=>{
                // prop={modal} function here is used to send to the modal infomation about the card been clicked
                // item contains the infomation to be displayed on the card
                const item= mealList.find((item)=>{
                    return (item.id===meal)
                });
                return(item?<FoodcardR  item={item} rest={rest}/>:<></>);
            })}       
        
        </div>
    )
}

export default FoodcardRs;