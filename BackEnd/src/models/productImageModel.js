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
        allowNull: false,
    },
    path: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    timestamps: true,
});

ProductModel.hasMany(ProductImageModel, { foreignKey: 'product_id' });
ProductImageModel.belongsTo(ProductModel, { foreignKey: 'product_id' });

module.exports = ProductImageModel;