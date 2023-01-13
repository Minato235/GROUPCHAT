const express = require("express");
const addUserConstroller=require("../controllers/userConrollers");
const router=express.Router();


router.post("/user/signUp",addUserConstroller.addUserToDb)
router.post("/user/login",addUserConstroller.login)


module.exports=router;