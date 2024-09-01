const express = require('express');
const router = express.Router();
const Controller = require('../controllers/priceController');

/**
 * @swagger
 * /price/store:
 *   post:
 *     summary: Fetch and store the current price of Ethereum
 *     description: Fetch the current price of Ethereum from the CoinGecko API and store it in the database.
 *     responses:
 *       '200':
 *         description: Successfully fetched and stored Ethereum price
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 price:
 *                   type: number
 *                   example: 1800000
 *       '500':
 *         description: Failed to fetch or store Ethereum price
 */

router.post('/store', Controller.fetchAndStorePrice);

module.exports = router;
