const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = require('../models/user');
const Cart = require('../models/cart');
const verifyAuth = require('../check-auth');

/*****************************************************************
------ADDCART ROUTE TO ADD NEW PRODUCT IN USER CART-------
*****************************************************************/
router.post('/add-cart/:id', verifyAuth, async (req, res) => {
    const id = req.params.id
    console.log("params", id)

    try {
        const user = await User.findOne({ _id: id });

        const addProduct = new Cart({
            _id: new mongoose.Types.ObjectId(),
            name: req.body.name,
            price: req.body.price,
            productImage: req.body.productImage,
            description: req.body.description,
            user: user._id,
            productId: req.body._id,
            quantity: 1
        })

        await addProduct.save()

        user.cart.push(addProduct)

        user.save()
            .then(result => {
                console.log(result);
                res.status(201).json({
                    message: "Product added",
                    product: addProduct
                });
            })
    }
    catch (err) {
        console.log('error', err)
        res.json({ message: err })
    }
});


/*****************************************************************
------UPDATE CART ROUTE FOR UPDATE PRODUCT QUANTITY-------
*****************************************************************/
router.put('/update-cart/:id', verifyAuth, (req, res) => {
    Cart.findByIdAndUpdate(
        req.params.id, req.body, { new: true }, (err, result) => {
            if (err) return res.status(500).send(err);
            const response = {
                message: "Updated Succesfully",
                cart: result
            }
            return res.send(response);
        }
    )
})

/*****************************************************************
------DLELTE CART ROUTE TO DELETE PRODUCT FROM USER CART-------
*****************************************************************/
router.delete('/delete-cart/:id', verifyAuth, (req, res) => {
    Cart.findByIdAndRemove(
        req.params.id, (err, cart) => {
            if (err) return res.status(500).send(err)
            const result = {
                message: "cart product successfully deleted",
                id: cart._id
            }
            return res.send(result);
        })

})


/*****************************************************************
------GET ALL CART PRODUCT BY ID USER ID-------
*****************************************************************/
router.get('/get-cart/:id', verifyAuth, async (req, res) => {
    const id = req.params.id
    console.log("params", id)

    try {
        const user = await Cart.find({ user: id });
        res.json(user)

    }
    catch (err) {
        console.log('error', err)
        res.json({ message: err })
    }
})

module.exports = router;