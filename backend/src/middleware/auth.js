const jwt =require('jsonwebtoken');
const dev = require('../config');
const User = require('../model/user');
const createError=require('http-errors');
const isLogin=(req,res,next)=>{
    try {
        const accessToken=req.headers.cookie;
        if(!accessToken){
            return res.status(422).json({message:'Please login'})
        }

        jwt.verify(accessToken,String(dev.app.authkey),
        async(err,id)=>{
            if(err){
                return createError(404,"Invalid Token");
            }         
        })
        next()
    } catch (error) {
        next(error)
    }
}

const  isLogOut=(req,res,next)=>{
    try { 
        const accessToken=req.headers.cookie;
        if(accessToken){
           return res.status(422).json({message:'Please log out'});
          
          }  
          next();                    
       
    } catch (error) {
        throw createError(500,":Something went wrong");
    } 
}

const isAmin= async(req,res,next)=>{
    try {
        const accessToken=req.headers.cookie;
        if(!accessToken||!accessToken.split("=")[1]){
           throw createError(404,"Please login");
        }
        
        jwt.verify(accessToken,String(dev.app.authkey),
        async(err,id)=>{
            if(err){
                throw createError(404,"Invalid Token");
            }   
            let id_=id.id;
            const user = await User.findOne({id:id_});
             if(!user.is_admin){
                 throw createError(404,"Only Admins can move ahead")
            } else{
                return next() 
            }             
        })
        
    } catch (error) {

        next(error) 
    }
}

module.exports={isLogin,isLogOut,isAmin}
