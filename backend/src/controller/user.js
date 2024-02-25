const createError=require('http-errors');
const { response } = require("express");
const { EncryptPassword, comparePassword } = require("../helper/password");
const { createToken } = require("../middleware/userfile");
const User = require("../model/user");
const { uuid } = require('uuidv4');
const jwt = require("jsonwebtoken");
const sendEmailWithNodeMailer = require("../helper/email");
const dev = require('../config');
const { default: mongoose } = require('mongoose');
const { getId } = require('../helper/cookie');


const getAllUsers = async(req,res)=>{
    try {
        const users = await User.find({});
        return res.status(200).json({
            msg:"all users returned",
            users
        })
    } catch (error) {
        return res.status(500).json({
            msg:error.message,
        });
    }
}

const createUser = async(req,res)=>{
    try {
        const {email,name,location,password,retype_password}=req.body;
        if(!name){
            throw createError(404,'Please input User name');
        }
        if(!password){
            throw createError(404,'Please input Password');
        }
        if(!retype_password){
            throw createError(404,'Please re-input Password');
        }
        if(!email){
            throw createError(404,'Please input Email');
        }
        if(password.length < 6){
            throw createError(400,'Password must be greater than 6 characters');
        }
        if(retype_password != password){
            throw createError(400,'password do not match');
        }
        const user = await User.findOne({email});
        if(user){
            throw createError(400,"User already exists");
        } 

        const hashPassword = await EncryptPassword(password);
    

        //creating verification mail for the user
        let token={name,email,hashPassword,location};
        token= await createToken(token);
        const emailData={
            email,
            subject:"Verify your email",
            html:`<h1>Welcome to Eats</h1>
            <p>Click here to <a href="${dev.app.clientUrl}/auth/activate/${token}" target="_blank"> activate your account </a> </p>`,
        }

        await sendEmailWithNodeMailer(emailData);
        
        return res.status(200).json({
            msg: "Your verification email has been sent. Please click the link in your email to verify your account",
        })
    } catch (error) {
        error.message = "error getting user information" + error.message
        next(error);
    }
}

const verifyUser = async (req, res) => {
    try {
        const {token}=req.body;
        if(!token){
            throw createError(404,"token is missen");
        }
        jwt.verify(token, dev.app.privateKey, async(err, decoded)=> {
            if (err){
               throw createError(404,"token expired")
                }
            const {name,email,hashPassword,location}=decoded;
            const isExist= await User.findOne({email:email});
             if(isExist){
                throw createError(401,'User already exist with this email')
             }
            const newuser =new  User({
            id: uuid(),
            email,
            password: hashPassword,
            name,
            location,
            })

            await newuser.save();
            return res.status(201).json({
                msg:"user created successfully",
                newuser
            })
        })

    } catch (error) {
        error.message = "error creating user: " + error.message
        next(error)
    }
}

const getOneUser= async(req,res,next)=>{
    try {
        const {id}=req.params;
        const user = await User.findOne({id});
        if(!user){
            return res.status(404).json({
                msg:"user doesn't exists",
            });
        }      
        return res.status(200).json({
            msg:" user returned",
            data:user
        })
    } catch (error) {
       error.message = "error getting a user: " + error.message
       if(error instanceof mongoose.Error.CastError){
        createError(404,"Invaid Id")
       }
       next(error)
    }
}

const deleteUser = async(req,res)=>{
    try {
        const {id}=req.params;
        const user = await User.findOne({id});
        if(!user){
            throw createError(404,"user doesn't exists")
        } 

        await User.findOneAndDelete({id});
        return res.status(200).json({
            msg:"users deleted successfully",
        })
    } catch (error) {
        error.message = "error getting a user: " + error.message
       if(error instanceof mongoose.Error.CastError){
        createError(404,"Invaid Id")
       }
       next(error)
    }
}

const updateUser = async(req,res,next)=>{
    try {
        const {id}=req.params;
        const user = await User.findOne({id});
        if(!user){
            return res.status(404).json({
                msg:"user doesn't exists",
            });
        } 

        const filter = {id};
        const update = {...req.body , user_image:req.file.originalname}
        const userUpdate = await User.findOneAndUpdate(filter,update,{new:true});
        if(!userUpdate){
           throw createError(422,"user not Updated")
        }
        return res.status(200).json({
            msg:"users updated successfully",
            data:userUpdate
        })
    } catch (error) {
        error.message = "error updating user" + error.message
        next(error)
    }
}

const loginUser = async(req, res, next) => {
    try {
        const {email,password} = req.body;

        if(!email || !password) {
            throw createError(404,"Please enter your all required fields.")
        }

        const user = await User.findOne({email});
        if (!user) {
            throw createError(404,"User not found.")
        }
        const verify = await comparePassword(password,user.password);
        if (!verify) {
            throw createError(401, "Not Authorized. Password or email mismatch.")
        }   
        if(user.is_Banned){
            throw createError(200,"You have been banned, Please contact the administrator")
        }
        await User.findOneAndUpdate({email},{is_Login:true},{new:true});

        //creating token auth for login user
        const token= await jwt.sign({id:user.id}, dev.app.authkey,{expiresIn:"60m"});
       
        // store token in cookie
        res.cookie('accessToken',token,{
            expires:new Date(Date.now() + 1000 *60*29),
            httpOnly:true,
            // secure:true,
            sameSite:true
        });
        return res.status(200).json({
            msg: "User logged in successfully",
        })
      
    } catch (error) {
        error.message = "error login user : " + error.message
        next(error)
    }
} 

const logoutUser=async(req,res)=>{
    try {
        if(req.headers.cookie){
            const id=req.headers.cookie.split('=')[0];
            await User.findOneAndUpdate({id})
            res.clearCookie(id)
            res.status(200).json({message:"Logout succesful"}) 
        }else{
            res.status(404).json({message:"You are logged out . Please log in"})
        }
              

    } catch (error) {
        res.status(500).json({message:"Something went wrong"})  
    }
}


const forgetPassword=async(req,res,next)=>{
    try {
       const{email}=req.body;
       if(!email){
        throw createError(404,"Please enter your email")
        }
        const user= await User.findOne({email:email});
            if(!user){
                throw createError(404,"user with this email does not exist")
            }             
            let token= {email};

            token = await createToken(token);

            //create email to be sent

            const emailData={
                email,
                subject:"reset password",
                html:`<h1>Rest Password</h1>
                <p>Your account has registered a password rest promot.Click here to <a href="${dev.app.clientUrl}/auth/reset-password/${token}" target="_blank">Reset password</a>. If you are not the one who promot this. Ignore this email</p>`,
            }

            sendEmailWithNodeMailer(emailData);
            return res.status(200).json({
                msg: "Check your email to continue with your changes",
            })
    } catch (error) {
       error.message = "error forgot password" + error.message
       next(error);
    }
}

const restPassword = async (req, res) => {
    try {
// remember to get token form the params when launching
        const {token} = req.body;
        const {password,retype_password}=req.body;
        if(!token){
            throw createError(404,"token is missen");
        }
        if(password.length < 6){
            throw createError(400,'Password must be greater than 6 characters');
        }
        if(!retype_password){
            throw createError(404,'Please re-input Password');
        }
        if(retype_password != password){
            throw createError(400,'password do not match');
        }

        const hashPassword = await EncryptPassword(password);

        jwt.verify(token, dev.app.privateKey, async(err, decoded)=> {
            if (err){
               return res.status(404).json({
                    msg:err.message,
               })
                }
            const {email}=decoded;
            
            await User.updateOne({email},{
                $set:{
                    password:hashPassword
                }
            })

            return res.status(201).json({
                msg:"Password successfully Updated",
            })
        })

    } catch (error) {
        error.message="error reseting password " + error.message
        next(error)
    }
}

const banUser = async(req, res,next) => {
    try {
        const {id}=req.params;
        const user = await User.findOne({id});
        if(!user){
            return res.status(404).json({
                msg:"user doesn't exists",
            });
        } 
        const filter = {id};
        const update = {is_Banned:true}
        const userUpdate = await User.findOneAndUpdate(filter,update,{new:true});
        if(!userUpdate){
           throw createError(422,"user not Ban")
        }
        return res.status(200).json({
            msg:"users ban successfully",
            data:userUpdate
        })
    } catch (error) {
        error.message = "error banning  user" + error.message
        next(error)
    }
}

const kycVerification= async(req,res,next)=>{
    try {
        const {id}=req.params;
        const user = await User.findOne({id});
        if(!user){
            return res.status(404).json({
                msg:"user doesn't exists",
            });
        } 
        const {firstName,lastName,dob} = req.body;
        const image = req.file.path;
        if(!firstName || !lastName || !dob || !image){
            throw createError(404,"Please fill in all required fields");
        }
        
        const filter = {id};
        const update = {...req.body,id_image:req.file.originalname}
        const userUpdate = await User.findOneAndUpdate(filter,update,{new:true});
        if(!userUpdate){
           throw createError(422,"kyc verification upload failed");
        }
        return res.status(200).json({
            msg:"kyc upload successfully",
            data:userUpdate
        })
    } catch (error) {
        error.message = "error kyc upload" + error.message
        next(error)
    }
}


module.exports = {createUser,getAllUsers,getOneUser,deleteUser,updateUser,loginUser,verifyUser,logoutUser,forgetPassword,restPassword,banUser,kycVerification};