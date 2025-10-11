const {Schema,model}= require('mongoose');

const mealSchema=new Schema({

    id:{
        type: String
    },
    image:{
        type: String,
        required: [true,"meal image required"]
    },
    name:{
        type: String,
        required:[true,'meal name is required'],
        minlenght:2,
        lowercase:true,
        trim:true
    },
    price:{
        type:Number,
        trim:true,
        required:[true,"price is required"],
    },
    delivery_price:{
        type:Number,
        trim:true,
        default:500,
    },
    category:{
        type: String,
        trim:true,
        required:[true,"category is required"],
    },
    description:{
        type: String,
        required:[true,'description of meal is required'],
        minlenght:10,
        lowercase:true,
        trim:true
    },
    availability:{
        type:Boolean,
        default:true,
    },
    rating:{
        type:Number,
        maxvalue:5,
        default:1,
    },
    discounts:{
        type:String,
        lowercase:true,
        trim:true
    },
    slug:{
        type:String,
        lowercase:true,
        required:true
    },
    createdAt:{
        type:Date,
        default:new Date
    },
    chef:{
        type:Object,
    }
},{timestamps:true})

const Meal= model('Meal',mealSchema);

module.exports=Meal;