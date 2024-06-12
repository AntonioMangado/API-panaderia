const jwt = require('jsonwebtoken');
const winston = require('winston');
require('../middleware/loggers');

const productsLogger = winston.loggers.get('ProductsLogger')

const verifyToken = (req, res, next) => {
    const authHeaders = req.get("Authorization");
    if (!authHeaders) {
        productsLogger.error("No auth headers present")
        return res.status(401).json({ error: true, message: "No auth headers present" });
    }

    const token = authHeaders.split("Bearer ")[1];
    try {
        jwt.verify(token, process.env.SECRET_KEY);
        next();
    } catch (error) {
        productsLogger.error("Invalid token")
        return res.status(401).json({ error: true, message: "Invalid token" });
    }
}

module.exports = verifyToken;