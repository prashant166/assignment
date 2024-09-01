const express = require('express');
const router = express.Router();
const Controller = require('../controllers/transactionController');

/**
 * @swagger
 * /transactions/{address}:
 *   get:
 *     summary: Fetch transactions for a given Ethereum address
 *     description: Retrieve the list of transactions for a specified Ethereum address from Etherscan and store them in the database.
 *     parameters:
 *       - name: address
 *         in: path
 *         required: true
 *         description: Ethereum address to fetch transactions for
 *         schema:
 *           type: string
 *           example: '0xce94e5621a5f7068253c42558c147480f38b5e0d'
 *     responses:
 *       '200':
 *         description: Successfully fetched and stored transactions
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   transactionHash:
 *                     type: string
 *                     example: '0x5e8c7e11d647dbd013749c9733b0a57cdbd7d4417eb95f7b9187b45703b1a232'
 *                   from:
 *                     type: string
 *                     example: '0xabcdef1234567890abcdef1234567890abcdef12'
 *                   to:
 *                     type: string
 *                     example: '0x1234567890abcdef1234567890abcdef12345678'
 *                   value:
 *                     type: string
 *                     example: '1000000000000000000'
 *                   gasUsed:
 *                     type: integer
 *                     example: 21000
 *                   gasPrice:
 *                     type: string
 *                     example: '20000000000'
 *       '500':
 *         description: Failed to fetch or store transactions
 */

router.get('/:address', Controller.fetchTransactions);

module.exports = router;
