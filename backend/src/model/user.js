const {Schema,model}= require('mongoose');

const userSchema=new Schema({
    id:{
        type:String,
    },
    name:{
        type: String,
        required:[true,'name is required'],
        minlenght:2,
        default:"",
        lowercase:true,
        trim:true
    },
    firstName:{
        type: String,
        minlenght:2,
        lowercase:true,
        trim:true
    },
    lastName:{
        type: String,
        minlenght:2,
        lowercase:true,
        trim:true
    },
    email:{
        type:String,
        unique:true,
        trim:true,
        required:[true,"email is required"],
    },
    password:{
        type:String,
        required:[true ,"password is required"],
        min:6
    },
    id_image:{
        type:String,
        default:null,
    },
    user_image:{
        type:String,
        default:null,
    },
    location:{
        type:String,
        required:[true,"location is required"],
    },
    is_admin:{
        type:Boolean,
        default:false
    },
    // will be updated when user send thier id photo and its verified
    is_verified:{
        type:Boolean,
        default:true
    },
    is_Banned:{
        type:Boolean,
        default:false
    },
    is_Login:{
        type:Boolean,
        default:false
    },
    is_Chef:{
        type:Boolean,
        default:false
    },
    createdAt:{
        type:Date,
        default:new Date
    }
},{timestamps:true})

const User= model('User',userSchema);

module.exports=User;