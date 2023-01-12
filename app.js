const cors=require("cors");
const https=require("https")
const sequelize = require("./util/db");
const users=require("./routes/user");
const express=require("express");
const app=express();

app.use(cors());
app.use(express.json())

app.use("/",users)

sequelize.sync()
.then(()=>{
    app.listen(3000)
})
.catch((err)=>{
    console.log(err)
})