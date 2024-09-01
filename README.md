# KoinX Assignment

## Overview

KoinX Assignment is a Node.js application designed to manage and analyze Ethereum transactions. It includes features to fetch Ethereum transactions, store and retrieve transaction data, and fetch and store Ethereum price data. The application uses MongoDB for data storage and provides a RESTful API for interacting with the data.

## Features

- **Fetch Ethereum Transactions**: Retrieve a list of transactions for a given Ethereum address using the Etherscan API.
- **Store Ethereum Prices**: Periodically fetch and store Ethereum price data using the CoinGecko API.
- **Calculate Expenses**: Compute and retrieve the total expenses for a given Ethereum address based on transaction data.
- **API Documentation**: Interactive API documentation provided by Swagger UI.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or later)
- [MongoDB](https://www.mongodb.com/) (installed locally or use a MongoDB cloud service)
- A free API key from [Etherscan](https://etherscan.io/apis)
- A free API key from [CoinGecko](https://coingecko.com/)

### Installation

1. **Clone the repository**:

    ```bash
    git clone <repository-url>
    cd KoinX-Assignment
    ```

2. **Install dependencies**:

    ```bash
    npm install
    ```

3. **Create a `.env` file** in the root directory with the following content:

    ```env
    PORT=4000
    MONGO_URI=mongodb://localhost:27017/KoinX
    COINGECKO_API_URL=https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=inr
    ETHERSCAN_API_KEY=your-etherscan-api-key
    COINGECKO_API_URL=https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=inr
    ```

4. **Start the server**:

    For development (with automatic restarts):

    ```bash
    npm run dev
    ```

    For production:

    ```bash
    npm start
    ```

### API Endpoints

- **Fetch Transactions**:
  
  - **GET** `/api/transactions/:address`
  - Description: Fetches transactions for the specified Ethereum address.
  - Example: `GET /api/transactions/0xce94e5621a5f7068253c42558c147480f38b5e0d`

- **Store Price**:
  
  - **POST** `/api/prices/store`
  - Description: Fetches and stores the current Ethereum price.

- **Calculate Expenses**:
  
  - **GET** `/api/expenses/:address`
  - Description: Retrieves the total expenses and current price of Ethereum for the specified address.

### API Documentation

Access the Swagger UI documentation at:

[http://localhost:4000/api-docs](http://localhost:4000/api-docs)

### Contributing

1. **Fork the repository**.
2. **Create a new branch**: `git checkout -b feature/YourFeature`
3. **Make changes and commit**: `git commit -am 'Add new feature'`
4. **Push to the branch**: `git push origin feature/YourFeature`
5. **Create a new Pull Request**.



