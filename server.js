// import express module
const express = require('express');

// create an express application
const app = express();

app.get('/', (req, res) => {
    res.json({ message: 'Hello Express!' });
})

// listen for incoming requests (start the server)
app.listen(3001, 'localhost', () => {
    console.log(`Server is running on http://localhost:3001`);
});