// import express module
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

// create an express application
const app = express();

app.get('/', (req, res) => {
    res.json({ message: 'Hello Express!' });
});

// listen for incoming requests (start the server)
app.listen(3001, 'localhost', () => {
    console.log(`Server is running on http://localhost:3001`);
});

// connnect to MongoDB
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Could not connect to MongoDB', err));