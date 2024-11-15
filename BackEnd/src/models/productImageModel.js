const { DataTypes } = require('sequelize');
const connection = require('../config/database/connection');
const ProductModel = require('./productModel');

const ProductImageModel = connection.define('productImage', {
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
    },
    enabled: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    path: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    timestamps: true,
});

module.exports = ProductImageModel;
