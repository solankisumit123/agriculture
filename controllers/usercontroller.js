var user = require("../models/user");
var bcrypt = require('bcrypt');

// create user

exports.add_user = async (req, res) => {
    var check_email = await user.find({ email: req.body.email })
    var b_pass = await bcrypt.hash(req.body.password, 10)
    req.body.password = b_pass
    if (check_email == 0) {
        var data = await user.create(req.body)
        res.status(200).json({
            status: "user create successfully",
            data
        })
    }
    else {
        res.status(200).json({
            status: "email is already exits",

        })
    }
}


// user login
exports.user_login = async (req, res) => {
    var check_email = await user.find({ email: req.body.email })
    if (check_email == 0) {
        res.status(200).json({
            status: "email is not exits",
        })
    }
    else {
        var check_pass = await bcrypt.compare(req.body.password, check_email[0].password)
        if (check_pass) {
            res.status(200).json({
                status: "user login successfully",
                check_email
            })
        }
        else {
            res.status(200).json({
                status: "password is not match",
            })
        }
    }
}

