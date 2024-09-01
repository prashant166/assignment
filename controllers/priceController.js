const axios = require('axios');
const Price = require('../models/Price');

const COINGECKO_API_URL = process.env.COINGECKO_API_URL;


const fetchAndStorePrice = async (req, res) => {
    try {
        const response = await axios.get(COINGECKO_API_URL);
        const priceInINR = response.data.ethereum.inr;

        const price = new Price({ price: priceInINR });
        await price.save();

        res.json(price);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch Ethereum price' });
    }
};

module.exports = {
    fetchAndStorePrice
};
