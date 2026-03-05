const sequelize = require('../config/database.js');
const { DataTypes } = require('sequelize');

const Cliente = sequelize.define('Cliente', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
}, 
{
    timestamps: true,
});

module.exports = Cliente;