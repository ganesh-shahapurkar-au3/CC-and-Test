const jwt = require('jsonwebtoken')


/****************************************************************
middleware function to verify protected routes using JWT token 
****************************************************************/

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1]
        console.log("token ==>>> " + token)
        const decoded = jwt.verify(token, "jwtsecrete")
        req.userData = decoded
        next();
    }
    catch (error) {
        return res.status(401).json({
            message: "Auth_verification_failed"
        })
    }
}