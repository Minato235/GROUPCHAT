const cors=require("cors");
const https=require("https")
const sequelize = require("./util/db");
const users=require("./routes/user");
const express=require("express");
const user=require("./models/user");
const message = require("./models/message");

const app=express();

app.use(cors());
app.use(express.json())

app.use("/",users)

user.hasMany(message);
message.belongsTo(user)
sequelize.sync()
// sequelize.sync({force:true})
.then(()=>{
    app.listen(3000)
})
.catch((err)=>{
    console.log(err)
})