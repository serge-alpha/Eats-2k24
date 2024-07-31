const {Schema,model}= require('mongoose');
//Resturant schema
const restSchema=new Schema({
    chef:{
        type:Object,
    },
    restaurant_name:{
        type: String,
        minlenght:2,
        default:"",
        lowercase:true,
        trim:true
    },
    delivery_type:{
        type: String,
        trim:true,
    },
    delivery_distance:{
        type: String,
        trim:true,
    },
    rating:{
        type:Number,
        maxvalue:5,
        default:1,
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
    meals:{
        type: Array,
    },

},{timestamps:true})

const Restaurant= model('Restuarant',restSchema);

module.exports=Restaurant;