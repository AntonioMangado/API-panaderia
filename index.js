require("dotenv").config();
const express = require('express')
const app = express()
const port = 3000
const productsRoutes = require('./routes/products.routes')
const usersRoutes = require('./routes/users.routes')

// Enable JSON reception
app.use(express.json())
// Enable URL-encoded reception
app.use(express.urlencoded({ extended: true }));

// Template route
app.get('/', function(req, res){
    res.send('Panaderia API with MariaDB');
});

// Routes
app.use('/', productsRoutes);
app.use('/', usersRoutes);

// 404 route
app.get("*", (req,res) => { 
    res.status(404).send("404 - route not found");
})

// App listener
app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})