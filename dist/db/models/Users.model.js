"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../db"));
class Users extends sequelize_1.Model {
}
Users.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
    },
    lastname: {
        type: sequelize_1.DataTypes.STRING,
    },
    nickname: {
        type: sequelize_1.DataTypes.STRING,
    },
    picture: {
        type: sequelize_1.DataTypes.STRING,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
    },
    status: {
        type: sequelize_1.DataTypes.BOOLEAN,
    },
    category: {
        type: sequelize_1.DataTypes.STRING,
        // .ENUM("user", "silver", "gold", "admin"),
        // defaultValue: "user",
    },
}, { sequelize: db_1.default, paranoid: true });
// season:{
// type: DataTypes.ENUM("summer", "autumn","winter","spring")},
exports.default = Users;
