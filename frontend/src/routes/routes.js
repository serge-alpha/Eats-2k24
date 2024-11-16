import React, {useState} from "react";

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
    const [filter,setFilter] =useState('');
    // we need to change the state to false by defualt.... we changed it to true for testing
    const [isLogin,setIsLogin] =useState(true);
  
//check and update user login state
    const User =(data)=>{   
            setIsLogin(true);
            setUser(data);  
    }
    const getFilterValue=(value)=>{
        setFilter(value);
    }
 

    return(
        <BrowserRouter>
            <Nav isLogin={isLogin} setIsLogin={setIsLogin} getFilterValue={getFilterValue}/>
            <Routes>
                    <Route path="/" element={<StartPage/>}/>
                    <Route path="/login" element={<Login getUser={User}/>}/>
                    <Route path="/auth/activate/:token" element={<Verify/>}/>
                    {/* <Route path="/home" element={ <Home getOrder={Order} user={user} mealList={mealList}/> }/> */}
                    <Route path="/home" element={isLogin? <Home  user={user} filter={filter}/>:<StartPage/> }/>
                    <Route path="/home-cart" element={ <Cart/> }/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/add-restaurant" element={<AddRestaurant user={user}/>}></Route>
                    <Route path="/restaurant" element={<Restaurant user={user}/>}></Route>
                    <Route path="/restaurant/add-meal" element={<AddMeal/>}></Route>    
            </Routes>
        </BrowserRouter>
    )
};

export default Index;