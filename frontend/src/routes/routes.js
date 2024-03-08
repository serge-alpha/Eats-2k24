import React from "react";

import {BrowserRouter, Route, Routes} from "react-router-dom";
import Nav from "../components/Nav";
import Login from "../pages/Login";
import StartPage from "../pages/StartPage";
import Home from "../pages/Home";
import Register from "../pages/Register";
import AddRestaurant from "../pages/AddRestaurant";
import Restaurant from "../pages/Restaurant";

const Index=()=>{
   
    return(
        <BrowserRouter>
            <Nav/>
            <Routes>
                <Route path="/" element={<StartPage/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/add-restaurant" element={<AddRestaurant/>}></Route>
                <Route path="/restaurant" element={<Restaurant/>}></Route>
                <Route path="/restaurant/add-meal"></Route>
            </Routes>
        </BrowserRouter>
    )
};

export default Index;