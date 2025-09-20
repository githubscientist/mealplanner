// import express module
const express = require('express');
const mealplanRouter = require('./routes/mealplanRoutes');
const authRouter = require('./routes/authRoutes');
const cookieParser = require('cookie-parser');

// create an express application
const app = express();

// middleware to parse JSON request bodies
app.use(express.json());

// middleware to parse cookies
app.use(cookieParser());

app.use('/auth', authRouter);
app.use('/mealplans', mealplanRouter);

module.exports = app;