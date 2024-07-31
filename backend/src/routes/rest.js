const { getAllRest, getOneRest, createRest, updateRest, deleteRest } = require('../controller/rest');
const { uploadMeal } = require('../middleware/userfile');


const restRouter =require('express').Router();



restRouter.get('/',getAllRest);
restRouter.get('/:id',getOneRest);
restRouter.post('/',uploadMeal.single('image'),createRest);
restRouter.put('/:id',updateRest);
restRouter.delete('/:id',deleteRest);



module.exports = restRouter