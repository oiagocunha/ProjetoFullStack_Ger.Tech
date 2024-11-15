const { DataTypes } = require('sequelize');
const connection = require('../config/database/connection');
const ProductModel = require('./productModel');

const ProductOptionModel = connection.define('productOption', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    product_id: {
        type: DataTypes.INTEGER,
        references: {
            model: ProductModel,
            key: 'id',
        },
        allowNull: false,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    shape: {
        type: DataTypes.ENUM('square', 'circle'),
        defaultValue: 'square',
    },
    radius: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    type: {
        type: DataTypes.ENUM('text', 'color'),
        defaultValue: 'text',
    },
    values: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    timestamps: true,
});

module.exports = ProductOptionModel;
