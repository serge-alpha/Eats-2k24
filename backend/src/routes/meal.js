const { getAllMeals, getOneMeal, createMeal, updateMeal, deleteMeal } = require('../controller/meal');
const { uploadMeal } = require('../middleware/userfile');

// add is login tto this file
const mealRouter =require('express').Router();



mealRouter.get('/',getAllMeals);
mealRouter.get('/:slug',getOneMeal);
mealRouter.post('/',uploadMeal.single('image'),createMeal);
mealRouter.put('/:slug',uploadMeal.single('image'),updateMeal);
mealRouter.delete('/:slug',deleteMeal);




module.exports = mealRouter