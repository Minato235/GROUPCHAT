const User = require("../models/user");
const Group = require("../models/message");

const bcyrpt = require("bcrypt");
var jwt = require('jsonwebtoken');

exports.addUserToDb = async (req, res) => {
    const {
        name,
        email,
        phone,
        password
    } = req.body
    const salts = 10;
    const user = await User.findAll({
        where: {
            email
        }
    })
    if (user.length > 0) {
        return res.status(207).json({
            message: 'user already exist'
        })
    } else {
        bcyrpt.hash(password, salts, async (err, hash) => {
            const data = await User.create({
                name,
                email,
                phone,
                password: hash
            })
            res.status(201).json({
                newUserDetail: data
            })
        })
    }
}

function getAccessTokenJwt(id, name) {
    return jwt.sign({
        userId: id,
        name: name
    }, "minato")
}
exports.login = async (req, res) => {
    const {
        email,
        password
    } = req.body;
    const user = await User.findAll({
        where: {
            email
        }
    })
    console.log("****************user******************")

    console.log(user)

    if (user.length > 0) {
        bcyrpt.compare(password, user[0].password, (err, result) => {
            if (err) {
                res.status(500).json({
                    success: false,
                    message: "User does not exits"
                })
            }
            if (result == true) {
                console.log(getAccessTokenJwt(user[0].id, user[0].name))
                res.status(200).json({
                    success: true,
                    message: "User Login succes 200",
                    token: getAccessTokenJwt(user[0].id, user[0].name),
                    name: user[0].name
                })
            } else {
                return res.status(400).json({
                    success: false,
                    message: "User Login Failed !!! check password"
                })
            }
        })
    } else {
        res.status(500).json({
            success: false,
            message: "User Does not Exits from else"
        })
    }
}


exports.sendMessage=(req,res,next)=>{
    req.user.createMessage({
        messageText:req.body.chatMessageInput,
        name:req.body.name1
    }).then(result=>{
        console.log(result)
        res.status(200).json({message:"Message added to DB",user:req.user})
    }).catch(err=>{
        console.log(err)
        res.status(404).json({message:"something went wrong"})
    })
}
exports.getAllMessages=(req,res)=>{
Group.findAll({attributes:["messageText","name"]}).then(result=>{
    console.log("*******************result****************")
    console.log(result)
    res.status(200).json({message:"Got messages success fully",result})
}).catch(err=>{
    res.status(400).json({message:"Something went wrong"})
})
}