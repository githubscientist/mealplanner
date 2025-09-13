const Mealplan = require('../models/Mealplan');

const createMealPlan = async (req, res) => {
    try {
        const newMealPlan = new Mealplan(req.body);
        const savedMealPlan = await newMealPlan.save();
        res.status(201).json({ message: 'Meal Plan Created', mealplan: savedMealPlan });
    } catch (error) {
        res.status(500).json({ message: 'Creating meal plan failed...', error: error.message });
    }
}

const getAllMealPlans = (req, res) => {
    res.json({ message: 'Get All Meal Plans' });
}

module.exports = {
    getAllMealPlans,
    createMealPlan
}