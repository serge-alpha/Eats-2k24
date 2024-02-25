const jwt =require('jsonwebtoken')
const dev = require('../config')
const User = require('../model/user')
const isLogin=(req,res,next)=>{
    try {
        const accessToken=req.headers.cookie.split('=')[1]
        if(!accessToken){
            return res.status(422).json({message:'Please login'})
        }

        jwt.verify(accessToken,String(dev.app.authkey),
        async(err,id)=>{
            if(err){
                return res.status(404).json({message:'Invalid Token'})
            }         
        })
        next()
    } catch (error) {
        next(error)
    }
}

const isLogOut=(req,res,next)=>{
    try { 
        const accessToken=req.headers.cookie
        if(accessToken){
          return res.status(422).json({message:"Please logout"}) 
          }  
          next();                    
       
    } catch (error) {
        res.status(500).json({message:"Something is wrong"});
    } 
}

const isAmin= async(req,res,next)=>{
    try {
        const accessToken=req.headers.cookie.split("=")[1];
        if(!accessToken){
           return res.status(404).json({message:'Please login'})
        }
        
        jwt.verify(accessToken,String(dev.app.authkey),
        async(err,id)=>{
            if(err){
                return res.status(404).json({message:'Invalid Token'})
            }   
            let id_=id.id;
            const user = await User.findOne({id:id_});
            console.log(id_);
            console.log(user);
             if(!user.is_admin){
                 return res.status(404).json({message:'Only Admins can move ahead'})
            } else{
                return next()
            }             
        })
        
    } catch (error) {
        next(error)
    }
}

module.exports={isLogin,isLogOut,isAmin}
