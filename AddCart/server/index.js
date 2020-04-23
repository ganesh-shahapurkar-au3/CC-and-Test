const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const userRoutes = require('./routes/userRoutes');
const productsRoutes = require('./routes/productsRoutes');
const cartRoutes = require('./routes/cartRoutes')

const app = express()
const PORT = 5000

/************************************ 
------connect to DB-------
*************************************/
mongoose.connect("mongodb://localhost:27017/mylib", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }, function (err, client) {
    if (err)
        throw err;
    console.log("connected to db")
})


/************************************ 
body-parser module parses the JSON, buffer, string and URL encoded data submitted using HTTP POST reques
*************************************/
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));


// ************************************ 
// CORS was implemented due to the restrictions revolving around the same-origin policy 
// ************************************
app.use(cors())


app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
        return res.status(200).json({});
    }
    next();
});


/************************************ 
------PRODUCT ROUTES-------
*************************************/
app.use("/", productsRoutes);

/************************************ 
------USER ROUTES-------
*************************************/
app.use("/user", userRoutes);

/************************************ 
------CART ROUTES-------
*************************************/
app.use("/user/cart", cartRoutes);





app.listen(PORT, () => console.log("server running on port " + PORT))
