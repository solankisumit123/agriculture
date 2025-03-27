var cart = require('../models/cart');
const bcrypt = require("bcrypt");


// create cart

exports.add_cart = async (req, res) => {
    res.status(200).json({ 
        status: "cart add successfully../ ",
        data: req.body
    });
}