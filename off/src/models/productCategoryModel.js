const { DataTypes } = require('sequelize');
const connection = require('../config/database/connection');
const ProductModel = require('./productModel');
const CategoryModel = require('./categoryModel');

const ProductCategoryModel = connection.define('productCategory', {
    product_id: {
        type: DataTypes.INTEGER,
        references: {
            model: ProductModel,
            key: 'id',
        },
        allowNull: false,
    },
    category_id: {
        type: DataTypes.INTEGER,
        references: {
            model: CategoryModel,
            key: 'id',
        },
        allowNull: false,
    },
}, {
    timestamps: false,
});

module.exports = ProductCategoryModel;