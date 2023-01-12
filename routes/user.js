const express = require("express");
const addUserConstroller=require("../controllers/userConrollers");
const router=express.Router();


router.post("/user/signUp",addUserConstroller.addUserToDb)


module.exports=router;