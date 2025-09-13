# Meal Planner Backend Application

## Description

The Meal Planner Backend Application is a RESTful API built with Node.js and Express. It allows users to manage their meal plans, including creating, reading, updating, and deleting meal entries. The application uses MongoDB as its database to store meal data.

## Steps

1. Repo setup and Npm Initialization
   - Empty folder creation
   - npm init command
   - Empty repository creation on GitHub
2. Git Initialization

   - readme.md file creation
   - Git initialization with git init command
   - connect local repo with remote repo

   git init
   git remote add origin <remote-repo-URL>
   git add .
   git commit -m "commit message"
   git branch -M main
   git push -u origin main

3. Express Server Setup

   - Install express using npm install express
   - Create .gitignore file and add node_modules/ to it
   - Create server.js file
   - Import express
   - Create express app
   - Listen on a port for incoming requests
   - Setup a basic route to test the server

4. nodemon setup
5. MongoDB setup

   - Create a cluster on MongoDB Atlas
   - Create a database and collection
   - Get the connection string
   - Install mongoose using npm install mongoose
   - Connect to MongoDB using mongoose in server.js

6. dotenv setup

   - Install dotenv using npm install dotenv
   - Create a .env file to store environment variables
   - Load environment variables in server.js

7. MVC Architecture Setup -- Code Splitting

   - Split code from server.js to app.js

const mealplanSchema = new mongoose.Schema({
date: {
type: Date
},
dietType: {
type: String,
enum: ['Vegetarian', 'Balanced', 'Low-Carb', 'High-Protein']
},
meals: [{
mealType: {
type: String,
enum: ['Breakfast', 'Lunch', 'Dinner', 'Snack']
},
name: String,
calories: Number,
protein: Number,
carbs: Number,
fat: Number
}]
}, { timestamps: true });

Example Create MealPlan

```javascript
{
   "date": "2025-10-15",
   "dietType": "Balanced",
   "meals": [
         {
            "mealType": "Breakfast",
            "name": "Oatmeal with Fruits",
            "calories": 350,
            "protein": 10,
            "carbs": 60,
            "fat": 5
         },
         {
            "mealType": "Lunch",
            "name": "Grilled Chicken Salad",
            "calories": 450,
            "protein": 40,
            "carbs": 20,
            "fat": 15
         },
         {
            "mealType": "Dinner",
            "name": "Steamed Fish with Vegetables",
            "calories": 400,
            "protein": 35,
            "carbs": 25,
            "fat": 10
         },
         {
            "mealType": "Snack",
            "name": "Greek Yogurt with Honey",
            "calories": 150,
            "protein": 15,
            "carbs": 20,
            "fat": 0
         }
   ]
}
```
