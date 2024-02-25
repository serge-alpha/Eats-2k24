const { getAllMeals, getOneMeal, createMeal, updateMeal, deleteMeal } = require('../controller/meal');
const { uploadMeal } = require('../middleware/userfile');


const mealRouter =require('express').Router();



mealRouter.get('/',getAllMeals);
mealRouter.get('/:id',getOneMeal);
mealRouter.post('/',uploadMeal.single('image'),createMeal);
mealRouter.put('/:id',updateMeal);
mealRouter.delete('/:id',deleteMeal);




module.exports = mealRouter