const mongoose = require('mongoose');
const app = require('./app');
require('dotenv').config();

// connnect to MongoDB
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('Connected to MongoDB');

        // listen for incoming requests (start the server)
        app.listen(3001, 'localhost', () => {
            console.log(`Server is running on http://localhost:3001`);
        });
    })
    .catch((err) => console.error('Could not connect to MongoDB', err));