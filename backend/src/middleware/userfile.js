const jwt=require('jsonwebtoken');
const dev = require('../config');
const multer =require("multer");
const path=require("path");
const fileSize=1024*1024*2;

const storageUser= multer.diskStorage({
    destination:(req,file,cd)=>{
        cd(null, path.join( __dirname ,"../public/user/images"));
    },
    filename:(req,file,cd)=>{
        cd(null,file.originalname);
    }
})

const storageMeal= multer.diskStorage({
    destination:(req,file,cd)=>{
        cd(null, path.join( __dirname ,"../public/meal/images"));
    },
    filename:(req,file,cd)=>{
        cd(null,file.originalname);
    }
})

const uploadMeal = multer({storage:storageMeal,limits:{fileSize}});

const uploadUser = multer({storage:storageUser,limits:{fileSize}});



const createToken=async(userData)=>{
        try {
           return await jwt.sign(userData, dev.app.privateKey,{expiresIn:"10m"});
        } catch (error) {
            throw(error)
        }
  }

 
    
  module.exports={createToken,uploadUser,uploadMeal};