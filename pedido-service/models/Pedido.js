const sequelize = require('../config/database.js');
const { DataTypes } = require('sequelize');

const Pedido = sequelize.define('Pedido', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    descricao: {
        type: DataTypes.STRING,
        allowNull: false
    },
    valor: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    clienteId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, 
{
    timestamps: true
});

module.exports = Pedido;