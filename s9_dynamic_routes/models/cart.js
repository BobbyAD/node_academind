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

    static deleteById(id, price) {
        fs.readFile(p, (err, fileContent) => {
            if (err) {
                console.log(err);
                return;
            } else {
                let cart = JSON.parse(fileContent);
                let quant = 0;
                const updatedCart = { ...cart };
                updatedCart.products = updatedCart.products.filter(
                    (product) => {
                        if (product.id === id) {
                            quant = product.qty;
                            return false;
                        } else {
                            return true;
                        }
                    }
                );
                console.log(Number(cart.totalPrice))
                console.log(Number(price))
                console.log(Number(quant))
                updatedCart.totalPrice = Number(updatedCart.totalPrice) - Number(price * quant);
                fs.writeFile(p, JSON.stringify(updatedCart), (err) => {
                    if (err) {
                        console.log(err);
                    }
                });
            }
        });
    }

    static getCart(cb) {
        fs.readFile(p, (err, fileContent) => {
            const cart = JSON.parse(fileContent);
            if (err) {
                cb(null);
            } else {
                cb(cart);
            }
        })
    }
};
