const mongoose = require('mongoose');

const priceSchema = new mongoose.Schema({
    price: {
        type: Number,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
});

const Price = mongoose.model('Price', priceSchema);

module.exports = Price;
