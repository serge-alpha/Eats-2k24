const createError=require('http-errors');
const Meal = require("../model/meal");
const { v4: uuidv4 } = require('uuid');
const slugify = require('slugify');
const { getId } = require('../helper/cookie');
const Restaurant = require('../model/rest');

const getAllMeals = async(req,res)=>{
    try {
        const meals = await Meal.find({});
        return res.status(200).json({
            msg:"all meals returned",
            meals
        })
    } catch (error) {
        return res.status(500).json({
            msg:error.message,
        });
    }
}

const createMeal = async(req,res)=>{
    try {
        const {name,price,description,delivery_price,category}=req.body;
        const image= req.file || req.file.path;
        if(!name){
            throw createError(404,'Please input Meal name');
        }
        if(!price){
            throw createError(404,'Please input Price');
        }
        if(!description){
            throw createError(404,'Please input meal description');
        }
        if(!category){
            throw createError(404,'Please input meal description');
        }
        if(description.length < 10){
            throw createError(400,'Description must be greater than 10 characters');
        }
        const chef = getId(req)
        const newMeal =new  Meal({
            id: uuidv4(),
            name,
            price,
            description,
            category,
            delivery_price,
            slug:slugify(name),
            chef
        })
        if(!image){
            throw createError(404,'Please input meal image');
        }
        if(image && image.size > (1024*1024*2)){
            throw createError(500,'Image size must be less than 2Mbs');
        }    
        if(image){
            newMeal.image=image.path.split("images")[1];
        }
       

        const rest=await Restaurant.findOne({chef});
        let meals = rest.meals;
        meals = [...meals,newMeal.id];
        console.log(meals);
        const filter = {chef};
        const update = {meals}
        const RestUpdate = await Restaurant.findOneAndUpdate(filter,update,{new:true});
        if(!RestUpdate){
           throw createError(422,"meals not added")
        }
        console.log(meals);
        await newMeal.save();
        return res.status(201).json({
            msg:"Meal created successfully",
            newMeal
        })
    } catch (error) {
        console.log(error)
        return res.status(404).json({
            msg:error.message,
        });
    }
}

const getOneMeal = async(req,res)=>{
    try {
        const {slug}=req.params;
        const meal = await Meal.findOne({slug});
        if(!meal){
            return res.status(404).json({
                msg:"meal doesn't exists",
            });
        }
        const owner = await User.findOne({id:String(meal.chef)})
        console.log(owner);
        return res.status(200).json({
            msg:" meal returned",
            data:{
                meal,
                owner:owner.name
            },
        })
    } catch (error) {
        return res.status(500).json({
            msg:error.message,
        });
    }
}

const deleteMeal = async(req,res)=>{
    try {
        const {slug}=req.params;
        meal = await Meal.findOne({slug});
        if(!meal){
            return res.status(404).json({
                msg:"meal doesn't exists",
            });
        } 

        await Meal.findOneAndDelete({slug});
        return res.status(200).json({
            msg:"meal deleted successfully",
        })
    } catch (error) {
        return res.status(500).json({
            msg:error.message,
        });
    }
}

const updateMeal = async(req,res)=>{
    try {
        const {slug}=req.params;
        console.log(slug);
        const meal = await Meal.findOne({id:slug});
        if(!meal){ 
            return res.status(404).json({
                msg:"meal doesn't exists",
            });
        } 
        const filter = {id:slug};
        let update = {...req.body}
        if(req.body.name){
            update={...update,slug:slugify(req.body.name)}
        }
        const image = req.file && req.file.path;
        if(image && image.size > (1024 *1024)){
            throw createError(400,'Image size must be less than 2Mbs');
        }    
        if(image){
            update={...update,image:image.split("images")[1]}
        }

        const mealUpdate = await Meal.findOneAndUpdate(filter,update,{new:true});
        if(!mealUpdate){
            return res.status(422).json({
                msg:"meal was not Updated"
            })
        }
        return res.status(200).json({
            msg:"meal updated successfully",
            data: mealUpdate
        })
    } catch (error) {
        return res.status(500).json({
            msg:error.message,
        });
    }
}

module.exports = {createMeal,updateMeal,deleteMeal,getAllMeals,getOneMeal};

