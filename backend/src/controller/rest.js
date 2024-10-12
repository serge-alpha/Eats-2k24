const createError=require('http-errors');
const { uuid } = require('uuidv4');
const slugify = require('slugify');
const { getId } = require('../helper/cookie');
const User = require('../model/user');
const Restaurant = require('../model/rest');


const getAllRest = async(req,res)=>{
    try {
        const rest = await Restaurant.find({});
        return res.status(200).json({
            msg:"all restuarants returned",
            rest
        })
    } catch (error) {
        return res.status(500).json({
            msg:error.message,
        });
    }
}

const createRest = async(req,res)=>{
    try {
        const {restaurant_name,delivery_type,delivery_distance}=req.body;
        if(!restaurant_name){
            throw createError(404,'Please input Restuarant name');
        }
        if(!delivery_type){
            throw createError(404,'Please input delivery type');
        }
        if(!delivery_distance){
            throw createError(404,'Please input delivery distance');
        }
        const chef = getId(req)
        const newRest =new  Restaurant({
            restaurant_name,
            delivery_distance,
            delivery_type,
            slug:slugify(restaurant_name),
            chef
        })

        

        await newRest.save();
        await User.findOneAndUpdate({id:chef},{is_Chef:true},{new:true});
        return res.status(201).json({
            msg:"Restuarant created successfully",
            newRest
        })
    } catch (error) {
        console.log(error.message);
        return res.status(404).json({
            msg:error.message,
        });
    }
}

const getOneRest = async(req,res)=>{
    try {
        const {id}=req.params;
        const rest = await Restaurant.findOne({id});
        if(!rest){
            return res.status(404).json({
                msg:"Restuarant doesn't exists",
            });
        }
        const owner = await User.findOne({id:String(rest.chef)})
        return res.status(200).json({
            msg:" Restuarant returned",
            data:{
                rest,
                owner:owner.name
            },
        })
    } catch (error) {
        return res.status(500).json({
            msg:error.message,
        });
    }
}

const deleteRest = async(req,res)=>{
    try {
        const {slug}=req.params;
        const rest = await Restaurant.findOne({slug});
        if(!rest){
            return res.status(404).json({
                msg:"Restuarant doesn't exists",
            });
        } 

        await Restaurant.findOneAndDelete({slug});
        return res.status(200).json({
            msg:"Restuarant deleted successfully",
        })
    } catch (error) {
        return res.status(500).json({
            msg:error.message,
        });
    }
}

const updateRest = async(req,res)=>{
    try {
        const {slug}=req.params;
        const rest = await Restaurant.findOne({slug});
        if(!rest){ 
            return res.status(404).json({
                msg:"Restuarant doesn't exists",
            });
        } 
        const filter = {slug};
        const update = {...req.body}
        const restUpdate = await Restaurant.findOneAndUpdate(filter,update,{new:true});
        if(!restUpdate){
            return res.status(422).json({
                msg:"Restuarant was not Updated"
            })
        }
        return res.status(200).json({
            msg:"restuarant updated successfully",
            data: restUpdate
        })
    } catch (error) {
        return res.status(500).json({
            msg:error.message,
        });
    }
}

module.exports = {createRest,updateRest,deleteRest,getAllRest,getOneRest};

