const Sequalize=require("sequelize");
const sequeliz=require("../util/db");
const message=sequeliz.define("message",{
    messageText:{
        type:Sequalize.TEXT,
        allowNull:false
    }
},{ timestamps:false
})
module.exports=message;