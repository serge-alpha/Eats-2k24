import React from "react";

import {BrowserRouter, Route, Routes} from "react-router-dom";
import Nav from "../components/Nav";
import Login from "../pages/Login";
import StartPage from "../pages/StartPage";
import Home from "../pages/Home";
import Register from "../pages/Register";
import AddRestaurant from "../pages/AddRestaurant";
import Restaurant from "../pages/Restaurant";
import AddMeal from "../pages/AddMeal";
import HomeCart from "../pages/HomeCart";

const Index=()=>{
    return(
        <BrowserRouter>
            <Nav/>
            <Routes>
                <Route path="/" element={<StartPage/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/home" element={ <Home /> }/>
                <Route path="/home-cart" element={ <HomeCart /> }/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/add-restaurant" element={<AddRestaurant/>}></Route>
                <Route path="/restaurant" element={<Restaurant/>}></Route>
                <Route path="/restaurant/add-meal" element={<AddMeal/>}></Route>
            </Routes>
        </BrowserRouter>
    )
};

export default Index;