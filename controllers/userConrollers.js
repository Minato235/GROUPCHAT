const User = require("../models/user");
const bcyrpt = require("bcrypt");

exports.addUserToDb = async (req, res) => {
    const {
        name,
        email,
        phone,
        password
    } = req.body
    const salts=10;
  const user=await User.findAll({where:{email}})
if(user.length>0){
    return res.status(207).json({message:'user already exist'})
}else{
    bcyrpt.hash(password,salts,async(err,hash)=>{
        const data=await User.create({
            name,email,phone,password:hash
        })
        res.status(201).json({
            newUserDetail:data
        })
    })
}
} 