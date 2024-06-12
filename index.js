require("dotenv").config();
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const verifyToken = require('./middleware/verifyToken')
const productsRoutes = require('./routes/products.routes')
const usersRoutes = require('./routes/users.routes')

// Enable JSON reception
app.use(express.json())
// Enable URL-encoded reception
app.use(express.urlencoded({ extended: true }));

// Template route
app.get('/', function(req, res){
    res.status(200).json({ message: "Panaderia API con MariaDB",
        availableEndpoints: {
            products: {
                getProducts: "GET /products",
                createProduct: "POST /products",
                getProduct: "GET /products/:id",
                updateProduct: "PUT /products/:id",
                deleteProduct: "DELETE /products/:id"
            },
            users: {
                createUser: "POST /users",
                loginUser: "POST /users/login"
            }
     }});
});

// Routes
app.use('/', usersRoutes);
app.use('/', verifyToken, productsRoutes);

// 404 route
app.get("*", (req,res) => { 
    res.status(404).send("404 - route not found");
})

// App listener
app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})