import React, { useState} from "react";

import {BrowserRouter, Route, Routes} from "react-router-dom";
import Nav from "../components/Nav";
import Login from "../pages/Login";
import StartPage from "../pages/StartPage";
import Home from "../pages/Home";
import Register from "../pages/Register";
import AddRestaurant from "../pages/AddRestaurant";
import Restaurant from "../pages/Restaurant";
import AddMeal from "../pages/AddMeal";
import Cart from "../pages/Cart";
import Verify from "../pages/Verify";



const Index=()=>{
    const [user,setUser] =useState();
    const [filter,setFilter] =useState("");
    const [category_filter,setCategory_Filter] =useState("");
    //// we need to change the state to false by defualt.... we changed it to true for testing
    const [isLogin,setIsLogin] =useState(true);
    const address="https://eatsbackend.onrender.com";
    // const address="http://localhost:3001";
  
//check and update user login state
    const User =(data)=>{   
            setIsLogin(true);
            setUser(data);  
    }
    
    const getFilterValue=(value)=>{
        setFilter(value);
    }   
    const getCategoryFilterValue=(value)=>{
        setCategory_Filter(value);
    }
  console.log(filter)
    return(
        <BrowserRouter>
            <Nav isLogin={isLogin} setIsLogin={setIsLogin} getFilterValue={getFilterValue} user={user} getCategoryFilterValue={getCategoryFilterValue}/>
            <Routes>
                    <Route path="/" element={<StartPage/>}/>
                    <Route path="/login" element={<Login getUser={User}/>}/>
                    <Route path="/auth/activate/:token" element={<Verify/>}/>
                    {/* <Route path="/home" element={ <Home getOrder={Order} user={user} mealList={mealList}/> }/> */}
                    <Route path="/home" element={isLogin? <Home  user={user} filter={filter} address={address} getCategoryFilterValue={getCategoryFilterValue} category_filter={category_filter}/>:<StartPage/> }/>
                    <Route path="/home-cart" element={ isLogin?<Cart address={address}/>:<StartPage/> }/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/add-restaurant" element={ isLogin?<AddRestaurant user={user}/>:<StartPage/>}></Route>
                    <Route path="/restaurant" element={ isLogin?<Restaurant user={user}/>:<StartPage/>}></Route>
                    <Route path="/restaurant/add-meal" element={ isLogin?<AddMeal/>:<StartPage/>}></Route>    
            </Routes>
        </BrowserRouter>
    )
};

export default Index;
