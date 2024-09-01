const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const dotenv = require('dotenv');

dotenv.config();

// Swagger definition
const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'KoinX API',
    version: '1.0.0',
    description: 'API documentation for KoinX Assignment',
  },
  servers: [
    {
      url: process.env.BASE_URL,
      description: 'Local server',
    },
  ],
};

// Options for the swagger docs
const options = {
  swaggerDefinition,
  apis: ['./routes/*.js'], // Path to the API docs (adjusted to relative path for better accuracy)
};

// Initialize swagger-jsdoc
const swaggerSpec = swaggerJSDoc(options);

// Setup swagger UI
const setupSwagger = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

module.exports = setupSwagger;
