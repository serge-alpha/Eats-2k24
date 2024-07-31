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
    const [order,setOrder] =useState([]);
    const [user,setUser] =useState();
    const [isLogin,setIsLogin] =useState(false);
    const Order =(data)=>{
        setOrder(data)
    }

    const User =(data)=>{   
            setIsLogin(true);
            setUser(data);  
    }
 



    return(
        <BrowserRouter>
            <Nav isLogin={isLogin} setIsLogin={setIsLogin} order={order}/>
            <Routes>
                    <Route path="/" element={<StartPage/>}/>
                    <Route path="/login" element={<Login getUser={User}/>}/>
                    <Route path="/auth/activate/:token" element={<Verify/>}/>
                    <Route path="/home" element={ <Home getOrder={Order} user={user}/> }/>
                    <Route path="/home-cart" element={ <Cart data={order}/> }/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/add-restaurant" element={<AddRestaurant user={user}/>}></Route>
                    <Route path="/restaurant" element={<Restaurant/>}></Route>
                    <Route path="/restaurant/add-meal" element={<AddMeal/>}></Route>
                    
            </Routes>
        </BrowserRouter>
    )
};

export default Index;