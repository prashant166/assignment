const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const priceRoute = require('./routes/priceRoute');
const transactionRoute = require('./routes/transactionRoute');
const expenseRoute = require('./routes/expenseRoute');
const setupSwagger = require('./swagger/swaggerConfig');

dotenv.config();

const app = express();
const port = process.env.PORT;

// Middleware to parse JSON bodies
app.use(express.json());

// MongoDB connection
const mongoURI = process.env.MONGO_URI;

setupSwagger(app);

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Database is successfully connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Basic route for testing
app.get('/', (req, res) => {
    res.send('Hello, KoinX Assignment with MongoDB!');
});

// Use the routes
app.use('/api/prices', priceRoute);
app.use('/api/transactions', transactionRoute);
app.use('/api/expenses', expenseRoute);

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
