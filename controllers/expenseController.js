const Transaction = require('../models/Transaction');
const Price = require('../models/Price');

// Fetching the current price
const calculateExpenses = async (req, res) => {
    const address = req.params.address;

    try {
        // Transactions for a given address
        const transactions = await Transaction.find({ from: address }).exec();

        // Calculate total expenses
        let totalExpenses = 0;
        transactions.forEach(tx => {
            const gasUsed = parseFloat(tx.gasUsed);
            const gasPrice = parseFloat(tx.gasPrice);
            totalExpenses += (gasUsed * gasPrice) / 1e18;
        });

        // Recent price for Ethereum
        const latestPrice = await Price.findOne().sort({ timestamp: -1 }).exec();
        const priceInINR = latestPrice ? latestPrice.price : 0;

        res.json({ totalExpenses, priceInINR });
    } catch (error) {
        res.status(500).json({ error: 'Failed to calculate expenses' });
    }
};

module.exports = {
    calculateExpenses
};

