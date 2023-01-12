const Sequalize = require("sequelize")
const db = require("mysql");
const sequelize = require("../util/db");
const User =sequelize.define("userG", {
    id: {
        type: Sequalize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequalize.STRING
    },
    email: {
        type: Sequalize.STRING,
        unique: true,
    },
    password: {
        type: Sequalize.STRING
    },
    phone: {
        type: Sequalize.STRING
    }
}, {
    timestamps: false
})
module.exports = User