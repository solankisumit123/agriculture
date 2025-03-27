// prodect model
const mongoose = require('mongoose');
const prodect = new mongoose.Schema({
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
module.exports = mongoose.model('product', prodect)
