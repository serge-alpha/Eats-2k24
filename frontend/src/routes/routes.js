import React from "react";

import {BrowserRouter, Route, Routes} from "react-router-dom";
import Nav from "../components/Nav";
import Home from "../pages/Home";
import Login from "../pages/Login";

const Index=()=>{
    return(
        <BrowserRouter>
            <Nav/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </BrowserRouter>
    )
};

export default Index;