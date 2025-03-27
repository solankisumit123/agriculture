var product = require('../models/product');




// add product
    exports.add_product = async (req, res) => {
        res.status(200).json({ 
            status: "product add successfully../ " ,
            data: req.body
        });
    }

// view product
exports.get_product = async (req, res) => {
    var data = await product.find();
    res.status(200).json({
        status: "product get successfully../ " ,
        data: data
    });
}

// view singel product

exports.get_singel_product = async (req, res) => {
   var id = req.params.id;
    var data = await product.findById(id);
    res.status(200).json({
        status: "product get successfully../ " ,
        data: data
    });
}

// update product

exports.product_update = async(req,res) =>{
    var id = req.params.id;
    var data = await product.findByIdAndUpdate(id,req.body);   
    res.status(200).json({
        status:"product Upadates..!",
        data
    })
} 


// delete product

exports.delete_product = async(req,res) =>{
    var id = req.params.id;
    var data = await product.findByIdAndDelete(id);
    res.status(200).json({
        status:"product Deleted..!",
        data
    })
}
