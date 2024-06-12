const pool = require('../config/db');
const winston = require('winston')
require('../middleware/loggers')

const productsLogger = winston.loggers.get('ProductsLogger')

const getAllProducts = async (req, res) => {
    try {
        const products = await pool.query("SELECT * FROM products");
        res.status(200).json({ data: products });
    } catch (err) {
        productsLogger.error(err.message)
        res.status(500).json({ message: err.message });
    }
}

const getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await pool.query("SELECT * FROM products WHERE id = ?", [id]);
        res.status(200).json({ data: product });
    } catch (err) {
        productsLogger.error(err.message)
        res.status(500).json({ message: err.message });
    }
}

const createProduct = async (req, res) => {
    try {
        const { title, description, status } = req.body;
        const product = await pool.query("INSERT INTO products (title, description, status) VALUES (?, ?, ?) RETURNING *", [title, description, status]);
        res.status(201).json(product);
    } catch (err) {
        productsLogger.error(err.message)
        res.status(500).json({ message: err.message });
    }
}

const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, status } = req.body;
        await pool.query("UPDATE products SET title = ?, description = ?, status = ? WHERE id = ?", [title, description, status, id]);
        res.status(200).json({
            message: `Product with id ${id} updated`,
            product: {
                id,
                title,
                description,
                status
            }
        });
    } catch (err) {
        productsLogger.error(err.message)
        res.status(500).json({ message: err.message });
    }
}

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        await pool.query("DELETE FROM products WHERE id = ?", [id]);
        res.status(200).json({message: `Product with id ${id} deleted`});
    } catch (err) {
        productsLogger.error(err.message)
        res.status(500).json({ message: err.message });
    }
}

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
}