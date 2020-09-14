const fs = require("fs");
const path = require("path");

const root = require("../util/path");

const p = path.join(root, "data", "cart.json");

module.exports = class Cart {
    static addProduct(id, productPrice) {
        // fetch the previous cart
        fs.readFile(p, (err, fileContent) => {
            let cart = { products: [], totalPrice: 0 };
            if (!err) {
                cart = JSON.parse(fileContent);
            }
            // analyze the cart -> find existing product
            let existingProduct = cart.products.find((prod) => prod.id === id);
            // add or increase quantity
            if (existingProduct) {
                existingProduct.qty += 1;
            } else {
                let updatedProduct = { id: id, qty: 1 };
                cart.products.push(updatedProduct);
            }
            cart.totalPrice = Number(cart.totalPrice) + Number(productPrice);
            fs.writeFile(p, JSON.stringify(cart), (err) => {
                if (err) {
                    console.log(err);
                }
            });
        });
    }
};
