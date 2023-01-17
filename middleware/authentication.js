let jwt = require("jsonwebtoken");
const User = require("../models/user");

exports.authorization = (req, res,next) => {
    console.log("isdiiiiiiiide *** Autho")
try{
    const token = req.header("Authorization")
    console.log(token)
    const user = jwt.verify(token, "minato")
    console.log(user);
    User.findByPk(user.userId).then(user=>{
        console.log(JSON.stringify(user));
        req.user=user;
        next();
    }).catch(err=>{
        throw new Error(err)
    })
}catch(err){
    console.log(err);
    return res.status(401).json({
        success:false
    })
}

}