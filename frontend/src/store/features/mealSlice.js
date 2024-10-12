import { createSlice } from "@reduxjs/toolkit";

const meals= localStorage.getItem('meals_data') != null ? JSON.parse(String(localStorage.getItem('meals_data'))) :[];
    

const initialState={
    meals
}

const MealSlice= createSlice({
    initialState,
    name:'meals',
    reducers:{
        addMealToCart:(state,action)=>{
            state.meals.push(action.payload)
            localStorage.setItem('meals_data',JSON.stringify(state.meals))
        },
        removeMealsCart:(state,action)=>{
           state.meals= state.meals.filter((meals)=>
                 meals.meals.id !== action.payload.meals.id
            )
            localStorage.setItem('meals_data',JSON.stringify(state.meals))
        },
        CartCheckOut:(state,action)=>{
            state.meals=[]
            localStorage.setItem('meals_data',JSON.stringify(state.meals))
        },
    }
})

export default MealSlice.reducer;
export const {removeMealsCart,addMealToCart,CartCheckOut}=MealSlice.actions;
