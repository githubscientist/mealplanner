// import express module
const express = require('express');

// create an express application
const app = express();

app.get('/mealplans', (req, res) => {
    res.json({ message: 'Get All Meal Plans' });
});

module.exports = app;