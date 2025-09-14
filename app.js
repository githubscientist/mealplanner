// import express module
const express = require('express');
const mealplanRouter = require('./routes/mealplanRoutes');
const authRouter = require('./routes/authRoutes');

// create an express application
const app = express();

app.use(express.json());

app.use('/auth', authRouter);
app.use('/mealplans', mealplanRouter);

module.exports = app;