const jwt = require("jsonwebtoken");
const createError=require('http-errors');
const dev = require("../config");
const getId = (req,res)=>{
    let id="";
    let accessToken;
    try {
        accessToken=req.headers.cookie.split(";")[1].split("=")[1];
    } catch{
        try{
            accessToken=req.headers.cookie.split("=")[1];
        }catch{
            throw createError(404,"unexpected");
        }
    }
    
    // console.log(accessToken);

    jwt.verify(accessToken,String(dev.app.authkey),
        async(err,data)=>{
            if(err){
                throw createError(404,err);
                
            }   
            id = data.id;     
        })
        return id;
}

module.exports = {getId} 