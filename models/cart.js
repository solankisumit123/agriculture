
// prodect model
const mongoose = require('mongoose');
const cart = new mongoose.Schema({
    productname: {
        type: String,
    },
    price: {
        type: Number,
    },
    description: {
        type: String,
    },
    category: {
        type: String,
    }
    
})
module.exports = mongoose.model('cart', cart)
