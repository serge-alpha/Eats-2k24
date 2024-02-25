const createError=require('http-errors');
const Meal = require("../model/meal");
const { uuid } = require('uuidv4');
const slugify = require('slugify');
const { getId } = require('../helper/cookie');
const User = require('../model/user');


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
        const {name,price,description,availability,delivery_price}=req.body;
        const image = req.file.originalname;
        if(!name){
            throw createError(404,'Please input Meal name');
        }
        if(!price){
            throw createError(404,'Please input Price');
        }
        if(!description){
            throw createError(404,'Please input meal description');
        }
        if(description.length < 10){
            throw createError(400,'Description must be greater than 10 characters');
        }
        const chef = getId(req)
        const newMeal =new  Meal({
            id: uuid(),
            name,
            price,
            description,
            availability,
            delivery_price,
            image,
            slug:slugify(name),
            chef
        })

        await newMeal.save();
        const user=await User.findOne({id:chef});
        let meals = user.meals;
        meals = [...meals,newMeal.id];
        const filter = {id:chef};
        const update = {meals}
        const userUpdate = await User.findOneAndUpdate(filter,update,{new:true});
        if(!userUpdate){
           throw createError(422,"meals not added")
        }
        console.log(meals);
        return res.status(201).json({
            msg:"Meal created successfully",
            newMeal
        })
    } catch (error) {
        return res.status(500).json({
            msg:error.message,
        });
    }
}

const getOneMeal = async(req,res)=>{
    try {
        const {id}=req.params;
        const meal = await Meal.findOne({id});
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
        meal = await Meal.findOne({slug});
        if(!meal){
            return res.status(404).json({
                msg:"meal doesn't exists",
            });
        } 
        const filter = {slug};
        const update = {...req.body}
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

