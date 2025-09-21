// import express module
const express = require('express');
const mealplanRouter = require('./routes/mealplanRoutes');
const authRouter = require('./routes/authRoutes');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const logger = require('./utils/logger');
const cors = require('cors');

// create an express application
const app = express();

// enable CORS for all routes
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));

// middleware to parse JSON request bodies
app.use(express.json());

// middleware to parse cookies
app.use(cookieParser());

// middleware for logging HTTP requests
// app.use(morgan('dev'));
app.use(logger);

app.use('/auth', authRouter);
app.use('/mealplans', mealplanRouter);

module.exports = app;