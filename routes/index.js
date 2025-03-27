var express = require('express');
var router = express.Router();
var data = require('../controllers/admincontroller');
var product = require('../controllers/productcontroller');
var user = require('../controllers/usercontroller');
var cart = require('../controllers/cartcontroller');
var bill = require('../controllers/billcontroller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


// admin login

router.post('/create_admin', data.create_admin)
router.post('/login_admin', data.login_admin)
router.get('/admin_view', data.get_admin)
router.get('/admin_logout', data.admin_logout)

// product
router.post('/add_product', product.add_product)
router.get('/get_product', product.get_product)
router.get('/get_single_product/:id',product.get_singel_product)
router.post('/product_update/:id', product.product_update)
router.get('/product_delete/:id', product.delete_product)



// user create 

router.post('/add_user', user.add_user);
router.post('/user_login', user.user_login);

// cart 
router.post('/add_cart', cart.add_cart);


// creat bill
router.post('/add_bill', bill.add_bill);
router.get('/get_bill', bill.get_bill);
router.post('/update_bill/:id', bill.update_bill);
router.get('/delete_bill/:id', bill.delete_bill);

module.exports = router;
