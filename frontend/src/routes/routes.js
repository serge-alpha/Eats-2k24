import React from "react";

import {BrowserRouter, Route, Routes} from "react-router-dom";
import Nav from "../components/Nav";
import Login from "../pages/Login";
import StartPage from "../pages/StartPage";
import Home from "../pages/Home";

const Index=()=>{
    return(
        <BrowserRouter>
            <Nav/>
            <Routes>
                <Route path="/" element={<StartPage/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/home" element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    )
};

export default Index;