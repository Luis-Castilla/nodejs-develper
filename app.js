require('dotenv').config()
const express = require('express')
const routes = require('./src/routes/routes')
const swaggerSpec = require('./src/swagger/swaggerConfig')
const swaggerUi = require('swagger-ui-express')

const app = express()

// Swagger Json
app.use('/swagger.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    res.send(swaggerSpec)
})

// Swagger UI
app.use('/api-docs/v1', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

// Routes
app.use('/api/v1', routes)

// Route not found (404)
app.use((req, res) => {
    return res
        .status(404)
        .send({
            code: 'NOT_FOUND_ROUTE',
            message: `Route ${req.url} Not found.`,
        })
})

module.exports = app
