const pool = require('./config/db');
const { faker } = require('@faker-js/faker');
const INTERVALS = 10;

const generateProducts = () => {
    const products = [];
    for (let i = 0; i < 10; i++) {
        const title = faker.commerce.productName();
        const description = faker.commerce.productDescription();
        const status = Math.random() > 0.5 ? "stock" : "no stock";
        products.push(title, description, status);
    }
    return products;
}

const generatePlaceholders = (times) => {
    let values = '(?, ?, ?)';
    for (let i = 0; i < times - 1; i++) {
        values += ', (?, ?, ?)';
    }
    return values;
}

const insertIntoProducts = async () => {
    const placeholders = generatePlaceholders(INTERVALS);
    const sql = 'INSERT INTO products (title, description, status) VALUES ' + placeholders;
    const values = generateProducts();

    try {
        await pool.query(sql, values);
        console.log('Products inserted');
    } catch (err) {
        console.log(err);
    };
}

const seed = async () => {
    await insertIntoProducts();
}

seed();