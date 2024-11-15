const { DataTypes } = require('sequelize');
const connection = require('../config/database/connection');
const bcrypt = require('bcrypt');

const ProductModel = connection.define('product', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    enabled: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    slug: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    use_in_menu: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    stock: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    description: {
        type: DataTypes.STRING,
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    price_with_discount: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
}, {
    timestamps: true,
});


module.exports = ProductModel;
