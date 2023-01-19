const Sequalize=require("sequelize");
const sequeliz=require("../util/db");
const message=sequeliz.define("message",{
    messageText:Sequalize.STRING,
    name:{
        type:Sequalize.STRING,
        // allowNull:false
    }
},{ timestamps:false
})
module.exports=message;