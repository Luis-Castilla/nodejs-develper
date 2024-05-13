const swaggerJSDoc = require('swagger-jsdoc')

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'DummyJson REST Api Swagger',
      version: '1.0.0',
      description: 'Api documentation for MASU tech challenge',
    },
  },
  apis: ['src/swagger/*.js'], // Define the path to your route files
}

module.exports = swaggerJSDoc(options)
