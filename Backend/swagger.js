// swagger.js
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.3',
    info: {
      title: 'CheatBuster API',
      version: '1.0.0',
      description: 'API to check if a person is listed as a cheater using their email.',
    },
    servers: [
      {
        url: 'http://localhost:4000/api',
      },
    ],
  },
  apis: ['./routes/*.js'],  // points to your route files for annotations
};

const swaggerSpec = swaggerJSDoc(options);

export const swaggerDocs = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
