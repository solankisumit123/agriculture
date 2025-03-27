var bill = require('../models/bill');

// creat bill
exports.add_bill = async (req, res) => {
    var data = await bill.create(req.body)
    res.status(200).json({
        status: "bill created successfully..!",
        data
    })
}

// view bill
exports.get_bill = async (req, res) => {
    var data = await bill.find();
    res.status(200).json({
        status: "bill get successfully..!",
        data
    })
}

// update bill
exports.update_bill = async (req, res) => {
    var id = req.params.id;
    var data = await bill.findByIdAndUpdate(id, req.body);
    res.status(200).json({
        status: "bill update successfully..!",
        data
    })
}

// delete bill
exports.delete_bill = async (req, res) => {
    var id = req.params.id;
    var data = await bill.findByIdAndDelete(id);
    res.status(200).json({
        status: "bill delete successfully   ..!",
        data
    })
}