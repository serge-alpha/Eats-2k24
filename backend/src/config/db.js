const {connect}=require('mongoose');
const createError = require('http-error');
const dev = require('.');

const connectDB=()=>{
    try {
        connect(dev.db.url);
        console.log('Connected');
    } catch (error) {
        throw createError(error);
    }
}

module.exports = connectDB;