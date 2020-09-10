const express = require("express");

const app = express();

app.use('/add-product', (req, res, next) => {
    console.log("Add Product");
    res.send("<h1>Add Product</h1>");
});

app.use('/', (req, res, next) => {
    console.log("In /");
    res.send("<h1>Hello from Express!</h1>");
});

app.listen(3000);
