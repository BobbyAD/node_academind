const express = require("express");

const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: false}));

app.use("/add-product", (req, res) => {
    res.send(
        "<form action='/product' method='POST'><input type='text' name='title'><button type=submit>Add Product</button></input></form>"
    );
});

app.post("/product", (req, res) => {
    console.log(req.body);
    res.redirect("/");
});

app.use("/", (req, res) => {
    res.send("<h1>Hello from Express!</h1>");
});

app.listen(3000);
