const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const authHeaders = req.get("Authorization");
    if (!authHeaders) {
        return res.status(401).json({ error: true, message: "No auth headers present" });
    }

    const token = authHeaders.split("Bearer ")[1];
    try {
        jwt.verify(token, process.env.SECRET_KEY);
        next();
    } catch (error) {
        return res.status(401).json({ error: true, message: "Invalid token" });
    }
}

module.exports = verifyToken;