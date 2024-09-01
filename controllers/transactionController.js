const axios = require('axios');
const Transaction = require('../models/Transaction');

const ETHERSCAN_API_URL = process.env.ETHERSCAN_API_URL;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;

const fetchTransactions = async (req, res) => {
    const address = req.params.address;
    const url = `${ETHERSCAN_API_URL}?module=account&action=txlist&address=${address}&sort=asc&apikey=${ETHERSCAN_API_KEY}`;
    
    try {
        const response = await axios.get(url);
        const transactions = response.data.result;

        // Save the transactions to database
        await Transaction.deleteMany({ address }); 

        await Transaction.insertMany(transactions.map(tx => ({
            ...tx,
            address
        })));

        res.json(transactions);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch transactions' });
    }
};

module.exports = {
    fetchTransactions
};
