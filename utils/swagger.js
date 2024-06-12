const express = require('express')
const app = express()
const winston = require('winston')
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
require('../middleware/loggers')

const consoleLogger = winston.loggers.get('ConsoleLogger')

const options = {
    definition: {
        panaderia_api: "3.0.0",
        info: {
            title: "Panaderia API with MariaDB",
            version: "1.0.0",
            description: "A simple API to built for the purposes of a technical test",
        },
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: "http",
                    scheme: "bearer",
                    bearerFormat: "JWT"
                }
            }
        }
    },
    apis: ["./routes/*.js"]
}

const swaggerSpec = swaggerJSDoc(options);

function swaggerDocs(app, port) {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    app.get('/api-docs.json', (req, res) => {
        res.setHeader('Content-Type', 'application/json');
        res.send(swaggerSpec);
    });
    consoleLogger.info(`Docs available at http://localhost:${port}/api-docs`);
}

module.exports = swaggerDocs;