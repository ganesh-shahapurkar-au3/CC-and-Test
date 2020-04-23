const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = require('../models/user')
const jwt = require('jsonwebtoken');
const verifyAuth = require('../check-auth');

/*****************************************************************
------SIGNUP ROUTE TO CREATE USER ACCOUNT-------
*****************************************************************/
router.post("/signup", (req, res) => {
    try {
        User.find({ email: req.body.email })
            .exec()
            .then(user => {
                if (user.length >= 1) {
                    return res.status(409).json({
                        message: "Mail Already exists"
                    });
                } else {
                    const user = new User({
                        _id: new mongoose.Types.ObjectId(),
                        firstname: req.body.firstname,
                        lastname: req.body.lastname,
                        email: req.body.email,
                        password: req.body.password
                    })
                    user.save()
                        .then(result => {
                            console.log(result);
                            res.status(201).json({
                                message: "User created",
                                success: true
                            });
                        })
                }
            })
    } catch (err) {
        console.log('error' + err)
        res.json({
            message: err,
            success: false
        })
    }
})


/*****************************************************************
------LOGIN ROUTE TO VERIFY USER ACCOUNT-------
*****************************************************************/
router.post("/login", (req, res, next) => {
    User.find({ email: req.body.email })
        .exec()
        .then(user => {
            if (user.length < 1) {
                return res.status(401).json({
                    message: "Auth failed"
                });
            }

            if (user[0].password == req.body.password) {
                const token = jwt.sign(
                    {
                        email: user[0].email,
                        userId: user[0]._id
                    },
                    "jwtsecrete",
                    {
                        expiresIn: "1h"
                    }
                );
                return res.status(200).json({
                    message: "Auth successful",
                    success: true,
                    user: user[0],
                    token: token
                });
            }
            res.status(401).json({
                message: "Auth failed",
                success: false
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err,
                success: false
            });
        });
});

/*****************************************************************
------PROFILE ROUTE TO FETCH USER DETAILS WITH JWT Authentication-------
*****************************************************************/

router.get('/profile/:id', verifyAuth, async (req, res) => {
    try {
        const id = req.params.id
        const user = await User.findById({ _id: id });
        res.json({
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email
        })
    }
    catch (err) {
        console.log("error" + err)
        res.json({
            message: err
        })
    }
});

module.exports = router;