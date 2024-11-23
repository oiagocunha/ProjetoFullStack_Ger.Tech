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
    value: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    timestamps: true,
});

ProductModel.hasMany(ProductOptionModel, { foreignKey: 'product_id' });
ProductOptionModel.belongsTo(ProductModel, { foreignKey: 'product_id' });

module.exports = ProductOptionModel;