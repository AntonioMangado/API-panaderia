const bcrypt = require('bcrypt');
const pool = require('../config/db');
const jwt = require('jsonwebtoken');

const createUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const salt = bcrypt.genSaltSync(8);
        const hashedPassword = bcrypt.hashSync(password, salt);
        const user = await pool.query("INSERT INTO users (username, email, password) VALUES (?, ?, ?) RETURNING *", [username, email, hashedPassword]);
        res.status(201).json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const loginUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await pool.query("SELECT * FROM users WHERE username = ?", [username]);
        if (user.length === 0) {
            return res.status(400).json({ message: "User not found" });
        }

        const match = bcrypt.compareSync(password, user[0].password);
        if (!match) {
            return res.status(400).json({ message: "Invalid password" });
        }

        const token = jwt.sign({ email: user[0].email, username: user[0].username }, process.env.SECRET_KEY, { expiresIn: '30d' });
        res.status(200).json(token);
    } 
    catch (err) {

    }
}

module.exports = {
    createUser,
    loginUser
}