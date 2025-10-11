const express=require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const corsOptions ={
    origin:"https://eats-2k24.onrender.com",
    origin:"http://localhost:3000", 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}


const createError = require('http-errors');
const dev = require('./config');
const connectDB= require('./config/db');
const userRouter = require('./routes/user');
const mealRouter = require('./routes/meal');
const restRouter = require('./routes/rest');
const port = dev.app.serverPort;
const app = express();
const path = require('path');

app.use(cors(corsOptions));
app.use(morgan("dev"))
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '../public')));


app.use('/api/user',userRouter);
app.use('/api/meal',mealRouter);
app.use('/api/restuarant',restRouter);


app.use('/',(req,res)=>{
    return res.status(200).json({
        message:"test route"
    }) ;
})



app.listen(port,()=>{
    console.log(`listening on port http://localhost:${port}`);
    connectDB();
});


app.use((req,res,next)=>{
    next(createError(404,"Route not found"))
})

app.use((err,req,res,next)=>{
    res.status(err.status || 500).json({
        status: err.status || 500,
        msg: err.message|| "Server error"
    })
})
