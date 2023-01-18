const Sequalize=require("sequelize");
const sequeliz=require("../util/db");
const message=sequeliz.define("message",{
    messageText:{
        type:Sequalize.TEXT,
        allowNull:false
    },
    name:{
        type:Sequalize.STRING,
        allowNull:false
    }
},{ timestamps:false
})
module.exports=message;