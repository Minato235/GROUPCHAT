const express = require("express");
const middleware=require("../middleware/authentication")
const addUserConstroller=require("../controllers/userConrollers");
const router=express.Router();

router.post("/user/sendMessage",middleware.authorization,addUserConstroller.sendMessage)

router.post("/user/signUp",addUserConstroller.addUserToDb)
router.post("/user/login",addUserConstroller.login)

module.exports=router;