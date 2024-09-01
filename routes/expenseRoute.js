const express = require('express');
const router = express.Router();
const Controller = require('../controllers/expenseController');

/**
 * @swagger
 * /expenses/{address}:
 *   get:
 *     summary: Get total expenses and current price of Ether
 *     description: Calculate the total expenses for a given Ethereum address and provide the current price of Ether.
 *     parameters:
 *       - in: path
 *         name: address
 *         required: true
 *         description: Ethereum address to calculate expenses for.
 *         schema:
 *           type: string
 *           example: 0xce94e5621a5f7068253c42558c147480f38b5e0d
 *     responses:
 *       '200':
 *         description: Successfully retrieved expenses and price
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 totalExpenses:
 *                   type: number
 *                   example: 0.5
 *                 currentPrice:
 *                   type: number
 *                   example: 1800000
 *       '400':
 *         description: Invalid request
 *       '500':
 *         description: Internal server error
 */

router.get('/:address', Controller.calculateExpenses);

module.exports = router;
