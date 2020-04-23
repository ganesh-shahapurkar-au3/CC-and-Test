const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Products = require('../models/products');

/*****************************************************************
------ADD PRODUCT ROUTE FOR ADD NEW PRODUCT FOR ADMIN-------
*****************************************************************/
router.post('/addProduct', async (req, res) => {
    console.log('body', req.body)

    try {
        const addProduct = new Products({
            _id: new mongoose.Types.ObjectId(),
            name: req.body.name, price: req.body.price, productImage: req.body.productImage, description: req.body.description, user: user._id, productId: req.body.productId
        })

        await addProduct.save()
            .then(result => {
                console.log(result);
                res.status(201).json({
                    message: "Product added"
                });
            })
    }
    catch (err) {
        console.log('error', err)
        res.json({ message: err })
    }
})

/*****************************************************************
------FETCH PRODUCT ROUTE TO GET ALL PRODUCT LIST-------
*****************************************************************/
router.get('/products', (req, res) => {

    Products.find({}, function (err, products) {
        if (err) {
            res.json({ message: err })
            throw err
        } else {
            res.status(200).json(products)
        }
    });
});

/*****************************************************************
------ROUTE TO FIND PRODUCT BY ID-------
*****************************************************************/
router.get('/get-product/:id', async (req, res) => {
    try {
        const id = req.params.id
        const product = await Products.findOne({ _id: id });
        res.json(product)
    }
    catch (err) {
        console.log("error" + err)
        res.json({
            message: err
        })
    }
});

module.exports = router;