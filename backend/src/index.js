const express=require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const createError = require('http-errors');

const dev = require('./config');
const connectDB= require('./config/db');
const userRouter = require('./routes/user');
const mealRouter = require('./routes/meal');
const port = dev.app.serverPort;


const app = express();
app.use(morgan("dev"))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
    origin: 'https://localhost:3001',
    credentials:true
}));


app.use('/api/user',userRouter);
app.use('/api/meal',mealRouter);


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